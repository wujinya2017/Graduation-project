import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity, AsyncStorage, FlatList, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const lists = [
    { title: '草稿箱', img: '../../assets/1.jpg', name: 'exception', content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', num: 3, add: 34 },
    { title: '草稿箱', img: '../../assets/1.jpg', name: 'exception', content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', num: 3, add: 34 },
    { title: '草稿箱', img: '../../assets/1.jpg', name: 'exception', content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', num: 3, add: 34 },
    { title: 'dsjdjksjkdsjksdjksdj', img: '../../assets/1.jpg', name: 'exception', content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', num: 3, add: 34 }
]
export default class shoucang extends Component {
    constructor(props) {
        super()
        this.state = {
            add: true,
            use_id: '',
            length: 0,
            content: {},
            img: require('../../assets/zadd.png')
        }
    }
    add = () => {
        if (this.state.add == false) {
            this.setState({
                add: true,
                img: require('../../assets/zadd.png')
            })
        }
        else {
            this.setState({
                add: false,
                img: require('../../assets/zjian.png')
            })
        }
        //console.log(this.state.add)
    }
    componentDidMount() {
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            //console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/get_shoucang_content/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
                .then((res) => {
                    //console.log(res.data)
                    this.setState({ length: res.data.length })
                    this.setState({ content: res.data })


                })
        })
    }

    //删除
    del = (e) => {
        //console.log(e)
  
        fetch(`http://81.70.101.193:8005/delshoucang/${e}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                Alert.alert('提示', '删除成功！', [
                    { text: "确认" },

                ])
                fetch(`http://81.70.101.193:8005/get_shoucang_content/${this.state.use_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    }
                }).then((res) => res.json())
                    .then((res) => {
                        //console.log(res.data)
                        this.setState({ length: res.data.length })
                        this.setState({ content: res.data })


                    })

            })

    }
    render() {

        return (
           <ScrollView>
                <View>
                <View style={styles.a}>
                    <View>
                        <Text style={styles.font}>{this.state.length}个收藏内容</Text>

                    </View>
                    <View><Image style={styles.img} source={require('../../assets/zshoucang.png')}></Image></View>
                    <TouchableOpacity onPress={this.add} style={{ marginLeft: 330 * s }}><Image style={styles.img} source={this.state.img}></Image></TouchableOpacity>

                </View>
                {this.state.add == true ? <View></View> :
                    <View>
                        <FlatList
                            data={this.state.content}
                            renderItem={({ item }) => (
                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.b}>
                                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                                        <View style={{ marginTop: 10 * s, flexDirection: 'row' }}>
                                            {/* <Image style={styles.img1} source={require('../../assets/1.jpg')}></Image> */}
                                            <Text style={{ marginLeft: 20 * s, fontSize: 16, color: '#6A5ACD' }}>{item.use_name}</Text>
                                            <Text style={{ marginLeft: 20 * s, fontSize: 16, color: '#6A5ACD' }}>{item.state_date}</Text>
                                        </View>
                                        <View style={styles.c}>
                                            <Text>{item.content}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: 100 * s, marginLeft: '30%' }}>
                                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.dianzan(item)}>
                                                <Text style={{ fontSize: 18 }}>{item.dianzan_num == null ? 0 : item.dianzan_num}</Text>
                                                <Image source={require('../../assets/zdianzan.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30 }}>
                                                <Text style={{ fontSize: 18 }}>{item.pinglun_num == null ? 0 : item.pinglun_num}</Text>
                                                <Image source={require('../../assets/zpinglun.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30 }} onPress={() => this.shoucang(item)}>
                                                <Text style={{ fontSize: 18 }}>{item.shoucang_num == null ? 0 : item.shoucang_num}</Text>
                                                <Image source={require('../../assets/zshoucang.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={{ marginLeft: '87%' }} onPress={() => this.del(item.shoucang_id)}>
                                            <Image source={require('../../assets/zla.png')} style={{ width: 30, height: 30, marginLeft: 5 }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        >

                        </FlatList>
                    </View>
                }
            </View>
           </ScrollView>
        )

    }

}

const styles = StyleSheet.create({
    a: {
        height: 80 * s,
        width: '100%',
        borderBottomColor: '#adaba3',
        borderBottomWidth: 4,

        paddingLeft: 20 * s,
        flexDirection: 'row',
        alignItems: 'center'
    },
    font: {
        fontSize: 20
    },
    img: {
        width: 40 * s,
        height: 40 * s,
        marginLeft: 15 * s
    },
    b: {
        height: 300 * s,
        width: '90%',
        borderWidth: 4,
        borderColor: '#A7BCF0',
        marginTop: 1 * s,
        paddingLeft: '10%',
        flexDirection: 'column',
        paddingTop: '1%'
    },
    img1: {
        width: 40 * s,
        height: 40 * s,
        borderRadius: 20 * s
    },
    c: {
        width: '80%',
        height: 140 * s,
        borderColor: '#adaba3',
        borderWidth: 2
    },
    img2: {
        width: 30 * s,
        height: 30 * s,
        marginLeft: 30 * s
    }
})