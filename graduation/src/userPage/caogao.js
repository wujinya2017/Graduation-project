import React, { Component } from 'react'

import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, AsyncStorage, Alert, StyleSheet } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux'
import { FlatList } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class caogao extends Component {
    constructor(props) {
        super()
        this.state = {
            use_id: '',
            caogao: {}

        }
    }
    componentDidMount() {
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            //console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/getcaogao/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
                .then((res) => {
                    // console.log(res.data)
                    this.setState({ caogao: res.data })
                })


        })
    }
    del = (e) => {
        //console.log(e)

        fetch(`http://81.70.101.193:8005/delcaogao/${e}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                Alert.alert('提示', '删除成功！', [
                    { text: "确认" },

                ])
                fetch(`http://81.70.101.193:8005/getcaogao/${this.state.use_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    }
                }).then((res) => res.json())
                    .then((res) => {
                        // console.log(res.data)
                        this.setState({ caogao: res.data })
                    })




            })

    }
    render() {
        return (
            <View style={{ flex: 1,width: '98%'}}>
            <FlatList
                data={this.state.caogao}
                renderItem={({ item }) => (                  
                        <View style={{ alignItems: 'center',  marginTop: 5, borderWidth: 2, borderColor: '#A7BCF0' }}>

                            <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                                <Text style={{ fontSize: 18 }}>{item.use_name}</Text>
                                <Text>{item.state_date}</Text>
                            </View>
                            <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                                <Text>{item.content}</Text>
                            </View>

                            <TouchableOpacity style={{ marginLeft: '87%' }} onPress={() => this.del(item.su_id)}>
                                <Image source={require('../../assets/zla.png')} style={{ width: 30, height: 30, marginLeft: 5 }}></Image>
                            </TouchableOpacity>


                        </View>
                   
               
                )}
            >

            </FlatList>
            </View>



        )
    }
}
