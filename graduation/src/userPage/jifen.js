import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
const { width, scale } = Dimensions.get('window');
const s = width / 640;
const list = [
    { name: '22222', text: 'dsjkn ', num: 2222 },
    { name: '11111', text: '83njksd', num: 2109 },
    { name: '112333', text: 'eiwnio', num: 2099 },
    { name: '11111', text: '83njksd', num: 1088 },
    { name: '11111', text: '83njksd', num: 2109 },
    { name: '112333', text: 'eiwnio', num: 2099 },
    { name: '11111', text: '83njksd', num: 1088 },


]
export default class jifen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <View style={styles.a}>
                        <View style={styles.aa}>
                            <ImageBackground style={styles.aa1} source={require('../../assets/zjifen.jpg')}>
                                 <View style={styles.f}>
                                     <View style={styles.f1}>
                                         <Image style={styles.f1} source={require('../../assets/1.jpg')}></Image>
                                     </View>
                                     <View style={styles.f2}>
                                        <View style={{width:'70%'}}><Text style={{fontSize:23}}>566分&nbsp;&nbsp;&nbsp;LV.1</Text></View>
                                         <View><Image style={{height:35*s,width:35*s}} source={require('../../assets/zguan.png')}></Image></View>
                                     </View>
                                 </View>
                            </ImageBackground>
                        </View>
                        <View style={styles.ab}>
                        <View style={styles.aba}><Text style={{ fontSize: 25 ,color:'red'}}>1</Text></View>
                                    <View style={styles.abb1}>
                                        <Image style={styles.abba1} source={require('../../assets/1.jpg')}></Image>
                                    </View>
                                    <View style={styles.abc}>
                                        <Text style={{ fontSize: 18,color:'red' }}>22222</Text>
                                    </View>
                                    <View style={styles.abd}>
                                        <Text style={{ fontSize: 18,color:'red' }}> 2222</Text>
                                    </View>
                        </View>
                    </View>
                    <View style={styles.b}>
                        <FlatList
                            data={list}
                            renderItem={({ item, index }) => (
                                <View style={styles.c}>
                                    <View style={styles.aba}><Text style={{ fontSize: 19 }}>{index + 1}</Text></View>
                                    <View style={styles.abb}>
                                        <Image style={styles.abba} source={require('../../assets/1.jpg')}></Image>
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
        paddingTop:10*s,
        borderBottomColor: '#515253',
        borderBottomWidth: 3,
       
    },
    aa1: {
        height: 280 * s,
        width: '100%',     
        alignItems:'center',
        justifyContent:'center'
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
    abb1:{
        width: '13%',
        height: 80 * s,
        borderRadius: 40 * s,
        marginLeft: 10 * s,
        borderColor:'red',
        borderWidth:3
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
        borderRadius:10*s,
        width:'98%'
    },
    f:{
        width:'60%',
        height:200*s,
        justifyContent:'center',
        alignItems:'center'
    },
    f1:{
        width:80*s,
        height:80*s,
        borderRadius:40*s,

    },
    f2:{
        width:'90%',
        height:80*s,
        marginTop:20*s,
        justifyContent:'center',
        flexDirection:'row'
    },
    b:{
        marginTop:20*s
    }
})