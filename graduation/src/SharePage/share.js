import React, { Component } from 'react'

import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux'
const { width } = Dimensions.get('window');
const s = width / 640;

const tabs = [
    { title: '推荐' },
    { title: '关注' },
    { title: '我的' },

];
export default class find extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: '100%',
                        height: 73 * s,
                        backgroundColor: '#A7BCF0',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}

                >

                    <Text style={{ fontSize: 20, marginLeft: 270 * s }}>分享</Text>

                    <TouchableOpacity style={{ marginLeft: 200 }} onPress={() => Actions.fabu()}>
                        <Image style={{ height: 30, width: 30 }} source={require('../../assets/zfabu.png')}></Image>
                    </TouchableOpacity>

                </View>
                <Tabs
               
                    tabs={tabs}
                >
                    <View>
                        <Text>Content of First Tab</Text>
                    </View>
                    <View >
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View>
                        <Text>Content of Third Tab</Text>
                    </View>
                   
                </Tabs>
                <View></View>
            </View>
        )
    }
}

