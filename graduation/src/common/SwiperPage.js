import React, { Component } from 'react'
import {SafeAreaView,StyleSheet,ScrollView,View,Text,Dimensions,TouchableOpacity,ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width } = Dimensions.get('window');
const s = width / 640;

export default class SwiperPage extends Component {
    constructor(props){
        super(props);
        this.state={
            time: 3,
        }
    }
    componentDidMount(){
        this.startTimer()
    }
    startTimer(){
        let timeChange;
        let time = this.state.time;
        const clock = () => {
            if (time > 0) {
                time = time - 1;
                this.setState({
                    time: time,
                });
            } else {
                clearInterval(timeChange);
                Actions.login();
            }
        };
        timeChange = setInterval(clock,1000);
    }
    render() {
        return (
            <ImageBackground source={require('../../assets/20.jpg')} resizeMode='stretch' style={{width:640*s,height:1105*s}}>
                <View style={{width:150*s,height:50*s,alignItems:'center',justifyContent:'center',flexDirection:'row',marginLeft:490*s}}>
                    <Text>{this.state.time}s    </Text>
                    <TouchableOpacity onPress={()=>Actions.login()}>
                        <Text>跳过</Text>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
        )
    }
}
