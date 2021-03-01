import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions,TouchableOpacity } from 'react-native'
import {Icon} from '@ant-design/react-native'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class anquan extends Component {
    render() {
        return (
            <View style={styles.zong}>
                <View style={styles.a}><Text style={{ fontSize: 25 }}>账号</Text></View>
                <View style={styles.b}>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>登录密码</Text></View>
                            <View style={{ flexDirection: 'row' }}><Text>安全等级：</Text><Text style={{ color: 'red' }}>中</Text></View>
                        </View>
                        <TouchableOpacity style={styles.bb2}>
                            <Text style={styles.size}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;修改</Text>
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>账号绑定管理</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb2}>
                            <Text style={styles.size}>绑定/解绑</Text>
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>修改手机号码</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb2}>
                            <Text style={styles.size}>1823***8912</Text>
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.a}><Text style={{ fontSize: 25 }}>安全</Text>
               <View style={{flexDirection:'row'}}>
               <Text>风险等级：</Text>
                <Text style={{color:'red'}}>中</Text>
               </View>
                </View>

                <View style={styles.b}>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>最近登记记录</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb3}>
                           
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>账号相关答疑</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb3}>
                           
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>注销账号</Text></View>

                        </View>
                        <TouchableOpacity style={styles.bb2}>
                          <View style={{flexDirection:'column'}}>
                          <Text>注销后无法操作，</Text>
                          <Text>请谨慎操作</Text>
                          </View>
                            <Icon name='right'></Icon>
                        </TouchableOpacity>
                    </View>
                    </View>
                </View>
        )
    }
}
const styles = StyleSheet.create({
                    zong: {
                    height: '100%',
        width: '100%',
        backgroundColor: '#adaba3'
    },
    a: {
                    width: '100%',
        height: 90 * s,
        justifyContent: 'center',
        paddingLeft: 20 * s
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