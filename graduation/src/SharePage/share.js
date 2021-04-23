import React, { Component } from 'react'

import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity,AsyncStorage, StyleSheet } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux'
import { FlatList } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
const s = width / 640;

const tabs = [
    { title: '推荐' },
    { title: '关注' },
    { title: '我的' },

];
export default class find extends Component {
    constructor(props) {
        super()
        this.state = {
            use_id:'',
            my:{},
            tiezi:{},
            imgurl:'../../assets/zguanzhu.png'

        }
    }
    componentDidMount(){
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            //console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/getfabu/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
            .then((res)=>{
               // console.log(res.data)
                this.setState({my:res.data})
            })


            fetch(`http://81.70.101.193:8005/gettiezi`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
            .then((res)=>{
               // console.log(res.data)
                this.setState({tiezi:res.data})
            })
        })
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
                        renderItem={({item})=>(
                            <TouchableOpacity style={{alignItems:'center'}}>
                                <View style={{height:200,width:'98%',marginTop:5,borderWidth:2,borderColor:'#A7BCF0'}}>
                                    <View style={{paddingLeft:20,paddingTop:10,flexDirection:'row'}}>
                                        <View>
                                        <Text style={{fontSize:18}}>{item.use_name}</Text>
                                        <Text>{item.state_date}</Text>
                                        </View>
                                        <TouchableOpacity style={{marginLeft:'50%'}}>
                                            <Text style={{fontSize:18}}>+关注</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{paddingTop:10,paddingLeft:20,height:110}}>
                                        <Text>{item.content}</Text>
                                    </View>
                                    <View style={{marginLeft:'60%',flexDirection:'row'}}>
                                        <TouchableOpacity style={{flexDirection:'row'}}>
                                            <Text style={{fontSize:18}}>{item.dianzan_num==null?0:item.dianzan_num}</Text>
                                            <Image source={require('../../assets/zdianzan.png')} style={{width:20,height:20,marginLeft:5}}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flexDirection:'row',marginLeft:30}}>
                                            <Text style={{fontSize:18}}>{item.pinglun_num==null?0:item.pinglun_num}</Text>
                                            <Image source={require('../../assets/zpinglun.png')} style={{width:20,height:20,marginLeft:5}}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flexDirection:'row',marginLeft:30}}>
                                            <Text style={{fontSize:18}}>{item.shoucang_num==null?0:item.shoucang_num}</Text>
                                            <Image source={require('../../assets/zshoucang.png')} style={{width:20,height:20,marginLeft:5}}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        >

                        </FlatList>
                    </View>
                    <View >
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View>
                        <FlatList
                        data={this.state.my}
                        renderItem={({item})=>(
                            <TouchableOpacity style={{alignItems:'center'}}>
                                <View style={{height:200,width:'98%',marginTop:5,borderWidth:2,borderColor:'#A7BCF0'}}>
                                    <View style={{paddingLeft:20,paddingTop:10}}>
                                        <Text style={{fontSize:18}}>{item.use_name}</Text>
                                        <Text>{item.state_date}</Text>
                                    </View>
                                    <View style={{paddingTop:10,paddingLeft:20,height:110}}>
                                        <Text>{item.content}</Text>
                                    </View>
                                    <View style={{marginLeft:'60%',flexDirection:'row'}}>
                                        <TouchableOpacity style={{flexDirection:'row'}}>
                                            <Text style={{fontSize:18}}>{item.dianzan_num==null?0:item.dianzan_num}</Text>
                                            <Image source={require('../../assets/zdianzan.png')} style={{width:20,height:20,marginLeft:5}}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flexDirection:'row',marginLeft:30}}>
                                            <Text style={{fontSize:18}}>{item.pinglun_num==null?0:item.pinglun_num}</Text>
                                            <Image source={require('../../assets/zpinglun.png')} style={{width:20,height:20,marginLeft:5}}></Image>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{flexDirection:'row',marginLeft:30}}>
                                            <Text style={{fontSize:18}}>{item.shoucang_num==null?0:item.shoucang_num}</Text>
                                            <Image source={require('../../assets/zshoucang.png')} style={{width:20,height:20,marginLeft:5}}></Image>
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

