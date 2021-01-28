import { Icon } from '@ant-design/react-native';
import React, { Component } from 'react'

import {View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const s = width/640;

export default class notice extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{width:600*s,margin:20*s}}>
                    <Text style={styles.textview}>2021/1/27 18:16</Text>
                    <View style={{borderColor:'gray',borderWidth:1*s}}>
                        <Image style={styles.img} source={require('../../assets/10.jpg')}/>
                        <TouchableOpacity style={styles.buttonview} onPress={()=>Actions.noticedetails()}>
                            <Text style={{color:'gray',fontSize:23*s}}>点击查看</Text>
                            <Icon name='right'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
           
        )
    }
}

const styles=StyleSheet.create({
    img:{
        width:598*s,
        height:200*s,
        resizeMode:'stretch'
    },
    textview:{
        color:'gray',
        textAlign:'center',
        marginBottom:10*s
    },
    buttonview:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:8*s,
    }
})