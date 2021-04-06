import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image,TouchableOpacity,AsyncStorage } from 'react-native'
import { List, TextareaItem } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
export default class future extends Component {
    constructor(props) {
        super()
        this.state = {
            a: '',
            use_id:''

        }
    }
    componentDidMount(){
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
           // console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/getletter/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
            .then((res)=>{
                //console.log(res.data[0].content)
                this.setState({a:res.data[0].content+'[最新future]'})
            })
        })
    }
    render() {
        return (
            <View>
                <View style={styles.a}>
                    <View style={styles.a1}></View>
                    <View style={styles.a2}></View>
                    <Image style={styles.a3} source={require('../../assets/zdown1.png')}></Image>
                    <View style={styles.b}>
                        <View style={styles.c}>
                            <List >
                                <TextareaItem value={this.state.a} rows={8} placeholder="请点击右下角去给未来的自己写一封信吧！！！" />
                            </List>
                        </View>
                        <View style={styles.d}>
                            <Text style={{color:'#31749a',fontSize:16}}>还未创建？去创建</Text>
                            <TouchableOpacity onPress={()=>Actions.jihua()}>
                                <Image source={require('../../assets/zgo.png')} style={{height:80*s,width:80*s,marginLeft:20*s}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    a: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    a1:
    {
        height: 20 * s,
        width: 20 * s,
        backgroundColor: 'red',
        borderRadius: 10 * s,
        marginTop: 10 * s
    },
    a2: {
        width: 5 * s,
        height: 170 * s,
        backgroundColor: 'red'
    },
    a3:
    {
        height: 80 * s,
        width: 80 * s,
        marginTop: -20 * s
    },
    b: {
        height: 330 * s,
        width: 500 * s,
        borderColor: '#A7BCF0',
        borderWidth: 4,
        flexDirection: 'column'
    },
    c: {
        width: 304 * s,
        width: 486 * s,
        borderWidth: 3,
        borderColor: 'yellow'
    },
    d:{
        height:48*s,
        width:400*s,
        marginTop:4*s,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:'30%'
    }

})