import React, { Component } from 'react'
import { View, Text, TextInput, Dimensions, StyleSheet, Image, FlatList, AsyncStorage, Alert } from 'react-native'
import { List, TextareaItem, PickerView,Drawer } from '@ant-design/react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
const seasons = [
    [
        {
            label: '开心',
            value: '开心',
        },
        {
            label: '沮丧',
            value: '沮丧',
        },
        {
            label: '难过',
            value: '难过',
        },
        {
            label: '一般',
            value: '一般',
        }
    ]
    
]
const list = [
    { name: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或' },
    { name: '11111' },
    { name: '112333' }
]
export default class motto extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            diaplay: true,
            text: '',
            use_id: '',
            value: undefined,
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
            console.log(this.state.use_id)
        })
        //console.log(this.state.use_id)

    }
    render() {
        return (
            <View>
                <View style={styles.a1}>
                    <View>
                        <TextareaItem
                            rows={7}
                            placeholder="嗨，请在此处输入座右铭吧！"
                            onChange={this.addtext}
                            count={100}
                            style={{ paddingVertical: 5 }}
                        />
                    </View>
                    <View style={styles.a2}>
                        <TouchableOpacity style={styles.a3}>
                            <Image style={styles.a4} source={require('../../assets/zjing.png')}></Image>
                            <Text>添加话题</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.a3]}>
                            <Image style={styles.a4} source={require('../../assets/zdi.png')}></Image>
                            <Text>添加地点</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.a3}>
                            {/* <Image style={styles.a4} source={require('../../assets/zxinqing.png')}></Image>
                            <Text>添加心情</Text> */}
                            <PickerView
                                onChange={this.onChange}
                                value={this.state.value}
                                data={seasons}
                                cascade={false}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.list}>
                        <Image style={styles.img} source={require('../../assets/zhistory.png')} onPress={() => this.display()}></Image>
                        <Text style={{ fontSize: 27, marginLeft: 10 * s }}>我的历史</Text>
                    </View>
                    <View>
                        <FlatList
                            data={list}
                            renderItem={({ item }) => (

                                <View style={{ alignItems: 'center' }}>
                                    <View style={styles.zong}>
                                        <View style={{ width: '90%' }}>
                                            <Text>{item.name ? (item.name.length > 25 ? item.name.substr(0, 24) + '...' : item.name) : ''}</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <Image style={styles.img} source={require('../../assets/zla.png')}></Image>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            )}
                        ></FlatList>
                    </View>
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
        flexDirection: 'row',
        height: 70 * s,
        marginTop: 13 * s,
        width: '95%',
        borderRadius: 30 * s,
        alignItems: 'center',
        paddingLeft: 15 * s
    },

})
