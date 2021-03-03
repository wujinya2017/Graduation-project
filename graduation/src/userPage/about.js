import React, { Component } from 'react'
import {View,Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native'
import {Icon} from '@ant-design/react-native'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class about extends Component {
    render() {
        return (
           <View style={styles.zong}>
              <View style={styles.a}>
                  <Image style={styles.img} source={require('../../assets/zgrow.png')}></Image>
              </View>
              <Text style={{fontSize:30,marginTop:10*s}}>Growth</Text>
              <Text style={{fontSize:13}}>Version 1.0.1</Text>
              <View style={styles.b}>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>评分</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb3}>
                           
                            <Text>5</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>功能介绍</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb3}>
                           
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>投诉</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb3}>
                          
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>版本更新</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb3}>
                          
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                   
                        <Text style={{fontSize:30,marginTop:150*s,color:'blue'}}>《软件许可服务协议》</Text>
                   <Text style={{color:'blue'}}>《隐私保护指引》</Text>
                    </View>
                
           </View>
        )
    }
}
const styles=StyleSheet.create({
  zong:{
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
  },
  a:{
      width:110*s,
      height:110*s,
      borderRadius:50*s,
      borderColor:'#1296db',
      borderWidth:2,
      marginTop:100*s
  },
  img:{
      width:110*s,
      height:110*s,
      resizeMode:'center'
      
  },
  b: {
    backgroundColor: 'white',
height: 273 * s,
width: '100%',
alignItems: 'center'
},
bb: {
    height: 90 * s,
marginTop: 1,
borderBottomColor: '#adaba3',
borderBottomWidth: 1,
width: '90%',
flexDirection:'row'
},
bb1: {
    flexDirection: 'column',
height: 90 * s,
width: '70%',
justifyContent: 'center'
},
bb2:{
width:'30%',
height:90*s,
justifyContent:'center',
flexDirection:'row',
alignItems:'center'
},
bb3:{
width:'30%',
height:90*s,
paddingLeft:'20%',
justifyContent:'center',
flexDirection:'row',
alignItems:'center'
},
size: {
    fontSize: 20
}
})