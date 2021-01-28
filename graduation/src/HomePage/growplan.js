import { Icon } from '@ant-design/react-native';
import React, { Component } from 'react'
import {View, Text, ScrollView, Image, Dimensions,TouchableOpacity, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const s = width/640;

export default class growplan extends Component {
    render() {
        return (
            <View>
                <View style={{height:150*s,backgroundColor:'red',padding:10*s}}>
                    <Text>自定义计划</Text>
                    <TouchableOpacity>
                        <Image source={require('../../assets/16.png')}/>
                        <Text>自定义成长计划</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
