import React, { Component } from 'react'
import {View,Text,Dimensions,StyleSheet,Image,TouchableOpacity,FlatList} from 'react-native'

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const lists = [
    { title: '草稿箱',img:'../../assets/1.jpg', name: 'exception' ,content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',num:3,add:34},
    { title: '草稿箱',img:'../../assets/1.jpg', name: 'exception' ,content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',num:3,add:34},
    { title: '草稿箱',img:'../../assets/1.jpg', name: 'exception' ,content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',num:3,add:34},
    { title: 'dsjdjksjkdsjksdjksdj',img:'../../assets/1.jpg', name: 'exception' ,content:'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',num:3,add:34}
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
                {this.state.add==true?<View></View>:
                <View>
                    <FlatList
                    data={lists}
                    renderItem={({item})=>(
                       <View style={{alignItems:'center'}}>
                            <View style={styles.b}>
                                <Text style={{fontSize:18}}>{item.title}</Text>
                                <View style={{marginTop:10*s,flexDirection:'row'}}>
                                    <Image style={styles.img1} source={require('../../assets/1.jpg')}></Image>
                                    <Text style={{marginLeft:20*s,fontSize:16,color:'#6A5ACD'}}>{item.name}</Text>
                                </View>
                                <View style={styles.c}>
                                    <Text>{item.content}</Text>
                                </View>
                                <View style={{flexDirection:'row',width:100*s}}>
                                     <Text style={{marginLeft:'40%'}}>{item.num}</Text>
                                     <Image style={styles.img2} source={require('../../assets/zdianzan.png')}></Image>
                                     <Text style={{marginLeft:50*s}}>{item.add}</Text>
                                     <Image style={styles.img2} source={require('../../assets/zping.png')}></Image>
                                </View>
                            </View>
                       </View>
                    )}
                    >

                    </FlatList>
                </View>
                }
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
    },
    b:{
        height:300*s,
        width:'90%',
        borderWidth:4,
        borderColor:'#A7BCF0',
        marginTop:8*s,
        paddingLeft:'10%',
        flexDirection:'column',
        paddingTop:'5%'
    },
    img1:{
        width:40*s,
        height:40*s,
        borderRadius:20*s
    },
    c:{
        width:'80%',
        height:140*s,
        borderColor:'#adaba3',
        borderWidth:2
    },
    img2:{
        width:30*s,
        height:30*s,
       marginLeft:30*s
    }
})