import React, { Component } from 'react'

import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, Modal, AsyncStorage, StyleSheet, Alert } from 'react-native';
import { Tabs, TextareaItem } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux'
import { FlatList } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
const s = width / 640;

const tabs = [
    { title: '推荐' },

    { title: '我的' },

];
export default class find extends Component {
    constructor(props) {
        super()
        this.state = {
            use_id: '',
            my: {},
            tiezi: {},
            imgurl: '../../assets/zguanzhu.png',
            modalVisible3: false,
            su_id: '',
            content: '',
            num: '',
            use_name:''

        }
    }
    //弹窗可见性
    setModalVisible3 = (visible) => {
        // console.log(visible)
        this.setState({
            modalVisible3: visible.vi,
            su_id: visible.su,
            num: visible.num
        })
    };
    componentDidMount() {
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            //console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/getfabu/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
                .then((res) => {
                    // console.log(res.data)
                    this.setState({ my: res.data })
                })


            fetch(`http://81.70.101.193:8005/gettiezi`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
                .then((res) => {
                    // console.log(res.data)
                    this.setState({ tiezi: res.data })
                })
        })
    }
    dianzan = (e) => {
        const a = { num: e.dianzan_num + 1 }
        fetch(`http://81.70.101.193:8005/zdianzan/${e.su_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
        }).then(res => res.json())

            .then((res) => {

                fetch(`http://81.70.101.193:8005/gettiezi`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    }
                }).then((res) => res.json())
                    .then((res) => {
                        // console.log(res.data)
                        this.setState({ tiezi: res.data })
                    })
                Alert.alert('点赞成功！')
            })

    }
    //收藏
    shoucang = (e) => {
        const a = { num: e.shoucang_num + 1 }
        fetch(`http://81.70.101.193:8005/zshoucang/${e.su_id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
        }).then(res => res.json())
            .then((res) => {
                const b = {
                    usr_id: this.state.use_id,
                    su_id: e.su_id
                }
                fetch(`http://81.70.101.193:8005/z_shoucang`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(b)
                }).then(res => res.json())
                    .then((res) => {
                        fetch(`http://81.70.101.193:8005/gettiezi`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'text/plain; charset=UTF-8'
                            }
                        }).then((res) => res.json())
                            .then((res) => {
                                // console.log(res.data)
                                this.setState({ tiezi: res.data })
                            })
                        Alert.alert('收藏成功！')
                    })
            })


    }

    //关注
    guanzhu = (e) => {
        fetch(`http://81.70.101.193:8005/zguanzhu/${e}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },

        }).then(res => res.json())
            .then((res) => {
                fetch(`http://81.70.101.193:8005/gettiezi`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    }
                }).then((res) => res.json())
                    .then((res) => {
                        // console.log(res.data)
                        this.setState({ tiezi: res.data })
                    })

                Alert.alert('关注成功！')
            })
    }

    //发布评论
    fabu = (e) => {
        // console.log(this.state.content)
        //console.log(this.state.su_id)
       if(this.state.content=='')
       {
           Alert.alert('请填写评论内容在提交')
       }
       else{
        fetch(`http://81.70.101.193:8005/get_phone/${this.state.use_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            }
        }).then((res) => res.json())
        .then((res)=>{
            this.setState({
                use_name:res.data[0].use_name
            })
        })
        
        var a = {
            usr_id: this.state.use_id,
            su_id: this.state.su_id,
            content: this.state.content,
            use_name:this.state.use_name
        }
        fetch(`http://81.70.101.193:8005/z_addpinglun`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            body: JSON.stringify(a)
        }).then(res => res.json())
            .then((res) => {
                const a = { num: this.state.num + 1 }
                fetch(`http://81.70.101.193:8005/zpinglin/${this.state.su_id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                }).then(res => res.json()).then((res) => {
                    fetch(`http://81.70.101.193:8005/gettiezi`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        }
                    }).then((res) => res.json())
                        .then((res) => {
                            // console.log(res.data)
                            this.setState({ tiezi: res.data })
                        })
                })
                Alert.alert('评论成功！')
                this.setModalVisible3({ vi: false })
            
    })
       }
}
render() {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: 73 * s,
                    backgroundColor: '#A7BCF0',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}

            >

                <Text style={{ fontSize: 20, marginLeft: 270 * s }}>分享</Text>

                <TouchableOpacity style={{ marginLeft: 200 }} onPress={() => Actions.fabu()}>
                    <Image style={{ height: 30, width: 30 }} source={require('../../assets/zfabu.png')}></Image>
                </TouchableOpacity>

            </View>
            <Tabs

                tabs={tabs}
            >
                <View>
                    <FlatList
                        data={this.state.tiezi}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => Actions.contents({ 'contentId': item.su_id })}>
                                <View style={{ height: 200, width: '98%', marginTop: 5, borderWidth: 2, borderColor: '#A7BCF0' }}>
                                    <View style={{ paddingLeft: 20, paddingTop: 10, flexDirection: 'row' }}>
                                        <View>
                                            <Text style={{ fontSize: 18 }}>{item.use_name}</Text>
                                            <Text>{item.state_date}</Text>
                                        </View>
                                        <TouchableOpacity style={{ marginLeft: '50%' }} onPress={() => this.guanzhu(item.su_id)}>
                                            <Text style={{ fontSize: 14 }}>{item.guanzhu}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ paddingTop: 10, paddingLeft: 20, height: 110 }}>
                                        <Text>{item.content}</Text>
                                    </View>
                                    <View style={{ marginLeft: '60%', flexDirection: 'row' }}>
                                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.dianzan(item)}>
                                            <Text style={{ fontSize: 18 }}>{item.dianzan_num == null ? 0 : item.dianzan_num}</Text>
                                            <Image source={require('../../assets/zdianzan.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30 }} onPress={() => {
                                            this.setModalVisible3({ su: item.su_id, vi: true, num: item.pinglun_num })
                                        }}>
                                            <Text style={{ fontSize: 18 }}>{item.pinglun_num == null ? 0 : item.pinglun_num}</Text>
                                            <Image source={require('../../assets/zpinglun.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                        </TouchableOpacity>
                                        <Modal animationType={'none'}
                                            transparent={true}
                                            visible={this.state.modalVisible3}
                                        >
                                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                                <View style={{ width: '65%', backgroundColor: '#A7BCF0', padding: 10 * s, marginTop: 10 * s, borderTopLeftRadius: 20 * s, borderTopRightRadius: 20 * s, borderBottomColor: '#adaba3', borderBottomWidth: 2 }}>
                                                    <TextareaItem
                                                        placeholder='请输入评论'
                                                        value={i => this.wujinyareturn1 = i}
                                                        onChange={value => {
                                                            this.setState({
                                                                content: value,
                                                            });
                                                        }}
                                                        placeholderTextColor='#C0C0C0'
                                                        rows={6}
                                                        count={500}
                                                    />
                                                    <View style={{ flexDirection: 'row' }}>

                                                        <TouchableOpacity style={{ backgroundColor: '#A7BCF0', width: '48%', height: 30, justifyContent: 'center', alignItems: 'center', borderRightWidth: 2, borderColor: 'white' }} onPress={() => this.setModalVisible3({ vi: false })} >
                                                            <Text style={{ fontSize: 20, color: 'white' }}>取消</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={{ backgroundColor: '#A7BCF0', width: '48%', height: 30, justifyContent: 'center', alignItems: 'center' }} onPress={this.fabu}>
                                                            <Text style={{ fontSize: 20, color: 'white' }}>发布评论</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>




                                            </View>
                                        </Modal>
                                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30 }} onPress={() => this.shoucang(item)}>
                                            <Text style={{ fontSize: 18 }}>{item.shoucang_num == null ? 0 : item.shoucang_num}</Text>
                                            <Image source={require('../../assets/zshoucang.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    >

                    </FlatList>
                </View>

                <View>
                    <FlatList
                        data={this.state.my}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <View style={{ height: 200, width: '98%', marginTop: 5, borderWidth: 2, borderColor: '#A7BCF0' }}>
                                    <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                                        <Text style={{ fontSize: 18 }}>{item.use_name}</Text>
                                        <Text>{item.state_date}</Text>
                                    </View>
                                    <View style={{ paddingTop: 10, paddingLeft: 20, height: 110 }}>
                                        <Text>{item.content}</Text>
                                    </View>
                                    <View style={{ marginLeft: '60%', flexDirection: 'row' }}>
                                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 18 }}>{item.dianzan_num == null ? 0 : item.dianzan_num}</Text>
                                            <Image source={require('../../assets/zdianzan.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30 }}>
                                            <Text style={{ fontSize: 18 }}>{item.pinglun_num == null ? 0 : item.pinglun_num}</Text>
                                            <Image source={require('../../assets/zpinglun.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30 }}>
                                            <Text style={{ fontSize: 18 }}>{item.shoucang_num == null ? 0 : item.shoucang_num}</Text>
                                            <Image source={require('../../assets/zshoucang.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    >

                    </FlatList>
                </View>

            </Tabs>
            <View></View>
        </View>
    )
}
}

