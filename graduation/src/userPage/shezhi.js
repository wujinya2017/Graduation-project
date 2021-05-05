import React, { Component } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux';

const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class shezhi extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#F8F8FF',width:'100%',height:'100%'}}>
                <View style={styles.a}>
                <View style={{ width: '10%', height: 90 * s,justifyContent:'center' }}>
                        <Image source={require('../../assets/zanquan.png')} style={{height:40,width:40}}></Image>
                    </View>
                    <View style={styles.b}><Text style={styles.size}>账号与安全</Text></View>
                    <TouchableOpacity style={styles.c} onPress={() => Actions.anquan()}>
                        <Image style={styles.img} source={require('../../assets/zright1.png')}></Image>
                    </TouchableOpacity>
                </View>

                <View style={[styles.a, { marginTop: 20 * s }]}>

                    <View style={{ width: '10%', height: 90 * s,justifyContent:'center' }}>
                        <Image source={require('../../assets/zperson.png')} style={{height:40,width:40}}></Image>
                    </View>
                    <View style={styles.b}><Text style={styles.size}>个人信息</Text></View>
                    <TouchableOpacity style={styles.c} onPress={() => Actions.message()}>
                        <Image style={styles.img} source={require('../../assets/zright1.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    a: {
        //borderColor: '#A7BCF0',
        //borderWidth: 2,
        width: '100%',
        height: 90 * s,
        marginTop: 1 * s,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'white'
    },
    b: {
        height: 90 * s,
        width: '80%',
        justifyContent: 'center',
        paddingLeft: 20 * s
    },
    c: {
        height: 90 * s,
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    size: {
        fontSize: 26
    },
    img: {
        width: 50 * s,
        height: 50 * s
    },
    bg: {
        marginBottom: 0 * s,
        width: 100 * s,
        height: 100 * s,
        backgroundColor: 'red'
    }
})