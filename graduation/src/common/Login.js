import { Icon, InputItem,Checkbox } from '@ant-design/react-native';
import React, { Component } from 'react'
import {Image,StyleSheet,ScrollView,View,Text,Dimensions,TouchableOpacity,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 640;

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            phone: '',
            password: '',
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ImageBackground style={{height:1300*s}} resizeMode='cover' source={require('../../assets/19.jpg')}>
                    <View style={{marginTop:350*s,alignItems:'center'}}>
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
                                placeholder="请输入密码"
                            >
                                <Icon name='lock' style={{marginLeft:25*s}}/>
                            </InputItem>
                        </View>
                        
                    </View>
                    <TouchableOpacity onPress={()=>Actions.misspassword()}><Text style={{marginLeft:480*s,color:'blue'}}>忘记密码？</Text></TouchableOpacity>
                    <View style={{marginTop:50*s,alignItems:'center'}}>
                        <View>
                            <TouchableOpacity onPress={()=>Actions.one()}  style={{backgroundColor:'#A7BCF0',width:500*s,alignItems:'center',height:60*s,borderRadius:10*s,justifyContent:'center'}}>
                                <Text style={{fontSize:22*s}}>登录</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>Actions.logon()} style={{backgroundColor:'#f9f9f9',opacity:0.6,marginTop:20*s,width:500*s,alignItems:'center',height:60*s,borderRadius:10*s,justifyContent:'center'}}>
                                <Text style={{fontSize:22*s}}>注册</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{marginTop:130*s,color:'gray'}}>-----或用其他账号登录-----</Text>
                        <View style={{flexDirection:'row',marginBottom:30*s}}>
                            <Image source={require('../../assets/qq.png')} style={{width:50*s,height:50*s,margin:10*s}}/>
                            <Image source={require('../../assets/微信.png')} style={{width:60*s,height:60*s,marginTop:8*s,marginLeft:10*s}}/>
                        </View>
                        <Checkbox>登录代表你已同意用户协议和隐私政策</Checkbox>
                    </View>
                </ImageBackground>
            </View>
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