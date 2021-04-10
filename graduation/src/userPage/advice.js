import React, { Component } from 'react'
import { View, Text, TextInput, Dimensions, StyleSheet, Image, FlatList, AsyncStorage, Alert, TouchableOpacity } from 'react-native'
import { List, TextareaItem, PickerView, Drawer } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import {
    Icon, Button, InputItem,

    WhiteSpace,
} from '@ant-design/react-native'
const { width, scale } = Dimensions.get('window');
const s = width / 640;


export default class advice extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            diaplay: true,
            text: '',
            use_id: '',
            value: undefined,
            list1: []
        }
        this.onChange = value => {
            this.setState({
                value,
            });
        };
    }
    diaplay = () => {
        Alert.alert('ddd')
    }
    //获取输入内容
    addtext = (e) => {
        this.setState({
            text: e
        })
    }

    //获取登录用户的唯一标识id
    componentDidMount() {
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            // console.log(this.state.use_id)

           

        })
        //console.log(this.state.use_id)



    }


    //发布意见
    fabu = () => {
        console.log(this.state.text)
        if (this.state.text == '') {
            Alert.alert('提示', '请填写内容后在提交！')
        }
        else {
            var user = { content: this.state.text }
            fetch(`http://81.70.101.193:8005/add_advice/${this.state.use_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body: JSON.stringify(user)
            }).then(res => res.json())
                .then((res) => {
                   // console.log(res)
                    //this.setState({text:''})
                    Alert.alert('提示', '上传成功成功', [


                        {
                            text: "确认"
                        },
                    ])
     
                })

        }
    }
   
    render() {
        return (
            <View>
                <View style={styles.a1}>
                    <View>
                        <TextareaItem
                            rows={7}
                            placeholder="在此输入你的意见吧！"
                            onChange={this.addtext}
                            count={100}
                            style={{ paddingVertical: 5 }}
                        />
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#A7BCF0', width: 194, height: 30, marginLeft: '65%', justifyContent: 'center', alignItems: 'center' }} onPress={this.fabu}>
                        <Text style={{ fontSize: 20, color: 'white' }}>上传意见</Text>
                    </TouchableOpacity>
               
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    a1: {
        flexDirection: 'column'

    },
    text: {
        width: '90%',
        height: 150 * s,
        backgroundColor: 'red'
    },
    a2: {
        flexDirection: 'row'
    },
    a3:
    {
        marginLeft: 40 * s,
        height: 50 * s,
        width: 160 * s,
        borderRadius: 25 * s,
        borderColor: 'red',
        borderWidth: 1 * s,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    a4:
    {
        height: 25 * s,
        width: 25 * s
    },
    img: {
        height: 34 * s,
        width: 34 * s,
        marginLeft: 10 * s
    },
    list: {
        flexDirection: 'row',
        height: 50 * s,
        width: '100%',
        marginTop: 20 * s,
        alignItems: 'center'
    },
    zong: {
        borderColor: '#adaba3',
        borderWidth: 2,
        flexDirection: 'column',
        height: 90 * s,
        marginTop: 33 * s,
        width: '95%',
        borderRadius: 30 * s,
      
        paddingLeft: 15 * s
    },

})
