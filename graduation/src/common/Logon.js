import { Icon,InputItem } from '@ant-design/react-native';
import React, { Component } from 'react'
import {Dimensions,StyleSheet,ScrollView,View,Text,TouchableOpacity,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 640;

export default class Logon extends Component {
    constructor(){
        super();
        this.state = {
            phone: '',
            password: '',
            yanpassword:'',
            secondpassword:''
        }
    }
    render() {
        return (
            <ImageBackground style={{height:1300*s}} resizeMode='cover' source={require('../../assets/19.jpg')}>
                <View style={{alignItems:'center',marginTop:320*s}}>
                    <View style={styles.shuru}>
                        <InputItem
                            clear
                            type="number"
                            value={this.state.phone}
                            onChange={value => {
                                this.setState({
                                    phone: value,
                                });
                            }}
                            placeholder="请输入电话/邮箱"
                        >
                            <Icon name='user' style={{marginLeft:25*s}}/>
                        </InputItem>
                    </View>
                    <View style={{flexDirection:'row',backgroundColor:'white',width:503*s,margin:12*s,borderRadius:5*s}}>
                        <View style={{width:403*s}}>
                            <InputItem
                                clear
                                type="number"
                                value={this.state.yanpassword}
                                onChange={value => {
                                    this.setState({
                                        yanpassword: value,
                                    });
                                }}
                                placeholder="请输入验证码"
                            >
                                <Icon name='insurance' style={{marginLeft:25*s}}/> 
                            </InputItem>
                        </View>                        
                        <TouchableOpacity style={{width:100*s,height:60*s,backgroundColor:'#A7BCF0',justifyContent:'center',alignItems:'center',borderRadius:7*s}}>
                            <Text>获取验证码</Text>
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
                            <Icon name='lock' style={{marginLeft:25*s}}/>
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
                            <Icon name='lock' style={{marginLeft:25*s}}/>
                        </InputItem>
                    </View>
                    <TouchableOpacity onPress={()=>Actions.login()}  style={{marginTop:50*s,backgroundColor:'#A7BCF0',width:500*s,alignItems:'center',height:60*s,borderRadius:10*s,justifyContent:'center'}}>
                        <Text style={{fontSize:22*s}}>注册</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    shuru:{
        backgroundColor:'white',
        width:500*s,
        margin:12*s,
        borderRadius:5*s
    }
})