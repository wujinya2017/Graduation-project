import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

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
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>账号绑定管理</Text></View>

                        </View>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>修改手机号码</Text></View>

                        </View>
                    </View>
                </View>
                <View style={styles.a}><Text style={{ fontSize: 25 }}>安全</Text></View>

                <View style={styles.b}>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>最近登记记录</Text></View>

                        </View>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>账号相关答疑</Text></View>

                        </View>
                    </View>
                    <View style={styles.bb}>
                        <View style={styles.bb1}>
                            <View><Text style={styles.size}>注销账号</Text></View>

                        </View>
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
        width: '90%'
    },
    bb1: {
                    flexDirection: 'column',
        height: 90 * s,
        width: '70%',
        justifyContent: 'center'
    },
    size: {
                    fontSize: 20
    }
})