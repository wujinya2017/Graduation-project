import React, { Component } from 'react'

import { View, Text, TextInput, Dimensions, StyleSheet, Image, FlatList, Alert,TouchableOpacity,AsyncStorage } from 'react-native'
import { List, TextareaItem } from '@ant-design/react-native';


const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class jihua extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            date:'',
            use_id:''
        }

    }
    addtext = (e) => {
        //console.log(this.state.text)
       this.setState({
           text:e
       })
    }
    shangchuan=()=>{
       if(this.state.text=='')
       {
           Alert.alert('提示','请输入信息后再上传！')
       }
       else{
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            //console.log(this.state.use_id)
            var body={use_id:this.state.use_id,
                text:this.state.text,
            }
            fetch("http://81.70.101.193:8005/addfuture", {
                method: "POST",
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                },
                body: JSON.stringify(body)
            }).then((res) => {
                Alert.alert('提示', '恭喜您发布成功！',
                );
            })
        })
       }
    }
   
    render() {
        return (
            <View>

                <List>
                    <TextareaItem
                        rows={7}
                        placeholder="嗨，请在此处给你写一封信吧！"
                        style={{ paddingVertical: 5 }}
                        onChange={this.addtext}
                    />

                </List>
                <View style={{ width: 100 * s, height: 100 * s, marginLeft: '85%', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={this.shangchuan} >
                        <Image style={styles.img} source={require('../../assets/zshangchuan.png')}></Image>
                        {/* <Text>DDD</Text> */}
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
