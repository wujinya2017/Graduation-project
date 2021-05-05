import React, { Component } from 'react'
import { View, ScrollView,Text, TextInput, Dimensions, StyleSheet, Image, FlatList, AsyncStorage, Alert, TouchableOpacity } from 'react-native'
import { List, TextareaItem, PickerView, Drawer } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {
    Icon, Button, InputItem,

    WhiteSpace,
} from '@ant-design/react-native'

const { width, scale } = Dimensions.get('window');
const s = width / 640;


export default class motto extends Component {
    constructor(props) {
      
        super(props);
        this.state = {
            diaplay: true,
            text: '',
            use_id: '',
            value: undefined,
            list1: []
        }
        this.onChange = value => {
            this.setState({
                value,
            });
        };
    }
    diaplay = () => {
        Alert.alert('ddd')
    }
    //获取输入内容
    addtext = (e) => {
        this.setState({
            text: e
        })
    }

    //获取登录用户的唯一标识id
    componentDidMount() {
        console.log(this.props.refresh())
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            // console.log(this.state.use_id)

            //获取座右铭
            fetch(`http://81.70.101.193:8005/getmotto/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
                .then((res) => {
                    //console.log(res)
                    this.setState({ list1: res.data })
                   // console.log(this.state.list1)
                })

        })
        //console.log(this.state.use_id)



    }


    //发布座右铭
    fabu = () => {
        //console.log(this.state.text)
      // console.log(this.props.refersh1)
        if (this.state.text == '') {
            Alert.alert('提示', '请输入座右铭后在提交！')
        }
        else {
            var user = { content: this.state.text }
            fetch(`http://81.70.101.193:8005/addmotto/${this.state.use_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
                .then((res) => {
                    Alert.alert('提示', '上传成功成功', [


                        {
                            text: "确认"
                        },
                    ])
                    fetch(`http://81.70.101.193:8005/getmotto/${this.state.use_id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        }
                    }).then((res) => res.json())
                        .then((res) => {
                            //console.log(res)
                            this.setState({ list1: res.data })
                           // console.log(this.state.list1)
                        })
                })

        }
    }
    //删除座右铭
    delmotto = (motto_id) => {
     // console.log(motto_id)
        fetch(`http://81.70.101.193:8005/delmotto/${motto_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                Alert.alert('提示', '删除成功！', [
                    { text: "确认"},
                
                ])
                fetch(`http://81.70.101.193:8005/getmotto/${this.state.use_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    }
                }).then((res) => res.json())
                    .then((res) => {
                        //console.log(res)
                        this.setState({ list1: res.data })
                      //  console.log(this.state.list1)
                    })
            
            })

    }
    render() {
        return (
            <ScrollView>
            <View>
            <View
                    style={{
                        width: '100%',
                        height: 73 * s,
                        backgroundColor: '#A7BCF0',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}

                >
                  <TouchableOpacity style={{marginLeft:5}} onPress={()=>Actions.pop(this.props.refresh())}>
                             <Image source={require('../../assets/zleft.png')} style={{width:25,height:25}}></Image>
                         </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginLeft: 240 * s }}>发布座右铭</Text>

              

                </View>
                <View style={styles.a1}>
                    <View>
                        <TextareaItem
                            rows={7}
                            placeholder="嗨，请在此处输入座右铭吧！"
                            onChange={this.addtext}
                            count={100}
                            style={{ paddingVertical: 5 }}
                        />
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#A7BCF0', width: 74, height: 30, marginLeft: '85%', justifyContent: 'center', alignItems: 'center' }} onPress={this.fabu}>
                        <Text style={{ fontSize: 20, color: 'white' }}>发布</Text>
                    </TouchableOpacity>
                    <View style={styles.list}>
                        <Image style={styles.img} source={require('../../assets/zhistory.png')} onPress={() => this.display()}></Image>
                        <Text style={{ fontSize: 27, marginLeft: 10 * s }}>我的历史</Text>
                    </View>
                    <View>
                        <FlatList
                            data={this.state.list1}
                            renderItem={({ item }) => (

                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.zong}>
                                        <View style={{flexDirection:'row',marginTop:13}}>
                                            <View style={{ width: '90%' }}>
                                                <Text style={{fontSize:18}}>{item.content ? (item.content.length > 25 ? item.content.substr(0, 24) + '...' : item.content) : ''}</Text>
                                            </View>
                                            <TouchableOpacity onPress={()=>this.delmotto(item.motto_id)}>
                                                <Image style={styles.img} source={require('../../assets/zla.png')}></Image>
                                            </TouchableOpacity>
                                        </View>
                                        <View><Text>{item.motto_time}</Text></View>
                                    </View>


                                </View>

                            )}
                        ></FlatList>
                    </View>
                </View>
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    a1: {
        flexDirection: 'column'

    },
    text: {
        width: '90%',
        height: 150 * s,
        backgroundColor: 'red'
    },
    a2: {
        flexDirection: 'row'
    },
    a3:
    {
        marginLeft: 40 * s,
        height: 50 * s,
        width: 160 * s,
        borderRadius: 25 * s,
        borderColor: 'red',
        borderWidth: 1 * s,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    a4:
    {
        height: 25 * s,
        width: 25 * s
    },
    img: {
        height: 34 * s,
        width: 34 * s,
        marginLeft: 10 * s
    },
    list: {
        flexDirection: 'row',
        height: 50 * s,
        width: '100%',
        marginTop: 20 * s,
        alignItems: 'center'
    },
    zong: {
        borderColor: '#adaba3',
        borderWidth: 2,
        flexDirection: 'column',
        height: 110 * s,
        marginTop: 33 * s,
        width: '98%',
        borderRadius: 30 * s,
       backgroundColor:'white',
        paddingLeft: 15 * s
    },

})
