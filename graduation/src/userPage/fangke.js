import React, { Component } from 'react'
import {View,Text, StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const list=[
    {name:'大大',img:require('../../assets/zt3.jpg')},
    {name:'下下',img:require('../../assets/zt2.jpg')},
    {name:'减肥不长肉',img:require('../../assets/zt5.jpg')},
    {name:'hello',img:require('../../assets/z8.jpg')},
    {name:'吼吼',img:require('../../assets/z9.jpg')},
    {name:'小心心',img:require('../../assets/zt6.jpg')}
]
export default class fangke extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#F8F8FF',width:'100%',height:'100%'}}>
            <FlatList
            data={list}
            renderItem={({item})=>(
                <TouchableOpacity style={styles.zong}>
                    <View style={styles.t1}>
                        <Image style={styles.t4} source={item.img}></Image>
                    </View>
                    <View style={styles.t2}><Text>{item.name}</Text></View>
                 
                </TouchableOpacity>
            )}
            ></FlatList>
         </View>
        )
    }
}
const styles=StyleSheet.create({
    zong:{
            borderColor:'#A7BCF0',
            borderWidth:2,
            flexDirection:'row',
            height:70*s,
            marginTop:13*s,
            backgroundColor:'white'
    },
    t1:{
        width:'10%',
        height:70*s,
        justifyContent:'center',
        alignItems:'center'
       
    },
    t2:{
        width:'65%',
        height:70*s,
        justifyContent:'center',
        paddingLeft:'4%'
    },
 
    t4:{
        width:40*s,
        height:40*s,
        borderRadius:35*s,
        justifyContent:'center',
        alignItems:'center',
   
    },
 
})