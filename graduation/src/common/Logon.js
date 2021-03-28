import { Icon, InputItem } from '@ant-design/react-native';
import React, { Component } from 'react'
import { Dimensions, Alert, StyleSheet, ScrollView, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 640;
const arrColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

export default class Logon extends Component {
    constructor() {
        super();
        this.state = {
            phone: '',
            password: '',
            yanpassword: '',
            secondpassword: '',
            str: '',
            login: false
        }
    }
    componentDidMount() {
        let str = ''
        for (let i = 0; i < 4; i++) {
            var n = Math.round(Math.random() * 15)
            str += arrColor[n] + ' '
        }
        this.setState({
            str: str
        })
    }
    phone = (e) => {
        this.setState({
            phone: e,
        });
    }
    yanzheng = () => {
        let str = ''
        for (let i = 0; i < 4; i++) {
            var n = Math.round(Math.random() * 15)
            str += arrColor[n] + ' '
        }
        this.setState({
            str: str
        })

    }
    login = () => {
        Actions.login()
    }

    Logon = () => {
        Actions.logon()
    }
    // 注册按钮点击
    zhuce = () => {

        if (!(/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/.test(this.state.phone))) {
            Alert.alert('提示', "手机号码格式有误，请重填");
            return false;
        }
        else {
            // console.log(this.state.yanpassword)
            // console.log(this.state.str)
            if (this.state.yanpassword != this.state.str) {
                Alert.alert('提示', "验证码有误，请重填");
                return false;
            }
            else {
                // console.log(this.state.password)
                // console.log(this.state.secondpassword)
                if (this.state.password != this.state.secondpassword || this.state.password == '' || this.state.secondpassword == '') {
                    Alert.alert('提示', "请检查密码是否已填或正确，请重填");
                    return false;
                }
                else {
                    fetch('http://81.70.101.193:8005/register_log', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        }
                    }).then((res) => res.json())
                        .then((res) => {
                            // console.log(this.state.phone)

                            for (var i = 0; i < res.data.length; i++) {
                                if (res.data[i].use_phone == this.state.phone) {
                                    Alert.alert('提示', '改手机号已被注册，请登录！', [
                                        { text: "取消", onPress: this.Logon },
                                        { text: "确认", onPress: this.login },

                                    ])
                                   // console.log('ssss')
                                    this.setState({ login: true })
                                   // console.log(this.state.login)
                                    return;
                                }
                            }
                        }).then((res) => {
                            if (this.state.login == true) {
                                console.log('a')
                            }
                            else {
                                var user = {
                                    use_phone: this.state.phone,
                                    use_password: this.state.password
                                }
                                //console.log('zhixing')
                                fetch("http://81.70.101.193:8005/register", {
                                    method: "POST",
                                    headers: {
                                        'Content-Type': 'text/plain; charset=UTF-8'
                                    },
                                    body: JSON.stringify(user)
                                }).then((res) => {
                                    Alert.alert('提示', '注册成功！是否登录',
                                        [
                                            { text: "取消", onPress: this.Logon },
                                            { text: "确认", onPress: this.login },

                                        ]
                                    );
                                })

                            }
                        })
                    }
            }
        }
    }
    render() {
        return (
            <ImageBackground style={{ height: 1300 * s }} resizeMode='cover' source={require('../../assets/19.jpg')}>
                <View style={{ alignItems: 'center', marginTop: 320 * s }}>
                    <View style={styles.shuru}>
                        <InputItem
                            clear
                            type="number"
                            value={this.state.phone}
                            onChange={this.phone}
                            placeholder="请输入电话/邮箱"
                        >
                            <Icon name='user' style={{ marginLeft: 25 * s }} />
                        </InputItem>
                    </View>
                    <View style={{ flexDirection: 'row', backgroundColor: 'white', width: 503 * s, margin: 12 * s, borderRadius: 5 * s }}>
                        <View style={{ width: 403 * s }}>
                            <InputItem
                                clear
                                type="number"
                                value={this.state.yanpassword}
                                onChange={value => {
                                    this.setState({
                                        yanpassword: value + ' ',
                                    });
                                }}
                                placeholder="请输入验证码"
                            >
                                <Icon name='insurance' style={{ marginLeft: 25 * s }} />
                            </InputItem>
                        </View>
                        <TouchableOpacity onPress={this.yanzheng} style={{ width: 100 * s, height: 60 * s, backgroundColor: '#A7BCF0', justifyContent: 'center', alignItems: 'center', borderRadius: 7 * s }}>
                            <Text style={{ fontSize: 18 }}>{this.state.str}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.shuru}>
                        <InputItem
                            clear
                            type="password"
                            value={this.state.password}
                            onChange={value => {
                                this.setState({
                                    password: value,
                                });
                            }}
                            placeholder="设置密码"
                        >
                            <Icon name='lock' style={{ marginLeft: 25 * s }} />
                        </InputItem>
                    </View>
                    <View style={styles.shuru}>
                        <InputItem
                            clear
                            type="password"
                            value={this.state.secondpassword}
                            onChange={value => {
                                this.setState({
                                    secondpassword: value,
                                });
                            }}
                            placeholder="再次确认密码"
                        >
                            <Icon name='lock' style={{ marginLeft: 25 * s }} />
                        </InputItem>
                    </View>
                    <TouchableOpacity onPress={this.zhuce} style={{ marginTop: 50 * s, backgroundColor: '#A7BCF0', width: 500 * s, alignItems: 'center', height: 60 * s, borderRadius: 10 * s, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22 * s }}>注册</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    shuru: {
        backgroundColor: 'white',
        width: 500 * s,
        margin: 12 * s,
        borderRadius: 5 * s
    }
})