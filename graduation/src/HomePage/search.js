import { SearchBar } from '@ant-design/react-native';
import React, { Component } from 'react'
import {View, Text, ScrollView, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';

export default class search extends Component {
    render() {
        return (
            <View>
                <SearchBar placeholder='成长之路'/>
                <View>
                    <Text>热搜</Text>
                    <View>
                        
                    </View>
                </View>
                <View>
                    <Text>历史记录</Text>
                </View>
            </View>
        )
    }
}
