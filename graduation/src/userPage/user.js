import React, { Component } from 'react'

import { View, Text, Image, Dimensions, StyleSheet, FlatList, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { NoticeBar, WhiteSpace, Icon, Grid,Switch,List } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux'

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const lists = [
    { name: 'tag', title: '我的积分' ,key:'jifen'},
    { title: '我的收藏', name: 'heart' ,key:'shoucang'},
    { title: '我的回复', name: 'message' ,key:'huifu'},
    { title: '草稿箱', name: 'exception' ,key:'caogao'}
]
const lists1 = [

    { title: '意见反馈', name: 'inbox' ,key:'advice'},
    { title: '我的客服', name: 'customer-service',key:'connect' },
    { title: '关于', name: 'exclamation-circle',key:'about' }
]
export default class user extends Component {
    constructor(props) {
        super(props);
        this.onSwitchChange = value => {
            this.setState({
                checked: value,
            });
        };
        this.state = {
            checked: false,
        };
    }

    render() {
        if (this.state.checked==false)
        {
            return (
                <View style={{ flex: 1 }} >
                    {/* 通知栏 */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '93%', height: 38 }}>
                            <NoticeBar
                                marqueeProps={{ loop: true, style: { fontSize: 22, color: 'red' } }}
                                action={<Text style={{ color: '#a1a1a1' }}>不再提示</Text>}
                            >
                                吃得苦中苦，方为人上人，请点击右方设置你的座右铭吧！！！
                              </NoticeBar>
                        </View>
                        <View style={{ width: '7%', height: 37, backgroundColor: '#fffada' }}>
                            <Icon name='edit' size='lg' color='black' onPress={() => Actions.motto()}></Icon>
                        </View>
                    </View>
                    <View style={{ height: 230, width: '100%', backgroundColor: '#ded6b2' }}>
                        <ImageBackground style={{ height: 230, width: '100%' }} source={require('../../assets/z3.jpg')}>
    
                            <View style={{ height: 230, width: '100%', borderBottomLeftRadius: 40, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ width: 96 * s, height: 96 * s, borderRadius: 48 * s, marginTop: 20 * s }}>
                                    <Image style={{ width: 96 * s, height: 96 * s, borderRadius: 48 * s }} source={require('../../assets/9.jpg')} />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24 }}>我的女孩</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View><Icon name='man'></Icon></View>
                                    <View style={{ marginLeft: 20 }}><Text>21</Text></View>
                                    <View style={{ marginLeft: 20 }}><Icon name='mail'></Icon></View>
                                </View>
                                <View style={{ width: '60%', height: 58, marginTop: 4, flexDirection: 'row' }}>
                                    <TouchableOpacity style={styles.kuang} onPress={()=>Actions.chuangzuo()}>
                                        <Text>2</Text>
                                        <Text style={styles.font}>创作</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.kuang} onPress={()=>Actions.guanzhu()}>
                                        <Text>3</Text>
                                        <Text style={styles.font}>关注</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.kuang} onPress={()=>Actions.fensi()}>
                                        <Text>5</Text>
                                        <Text style={styles.font}>粉丝</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.kuang} onPress={()=>Actions.fangke()}>
                                        <Text>33</Text>
                                        <Text style={styles.font}>访客</Text>
                                    </TouchableOpacity>
    
    
    
                                </View>
    
                            </View>
                        </ImageBackground>
                    </View>
                    <TouchableOpacity style={styles.box} onPress={()=>Actions.future()}>
                        <Image style={styles.img} source={require('../../assets/z1.jpg')}></Image>
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styles.botto}>
    
                            <FlatList
                                data={lists}
                                renderItem={({ item }) => (
                                    <View style={styles.zong}>
                                        <View style={styles.aa}><Icon name={item.name} color='#A7BCF0' size='md'></Icon></View>
                                        <View style={styles.file}><Text style={{ fontSize: 22 }}>{item.title}</Text></View>
                                        <View style={styles.file2}>
                                            <TouchableOpacity style={styles.bb} onPress={() => Actions[item.key].call()}>
                                                <View>
                                                    <Image style={styles.bb} source={require('../../assets/zright.png')}></Image>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            ></FlatList>
    
                        </View>
                        <View style={styles.botto}>
    
                            <FlatList
                                data={lists1}
                                renderItem={({ item }) => (
                                    <View style={styles.zong}>
                                        <View style={styles.aa}><Icon name={item.name} color='#A7BCF0' size='md'></Icon></View>
                                        <View style={styles.file}><Text style={{ fontSize: 22 }}>{item.title}</Text></View>
                                        <View style={styles.file2}>
                                            <TouchableOpacity style={styles.bb} onPress={() => Actions[item.key].call()}>
                                                <View>
                                                    <Image style={styles.bb} source={require('../../assets/zright.png')} ></Image>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            ></FlatList>
    
                        </View>
                        <View style={styles.botto}>
                            <View style={styles.zong}>
                                <View style={styles.aa}>
                                    <Icon name='mobile' color='#A7BCF0' size='md'></Icon></View>
                                <View style={styles.file}><Text style={{ fontSize: 22 }}>夜间模式</Text></View>
                                <View style={{backgroundColor:'red',width:'20%',height:30}}>
                                  
                                        <List style={{marginTop:-10}}>
                                           
                                            <List.Item
                                                extra={
                                                    <Switch
                                                        checked={this.state.checked}
                                                        onChange={this.onSwitchChange}
                                                    />
                                                }
                                            >
                                                {this.state.checked ? 'open' : 'close'}
                                            </List.Item>
                                         
                                        </List>
                                  
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }
        else
        {
            return (
                <View style={{ flex: 1 }} >
                    {/* 通知栏 */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '93%', height: 38 }}>
                            <NoticeBar
                                marqueeProps={{ loop: true, style: { fontSize: 22, color: '#adaba3' } }}
                                action={<Text style={{ color: '#a1a1a1' }}>不再提示</Text>}
                            >
                                吃得苦中苦，方为人上人，请点击右方设置你的座右铭吧！！！
                              </NoticeBar>
                        </View>
                        <View style={{ width: '7%', height: 37, backgroundColor: 'a7a6a2' }}>
                            <Icon name='edit' size='lg' color='black' onPress={() => Actions.motto()}></Icon>
                        </View>
                    </View>
                    <View style={{ height: 230, width: '100%', backgroundColor: 'a7a6a2' }}>
                        <ImageBackground style={{ height: 230, width: '100%' }} source={require('../../assets/z3.jpg')}>
    
                            <View style={{ height: 230, width: '100%', borderBottomLeftRadius: 40, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ width: 96 * s, height: 96 * s, borderRadius: 48 * s, marginTop: 20 * s }}>
                                    <Image style={{ width: 96 * s, height: 96 * s, borderRadius: 48 * s }} source={require('../../assets/9.jpg')} />
                                </View>
                                <View>
                                    <Text style={{ fontSize: 24 }}>我的女孩</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View><Icon name='man'></Icon></View>
                                    <View style={{ marginLeft: 20 }}><Text>21</Text></View>
                                    <View style={{ marginLeft: 20 }}><Icon name='mail'></Icon></View>
                                </View>
                                <View style={{ width: '60%', height: 58, marginTop: 4, flexDirection: 'row' }}>
                                    <View style={styles.kuang1}>
                                        <Text>2</Text>
                                        <Text style={styles.font}>创作</Text>
                                    </View>
                                    <View style={styles.kuang1}>
                                        <Text>3</Text>
                                        <Text style={styles.font}>关注</Text>
                                    </View>
                                    <View style={styles.kuang1}>
                                        <Text>5</Text>
                                        <Text style={styles.font}>粉丝</Text>
                                    </View>
                                    <View style={styles.kuang1}>
                                        <Text>33</Text>
                                        <Text style={styles.font}>访客</Text>
                                    </View>
    
    
    
                                </View>
    
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.box1}>
                        <Image style={styles.img} source={require('../../assets/z1.jpg')}></Image>
                    </View>
                    <ScrollView>
                        <View style={styles.botto}>
    
                            <FlatList
                                data={lists}
                                renderItem={({ item }) => (
                                    <View style={styles.zong1}>
                                        <View style={styles.aa}><Icon name={item.name} color='#A7BCF0' size='md'></Icon></View>
                                        <View style={styles.file}><Text style={{ fontSize: 22 }}>{item.title}</Text></View>
                                        <View style={styles.file2}>
                                            <TouchableOpacity style={styles.bb}>
                                                <View>
                                                    <Image style={styles.bb} source={require('../../assets/zright.png')}></Image>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            ></FlatList>
    
                        </View>
                        <View style={styles.botto}>
    
                            <FlatList
                                data={lists1}
                                renderItem={({ item }) => (
                                    <View style={styles.zong1}>
                                        <View style={styles.aa}><Icon name={item.name} color='#A7BCF0' size='md'></Icon></View>
                                        <View style={styles.file}><Text style={{ fontSize: 22 }}>{item.title}</Text></View>
                                        <View style={styles.file2}>
                                            <TouchableOpacity style={styles.bb}>
                                                <View>
                                                    <Image style={styles.bb} source={require('../../assets/zright.png')}></Image>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )}
                            ></FlatList>
    
                        </View>
                        <View style={styles.botto}>
                            <View style={styles.zong1}>
                                <View style={styles.aa}>
                                    <Icon name='mobile' color='#A7BCF0' size='md'></Icon></View>
                                <View style={styles.file}><Text style={{ fontSize: 22 }}>夜间模式</Text></View>
                                <View style={{backgroundColor:'red',width:'20%',height:30}}>
                                  
                                        <List style={{marginTop:-10,backgroundColor:'#adaba3'}}>
                                           
                                            <List.Item
                                                extra={
                                                    <Switch
                                                        checked={this.state.checked}
                                                        onChange={this.onSwitchChange}
                                                    />
                                                }
                                            >
                                                {this.state.checked ? 'open' : 'close'}
                                            </List.Item>
                                         
                                        </List>
                                  
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    kuang: {
        width: '25%',
        height: 58,
        borderWidth: 2,
        borderColor: '#A7BCF0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    kuang1: {
        width: '25%',
        height: 58,
        borderWidth: 2,
        borderColor: '#adaba3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        fontSize: 16
    },
    box: {
        height: 125,
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#A7BCF0'
    },
    box1: {
        height: 125,
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: '#adaba3'
    },
    img: {
        height: 120,
        width: '96%',

    },
    zong: {
        borderBottomColor: '#b1b0ab',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '3%'
    },
    zong1: {
        borderBottomColor: '#b1b0ab',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '3%',
        backgroundColor:'#adaba3'
    },
    aa: {

        marginLeft: '3%'
    },
    file: {
        height: 50,
        width: '76%',
        justifyContent: 'center',
        marginLeft: '2%'
    },
    file2: {
        height: 50,
        width: '20%',
        justifyContent: 'center',
        marginLeft: '2%'
    },
    botto: {
        borderBottomWidth: 5,
        borderBottomColor: '#A7BCF0'
    },
    bb: {
        width: 30,
        height: 30,
        marginLeft: '25%'
    }
})