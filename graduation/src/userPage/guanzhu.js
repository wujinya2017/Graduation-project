import React, { Component } from 'react'
import {View,Text, StyleSheet,Image,TouchableOpacity,Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const list=[
    {name:'傻傻',img:require('../../assets/zt3.jpg'),txt:'已关注'},
    {name:'略略',img:require('../../assets/zt2.jpg'),txt:'已关注'},
    {name:'不长肉',img:require('../../assets/zt5.jpg'),txt:'已关注'},
    {name:'切切',img:require('../../assets/z8.jpg'),txt:'已关注'},
    {name:'东东',img:require('../../assets/z9.jpg'),txt:'已关注'},
    {name:'蒙蒙',img:require('../../assets/zt6.jpg'),txt:'已关注'}
]
export default class guanzhu extends Component {

    render() {
        return (
           <View style={{backgroundColor:'#F8F8FF',width:'100%',height:'100%'}}>
              <FlatList
              data={list}
              renderItem={({item,index})=>(
                  <TouchableOpacity style={styles.zong}>
                      <View style={styles.t1}>
                          <Image style={styles.t4} source={item.img}></Image>
                      </View>
                      <View style={styles.t2}><Text>{item.name}</Text></View>
                      <View style={styles.t3}>
                          <TouchableOpacity style={styles.t5} onPress={()=>this.dianji(index)}>
                              <Text>{item.txt}</Text>
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