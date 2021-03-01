import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Icon } from '@ant-design/react-native'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class tongyong extends Component {
    render() {
        return (
            <View>
                <View style={styles.a}>
                    <View style={styles.b}><Text style={styles.size}>清空缓存</Text></View>
                    <TouchableOpacity style={styles.c} onPress={() => Actions.anquan()}>
                        <Text style={{fontSize:28,color:'#adaba3'}}>300M</Text>
                    <Icon name='right'></Icon>
                    </TouchableOpacity>
                </View>
                <View style={styles.a}>
                    <View style={styles.b}><Text style={styles.size}>隐私管理</Text></View>
                    <TouchableOpacity style={styles.c} onPress={() => Actions.tongyong()}>
                    <Text style={{fontSize:28,color:'#ffffff'}}>300M</Text>
                    <Icon name='right'></Icon>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}
const styles = StyleSheet.create({
    a: {
        borderColor: '#A7BCF0',
        borderWidth: 2,
        width: '100%',
        height: 90 * s,
        marginTop: 5 * s,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    b: {
        height: 90 * s,
        width: '75%',
        justifyContent: 'center',
        paddingLeft: 20 * s
    },
    c: {
        height: 90 * s,
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
    },
    size: {
        fontSize: 26
    },
    img: {
        width: 50 * s,
        height: 50 * s
    }
})