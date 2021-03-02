import React, { Component } from 'react'

import { View, Text, TextInput, Dimensions, StyleSheet, Image, FlatList, Alert } from 'react-native'
import { List, TextareaItem } from '@ant-design/react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, scale } = Dimensions.get('window');
const s = width / 640;

export default class jihua extends Component {
    constructor() {
        super();
        this.state = {
            diaplay: true
        }
    }
    diaplay = () => {
        Alert.alert('ddd')
    }
    render() {
        return (
            <View>

                <List>
                    <TextareaItem
                        rows={7}
                        placeholder="嗨，请在此处给你写一封信吧！"
                        style={{ paddingVertical: 5 }}
                    />

                </List>
                <View style={{ width: 100 * s, height: 100 * s, marginLeft: '85%',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity >
                        <Image style={styles.img} source={require('../../assets/zshangchuan.png')}></Image>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({

    img: {
        height: 60 * s,
        width: 60 * s
    }
})
