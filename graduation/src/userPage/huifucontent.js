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
            a: {},
            pinglun: {},
            use_id:''
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            //console.log(this.state.use_id)
            var body={su_id:this.props.contentId,
                usr_id:this.state.use_id
            }
        fetch(`http://81.70.101.193:8005/get_my_huifu11`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
           body: JSON.stringify(body)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data)
                this.setState({ a: res.data })
               
            })
        })

    }
    render() {
        return (
            <ScrollView>
                <View>
            
                 
                    <FlatList data={this.state.a}
                        renderItem={({ item }) => (
                            <View style={{ marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#A7BCF0', flexDirection: 'row', height: 60, paddingLeft: 30 }}>
                                    <View style={{ width: '60%' }}>
                                        <Text>{item.usr_name}:</Text>
                                        <Text style={{ paddingLeft: 30, paddingTop: 10, fontSize: 20 }}>{item.content}</Text>
                                    </View>
                                    <View>
                                        <Text>{item.huifu_time}</Text>
                                    </View>

                                </View>
                            </View>
                        )}
                    ></FlatList>
                </View>
            </ScrollView>
        )
    }
}
