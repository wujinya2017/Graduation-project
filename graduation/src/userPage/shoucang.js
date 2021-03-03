import React, { Component } from 'react'
import {View,Text,Dimensions,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native'

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const lists = [
    { name: 'tag', title: '我的积分' ,key:'jifen'},
    { title: '我的收藏', name: 'heart' ,key:'shoucang'},
    { title: '我的回复', name: 'message' ,key:'huifu'},
    { title: '草稿箱', name: 'exception' ,key:'caogao'}
]
export default class shoucang extends Component {
    constructor(props){
        super()
        this.state={
            add:true
        }
    }
    add=()=>{
      if(this.state.add==false)
      {
        this.setState({
            add:true
        })
      }
      else{
        this.setState({
            add:false
        })
      }
       console.log(this.state.add)
    }
    render() {
     
        return (
            <View>
                <View style={styles.a}>
                   <View>
                   <Text style={styles.font}>5个收藏内容</Text>
                 
                   </View>
                   <View><Image style={styles.img} source={require('../../assets/zshoucang.png')}></Image></View>
                   <TouchableOpacity onPress={this.add} style={{marginLeft:330*s}}><Image style={styles.img} source={require('../../assets/zadd.png')}></Image></TouchableOpacity>
                   
                </View>
                {this.state.add==true?<View><Text>ds</Text></View>:<View><Text>xx</Text></View>}
            </View>
        )
      
        }
       
    }

const styles=StyleSheet.create({
    a:{
        height:80*s,
        width:'100%',
        borderBottomColor:'#adaba3',
        borderBottomWidth:4,
       
        paddingLeft:20*s,
        flexDirection:'row',
        alignItems:'center'
    },
    font:{
        fontSize:20
    },
    img:{
        width:40*s,
        height:40*s,
        marginLeft:15*s
    }
})