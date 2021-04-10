import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, Dimensions, TouchableOpacity, TextInput, AsyncStorage, Alert } from 'react-native'
import Pop from 'rn-global-modal'
import {
    Icon, Button, InputItem,

    WhiteSpace,
} from '@ant-design/react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;

export default class anquan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visible1: false,
            visible2: false,
            use_id: '',
            use_phone: '',
            modalVisible: false,
            pass: '',
            pass2: '',
            modalVisible2: false,
            useph:''
        };
    }
    //弹窗可见性
    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        })
    };
    setModalVisible2 = (visible) => {
        this.setState({
            modalVisible2: visible
        })
    };
    componentDidMount() {
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
           // console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/get_phone/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
                .then((res) => {
                    //console.log(res.data[0])
                    this.setState({ use_phone: res.data[0].use_phone })
                })
        })
    }

    pass = (e) => {
        this.setState({
            pass: e
        })
    }
    pass2 = (e) => {
        this.setState({
            pass2: e
        })
    }
    //确认修改密码
    updatepas = () => {
        console.log(this.state.pass)
        console.log(this.state.pass2)
        if (this.state.pass == '' || this.state.pass2 == '') {
            Alert.alert('提示', '请正确输入密码！')
        }
        else {
            if (this.state.pass !== this.state.pass2) {
                Alert.alert('提示', '您输入的密码不匹配，请重新输入！')
            }
            else {
                var user = { use_password: this.state.pass }
                fetch(`http://81.70.101.193:8005/uppassword/${this.state.use_phone}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(user)
                }).then(res => res.json())
                    .then((res) => {
                        Alert.alert('提示', '修改密码成功', [


                            {
                                text: "确认", onPress: () => {
                                    this.setModalVisible(false)
                                }
                            },
                        ])
                    })
            }
        }
    }

    //绑定解绑
    bangding=()=>{
        Alert.alert('提示', '确认要解除绑定吗？', [       
            { text: "确认", onPress: ()=>{
                Alert.alert('提示','解除绑定成功！')
            }},
            { text: "取消"},
        ])
    }

    //修改手机号
    upphone=(e)=>{
       this.setState({
           useph:e
       })
    }

    //修改phone
    updatephone=()=>{
        if(this.state.useph==''||this.state.use_phone==this.state.useph)
        {
            Alert.alert('提示','请正确输入手机号！')
        }
        else{
            if (!(/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(this.state.useph))) {
                Alert.alert('提示', "手机号码格式有误，请重填");
                return false;
            }
            else{
                var user = { use_phone: this.state.useph }
                fetch(`http://81.70.101.193:8005/upphone/${this.state.use_id}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(user)
                }).then(res => res.json())
                    .then((res) => {
                       
                        this.setState({use_phone:this.state.useph})
                        console.log(this.state.use_phone)
                        Alert.alert('提示', '修改手机号成功', [


                            {
                                text: "确认", onPress: () => {
                                    this.setModalVisible2(false)
                                }
                            },
                        ])
                       
                    })
                  
            
            }
        }
    }

    //注销账号
    zhuxiao=()=>{
        Alert.alert('提示', '此操作不可退回，确认要注销吗？', [


           
            { text: "确认", onPress: this.zhuxiao1 },
            { text: "取消" },
        ])
       
    
    }
    zhuxiao1=()=>{
        console.log(this.state.use_id)
        fetch(`http://81.70.101.193:8005/deluse/${this.state.use_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                Alert.alert('提示', '账号注销成功，请重新登录！', [
                    { text: "确认", onPress: ()=>{Actions.login()} },
                
                ])
               
            
            })
    }

    // _showPop() {
    //     console.log('aa')

    //     Pop.show(
    //         <View style={{ height: 300, width: '80%', backgroundColor: '#afdfe4', alignItems: 'center' }}>
    //             <View style={{ height: 45, width: '100%', backgroundColor: '#afdfe4', justifyContent: 'center' }}>
    //                 <Text style={{ fontSize: 19, paddingLeft: 20 }}>修改用户密码</Text>
    //             </View>
    //             <View style={{ height: 247, width: '97%', backgroundColor: 'white' }}>
    //                 <View>
    //                     <InputItem
    //                         value={this.state.use_phone}
    //                     >用户 </InputItem>
    //                     <InputItem

    //                     >密码</InputItem>
    //                     <InputItem

    //                     >确认密码</InputItem>
    //                 </View>
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <TouchableOpacity style={{ width: 50, height: 40, backgroundColor: '#afdfe4', marginTop: 40, marginLeft: 100, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 20 }}>确认</Text></TouchableOpacity>
    //                     <TouchableOpacity style={{ width: 50, height: 40, backgroundColor: '#afdfe4', marginTop: 40, marginLeft: 60, alignItems: 'center', justifyContent: 'center' }} onPress={this.close.bind(this)}><Text style={{ fontSize: 20 }}>取消</Text></TouchableOpacity>
    //                 </View>
    //             </View>
    //         </View>
    //         , { animationType: 'slide-up', visible: this.state.sss, onMaskClose: () => { console.log('aaa') } })
    // }
    render() {
        return (
            <View style={styles.zong}>
                <View style={styles.a}><Text style={{ fontSize: 25 }}>账号</Text></View>
                <View style={styles.b}>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>登录密码</Text></View>
                            <View style={{ flexDirection: 'row' }}><Text>安全等级：</Text><Text style={{ color: 'red' }}>中</Text></View>
                        </View>
                        <Modal animationType={'none'}
                            transparent={true}
                            visible={this.state.modalVisible}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 300, width: '80%', backgroundColor: '#afdfe4', alignItems: 'center' }}>
                                    <View style={{ height: 45, width: '100%', backgroundColor: '#afdfe4', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 19, paddingLeft: 20 }}>修改用户密码</Text>
                                    </View>
                                    <View style={{ height: 247, width: '97%', backgroundColor: 'white' }}>
                                        <View>
                                            <InputItem
                                                value={this.state.use_phone}
                                            >用户 </InputItem>
                                            <InputItem
                                                onChange={this.pass}
                                                type="password"
                                            >密码</InputItem>
                                            <InputItem
                                                onChange={this.pass2}
                                                type="password"
                                            >确认密码</InputItem>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity style={{ width: 50, height: 40, backgroundColor: '#afdfe4', marginTop: 40, marginLeft: 100, alignItems: 'center', justifyContent: 'center' }} onPress={this.updatepas}><Text style={{ fontSize: 20 }}>确认</Text></TouchableOpacity>
                                            <TouchableOpacity style={{ width: 50, height: 40, backgroundColor: '#afdfe4', marginTop: 40, marginLeft: 60, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                                                this.setModalVisible(false)
                                            }}><Text style={{ fontSize: 20 }}>取消</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </Modal>
                        <TouchableOpacity style={styles.bb2} onPress={() => {
                            this.setModalVisible(true)
                        }}>
                            <Text style={styles.size}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改</Text>
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                        {/* <Button onPress={this.onButtonClick5}>Modal.prompt (default)</Button> */}
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>账号绑定管理</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb2} onPress={this.bangding}>
                            <Text style={styles.size}>绑定/解绑</Text>
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                    <Modal animationType={'none'}
                            transparent={true}
                            visible={this.state.modalVisible2}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 300, width: '80%', backgroundColor: '#afdfe4', alignItems: 'center' }}>
                                    <View style={{ height: 45, width: '100%', backgroundColor: '#afdfe4', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 19, paddingLeft: 20 }}>修改用户手机号</Text>
                                    </View>
                                    <View style={{ height: 247, width: '97%', backgroundColor: 'white' }}>
                                        <View>
                                            <InputItem
                                                value={this.state.use_phone}
                                            >用户 </InputItem>
                                            <InputItem
                                                onChange={this.upphone}
                                             
                                            >手机号</InputItem>
                                          
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity style={{ width: 50, height: 40, backgroundColor: '#afdfe4', marginTop: 40, marginLeft: 100, alignItems: 'center', justifyContent: 'center' }} onPress={this.updatephone}><Text style={{ fontSize: 20 }}>确认</Text></TouchableOpacity>
                                            <TouchableOpacity style={{ width: 50, height: 40, backgroundColor: '#afdfe4', marginTop: 40, marginLeft: 60, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                                                this.setModalVisible2(false)
                                            }}><Text style={{ fontSize: 20 }}>取消</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </Modal>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>修改手机号码</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb2} onPress={() => {
                            this.setModalVisible2(true)
                        }}>
                            <Text style={styles.size}>{this.state.use_phone}</Text>
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.a}><Text style={{ fontSize: 25 }}>安全</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>风险等级：</Text>
                        <Text style={{ color: 'red' }}>中</Text>
                    </View>
                </View>

                <View style={styles.b3}>
              
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>注销账号</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb2} onPress={this.zhuxiao}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text>注销后无法操作，</Text>
                                <Text>请谨慎操作</Text>
                            </View>
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    zong: {
        height: '100%',
        width: '100%',
        backgroundColor: '#adaba3'
    },
    a: {
        width: '100%',
        height: 90 * s,
        justifyContent: 'center',
        paddingLeft: 20 * s
    },
    b: {
        backgroundColor: 'white',
        height: 273 * s,
        width: '100%',
        alignItems: 'center'
    },
    b3: {
        backgroundColor: 'white',
        height: 113 * s,
        width: '100%',
        alignItems: 'center'
    },
    bb: {
        height: 90 * s,
        marginTop: 1,
        borderBottomColor: '#adaba3',
        borderBottomWidth: 1,
        width: '90%',
        flexDirection: 'row'
    },
    bb1: {
        flexDirection: 'column',
        height: 90 * s,
        width: '70%',
        justifyContent: 'center'
    },
    bb2: {
        width: '30%',
        height: 90 * s,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    bb3: {
        width: '30%',
        height: 90 * s,
        paddingLeft: '20%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    size: {
        fontSize: 20
    }
})

