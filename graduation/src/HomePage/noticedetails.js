import { Icon } from '@ant-design/react-native';
import React, { Component } from 'react'

import {View, Text, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const s = width/640;

export default class noticedetails extends Component {
    render() {
        return (
            <View>
                <Text>到时候看看获取具体信息</Text>
            </View>
        )
    }
}
