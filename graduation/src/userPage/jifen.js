import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, FlatList, ScrollView } from 'react-native'

const { width, scale } = Dimensions.get('window');
const s = width / 640;
const list1 = [
    { name: '大大', text: 'dsjkn ', num: 2222, img: require('../../assets/1.jpg') },
    { name: '小小', text: '83njksd', num: 2109, img: require('../../assets/zt2.jpg') },
    { name: '乐乐', text: 'eiwnio', num: 2099, img: require('../../assets/zt3.jpg') },
    { name: '美丽', text: '83njksd', num: 1088, img: require('../../assets/zt4.jpg') },
    { name: '晴晴', text: '83njksd', num: 890, img: require('../../assets/zt5.jpg') },
    { name: '不长肉', text: 'eiwnio', num: 799, img: require('../../assets/zt6.jpg') },
    { name: '减肥', text: '83njksd', num: 328, img: require('../../assets/zt7.jpg') },


]

export default class jifen extends Component {
    constructor() {
        super()
        this.state = {
            img: require('../../assets/1.jpg')
        }
    }
    render() {
        return (

<ScrollView>
<View style={{ alignItems: 'center' }}>
                <View style={styles.a}>
                    <View style={styles.aa}>
                        <ImageBackground style={styles.aa1} source={require('../../assets/zjifen.jpg')}>
                            <View style={styles.f}>
                                <View style={styles.f1}>
                                    <Image style={styles.f1} source={this.state.img}></Image>
                                </View>
                                <View style={styles.f2}>
                                    <View style={{ width: '70%' }}><Text style={{ fontSize: 23 }}>2222分&nbsp;&nbsp;&nbsp;LV.1</Text></View>
                                    <View><Image style={{ height: 35 * s, width: 35 * s }} source={require('../../assets/zguan.png')}></Image></View>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.ab}>
                        <View style={styles.aba}><Text style={{ fontSize: 25, color: 'red' }}>1</Text></View>
                        <View style={styles.abb1}>
                            <Image style={styles.abba1} source={this.state.img}></Image>
                        </View>
                        <View style={styles.abc}>
                            <Text style={{ fontSize: 18, color: 'red' }}>大大</Text>
                        </View>
                        <View style={styles.abd}>
                            <Text style={{ fontSize: 18, color: 'red' }}> 2222</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.b}>
                    <FlatList
                        data={list1}
                        renderItem={({ item, index }) => (
                            <View style={styles.c}>
                                <View style={styles.aba}><Text style={{ fontSize: 19 }}>{index + 1}</Text></View>
                                <View style={styles.abb}>
                                    <Image style={styles.abba1} source={item.img}></Image>
                                </View>
                                <View style={styles.abc}>
                                    <Text style={{ fontSize: 18 }}>{item.name}</Text>
                                </View>
                                <View style={styles.abd}>
                                    <Text style={{ fontSize: 18 }}> {item.num}</Text>
                                </View>
                            </View>
                        )}
                    ></FlatList>
                </View>
            </View>
</ScrollView>


        )
    }
}
const styles = StyleSheet.create({
    a: {
        width: '90%',
        height: 400 * s,
        marginTop: 20 * s,
        borderWidth: 4,
        borderColor: 'yellow',
        alignItems: 'center'
    },
    aa: {
        height: 300 * s,
        width: '95%',
        paddingTop: 10 * s,
        borderBottomColor: '#515253',
        borderBottomWidth: 3,

    },
    aa1: {
        height: 280 * s,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ab: {
        flexDirection: 'row',
        marginTop: 6 * s

    },
    aba: {
        width: '15%',
        height: 80 * s,
        justifyContent: 'center',
        alignItems: 'center'
    },
    abb: {
        width: '13%',
        height: 80 * s,
        borderRadius: 40 * s,
        marginLeft: 10 * s
    },
    abb1: {
        width: '13%',
        height: 80 * s,
        borderRadius: 40 * s,
        marginLeft: 10 * s,
        borderColor: 'red',
        borderWidth: 3
    },
    abba: {
        width: '100%',
        height: '100%',
        borderRadius: 40 * s
    },
    abba1: {
        width: '99%',
        height: '99%',
        borderRadius: 40 * s
    },
    abc: {
        width: '50%',
        height: 80 * s,
        marginLeft: 10 * s,
        justifyContent: 'center',
        paddingLeft: 20 * s
    },
    abd: {
        width: '15%',
        height: 80 * s,
        justifyContent: 'center',
        marginLeft: 10 * s
    },
    c: {
        borderColor: '#A7BCF0',
        borderWidth: 2,
        flexDirection: 'row',
        marginTop: 6 * s,
        borderRadius: 10 * s,
        width: '98%'
    },
    f: {
        width: '60%',
        height: 200 * s,
        justifyContent: 'center',
        alignItems: 'center'
    },
    f1: {
        width: 80 * s,
        height: 80 * s,
        borderRadius: 40 * s,

    },
    f2: {
        width: '90%',
        height: 80 * s,
        marginTop: 20 * s,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    b: {
        marginTop: 20 * s
    }
})