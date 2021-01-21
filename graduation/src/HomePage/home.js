import { Icon } from '@ant-design/react-native';
import React, { Component } from 'react'
import {View, Text, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';

import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');
const s = width/640;
export default class home extends Component {
    render() {
        return (
            <ScrollView>
                <Swiper style={{height:300*s}}>
                    <View>
                        <Image style={styles.img} source={require('../../assets/6.jpg')}/>
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/12.jpg')}/>
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/13.jpg')}/>
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/14.jpg')}/>
                    </View>
                    <View>
                        <Image style={styles.img} source={require('../../assets/15.jpg')}/>
                    </View>
                </Swiper>
                <View style={{padding:10*s}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:26*s}}>今日目标</Text>
                        <Icon name='plus' style={{color:'black'}}/>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <View style={styles.textview}>
                            <Text style={{width:530*s,height:200*s}}>11111</Text>
                            <Icon name='right' style={{color:'black',marginLeft:500*s}}/>
                        </View>
                    </View>
                    
                </View>
                <View style={{alignItems:'center',marginTop:20*s}}>
                    <View style={styles.firstview}>
                        <View>
                            <Text style={{fontSize:30*s}}>成长日记</Text>
                            <Text>记录成长的足迹，留下美好时光</Text>
                        </View>
                        <Image style={styles.secondimg} source={require('../../assets/8.gif')}/>
                    </View>
                    <View style={styles.firstview}>
                        <View>
                            <Text style={{fontSize:30*s}}>成长分析</Text>
                            <Text>迎接人生挑战的契机</Text>
                        </View>
                        <Image style={styles.secondimg} source={require('../../assets/7.gif')}/>
                    </View>
                    <View style={styles.firstview}>
                        <View>
                            <Text style={{fontSize:30*s}}>成长计划</Text>
                            <Text>脚踩西瓜皮，滑到哪里算哪里？</Text>
                        </View>
                        <Image style={styles.secondimg} source={require('../../assets/4.gif')}/>
                    </View>
                </View>
                
            </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    img:{
        width:width,
        height:300*s,
        resizeMode: 'stretch'
    },
    textview:{
        width:550*s,
        height:250*s,
        borderWidth:2*s,
        marginTop:10*s,
        borderTopLeftRadius:15*s,
        borderTopRightRadius:15*s,
        padding:10*s,
        borderColor:'#F0F0F0',
    },
    firstview:{
        flexDirection:'row',
        borderWidth:2*s,
        width:550*s,
        alignItems:'center',
        padding:10*s,
        borderRadius:10*s,
        borderColor:'#F0F0F0',
        justifyContent:'space-between',
        margin:10*s
    },
    secondimg:{
        width:180*s,
        height:100*s,
        borderRadius:10*s
    }
})