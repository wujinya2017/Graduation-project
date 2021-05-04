import React, { Component } from 'react'

import { View, Text, ScrollView, Image, Dimensions, TouchableOpacity, Modal, AsyncStorage, StyleSheet, Alert, ImageBackground } from 'react-native';
import { Tabs, TextareaItem } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux'
import { FlatList } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
const s = width / 640;
export default class huifu extends Component {
    constructor(props) {
        super()
        this.state = {
            use_id: '',
            data: {}


        }
    }
    componentDidMount() {
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/get_my_pinglun/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
                .then((res) => {
                    //console.log(res.data)

                    this.setState({ data: res.data })
                })
        })
    }

    render() {
        return (

            <View>
                <ImageBackground style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/zbg1.jpg')}>
                    <View style={{height:'95%',width:'100%'}}>
                        <FlatList data={this.state.data}
                         renderItem={({item})=>(
                             <View>
                                 <TouchableOpacity  onPress={() => Actions.huifu_content({ 'contentId': item.su_id })} style={{height:80,width:'100%',alignItems:'center',backgroundColor:'white',marginTop:20,flexDirection:'row',borderWidth:3,borderColor:'#A7BCF0'}}>
                                     <View style={{width:'20%'}}>
                                         <Image source={require('../../assets/zping1.png')} style={{width:80,height:80}}></Image>
                                     </View>
                                     <View>
                                         <Text style={{fontSize:25}} numberOfLines={1}>{item.content}</Text>
                                     </View>
                                 </TouchableOpacity>
                             </View>
                         )}
                        ></FlatList>
                    </View>
                </ImageBackground>
            </View>

        )
    }
}
