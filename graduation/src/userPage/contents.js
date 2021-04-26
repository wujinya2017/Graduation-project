import React, { Component } from 'react'

import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, Modal, AsyncStorage, StyleSheet, Alert } from 'react-native';
import { Tabs, TextareaItem } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux'
import { FlatList } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
const s = width / 640;

export default class
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            content: '',
            a: {}
        }
    }
    componentDidMount() {

        fetch(`http://81.70.101.193:8005/get_usr_fabu/${this.props.contentId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                //console.log(res.data)
                this.setState({ a: res.data })
                // console.log(this.state.a)
            })

    }
    render() {
        return (
            <View>
                <FlatList
                    data={this.state.a}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{ alignItems: 'center' }} >
                            <View style={{ height: 200, width: '98%', marginTop: 5, borderWidth: 2, borderColor: '#A7BCF0' }}>
                                <View style={{ paddingLeft: 20, paddingTop: 10, flexDirection: 'row' }}>
                                    <View>
                                        <Text style={{ fontSize: 18 }}>{item.use_name}</Text>
                                        <Text>{item.state_date}</Text>
                                    </View>
                                    <TouchableOpacity style={{ marginLeft: '50%' }} onPress={() => this.guanzhu(item.su_id)}>
                                        <Text style={{ fontSize: 14 }}>{item.guanzhu}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingTop: 10, paddingLeft: 20, height: 110 }}>
                                    <Text>{item.content}</Text>
                                </View>
                                <View style={{ marginLeft: '60%', flexDirection: 'row' }}>
                                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.dianzan(item)}>
                                        <Text style={{ fontSize: 18 }}>{item.dianzan_num == null ? 0 : item.dianzan_num}</Text>
                                        <Image source={require('../../assets/zdianzan.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30 }} onPress={() => {
                                        this.setModalVisible3({ su: item.su_id, vi: true, num: item.pinglun_num })
                                    }}>
                                        <Text style={{ fontSize: 18 }}>{item.pinglun_num == null ? 0 : item.pinglun_num}</Text>
                                        <Image source={require('../../assets/zpinglun.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 30 }} onPress={() => this.shoucang(item)}>
                                        <Text style={{ fontSize: 18 }}>{item.shoucang_num == null ? 0 : item.shoucang_num}</Text>
                                        <Image source={require('../../assets/zshoucang.png')} style={{ width: 20, height: 20, marginLeft: 5 }}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                >

                </FlatList>
                <View>
                    <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 10 }} >

                        <Image source={require('../../assets/zpinglun.png')} style={{ width: 50, height: 50, marginLeft: 1 }}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
