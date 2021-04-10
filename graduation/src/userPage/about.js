import React, { Component } from 'react'
import {View,Text,StyleSheet,Dimensions,Image,TouchableOpacity,Modal} from 'react-native'
import {Icon,InputItem,} from '@ant-design/react-native'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
import { Actions } from 'react-native-router-flux';
export default class about extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            modalVisible: false,
           
        };
    }
     //弹窗可见性
     setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        })
    };
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
                    <Modal animationType={'none'}
                            transparent={true}
                            visible={this.state.modalVisible}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 600, width: '80%', backgroundColor: '#afdfe4', alignItems: 'center' }}>
                                    <View style={{ height: 25, width: '100%', backgroundColor: '#afdfe4', justifyContent: 'center' }}>
                                      
                                    </View>
                                    <Text style={{fontSize:22,padding:10}}>&nbsp;您好，欢迎了解此软件，改软件有以下功能，欢迎欣赏！</Text>
                                    <Text style={{fontSize:20}}>1.撰写日记</Text>
                                    <Text style={{fontSize:20}}>2.打卡</Text>
                                    <Text style={{fontSize:20}}>3.撰写座右铭</Text>
                                    <Text style={{fontSize:20}}>4.成长分析</Text>
                                    <Text style={{fontSize:20}}>5.成长目标</Text>
                                    <Text style={{fontSize:20}}>6.用户反馈</Text>
                                    <Text style={{fontSize:20}}>7.未来写信</Text>
                                    <Text style={{fontSize:20}}>8.个人信息</Text>
                                    <Text style={{fontSize:20}}>9.账号安全</Text>
                                    <Text style={{fontSize:20}}>10.积分展示</Text>
                                    <Text style={{fontSize:20}}>11.发布评论</Text>
                                    <Text style={{fontSize:20}}>12.圈子</Text>
                                    <TouchableOpacity style={{ width: 160, height: 80, backgroundColor: '#A7BCF0', marginTop: 40, marginLeft: 30, alignItems: 'center', justifyContent: 'center' }} onPress={() => {
                                                this.setModalVisible(false)
                                            }}><Text style={{ fontSize: 20 }}>我已知晓！</Text></TouchableOpacity>
                                </View>
                              
                            </View>
                        </Modal>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>功能介绍</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb3} onPress={() => {
                            this.setModalVisible(true)
                        }}>
                           
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                 
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>版本更新</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb3}>
                          
                            <Text>1.0.1</Text>
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