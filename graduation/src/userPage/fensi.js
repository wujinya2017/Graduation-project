import React, { Component } from 'react'
import {View,Text, StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const list=[
    {name:'22222'},
    {name:'11111'},
    {name:'112333'}
]
export default class fensi extends Component {
    render() {
        return (
            <View>
            <FlatList
            data={list}
            renderItem={({item})=>(
                <TouchableOpacity style={styles.zong}>
                    <View style={styles.t1}>
                        <Image style={styles.t4} source={require('../../assets/z1.jpg')}></Image>
                    </View>
                    <View style={styles.t2}><Text>{item.name}</Text></View>
                    <View style={styles.t3}>
                        <TouchableOpacity style={styles.t5}>
                            <Text>+关注</Text>
                        </TouchableOpacity>
                    </View>
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
            marginTop:13*s
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
    t3:{
        width:'25%',
        height:70*s,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'4%'
       
    },
    t4:{
        width:40*s,
        height:40*s,
        borderRadius:35*s,
        justifyContent:'center',
        alignItems:'center',
   
    },
    t5:{
      height:45*s,
      borderColor:'green',
      borderWidth:1,
      width:80*s,
      justifyContent:'center',
      alignItems:'center'
    }

})