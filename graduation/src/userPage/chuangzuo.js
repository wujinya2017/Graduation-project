import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image, AsyncStorage,TouchableOpacity,Alert, FlatList, ImageBackground } from 'react-native'
import { Button, Progress, WhiteSpace } from '@ant-design/react-native';
import { ScrollView } from 'react-native-gesture-handler';
const { width, scale } = Dimensions.get('window');
const s = width / 640;
const list = [
    { name: '22222', text: 'dsjkn ' },
    { name: '11111', text: '83njksd' },
    { name: '112333', text: 'eiwnio' },
    { name: '11111', text: '83njksd' },

]
export default class chuangzuo extends Component {
    constructor() {
        super();
        this.state = ({
            percent: 40,
            use_id:'',
            my:{}
        })
    }
    componentDidMount(){
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            //console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/getfabu/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
            .then((res)=>{
               // console.log(res.data)
                this.setState({my:res.data})
            })

        })
    }
    del = (e) => {
       // console.log(e)
  
        fetch(`http://81.70.101.193:8005/delfabu/${e}`, {
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
                fetch(`http://81.70.101.193:8005/getfabu/${this.state.use_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    }
                }).then((res) => res.json())
                .then((res)=>{
                   // console.log(res.data)
                    this.setState({my:res.data})
                })
    
            })
    
    
            

            

    }
    render() {
        return (
            <ScrollView>
            <View>
                <View style={styles.zong}>
                    <View style={styles.a1}>
                        <View style={styles.a11}>
                            <Image style={styles.a11} source={require('../../assets/1.jpg')}></Image>
                        </View>
                        <View style={styles.a12}>
                            <View >
                                <Text style={{ fontSize: 25 }}>创作等级&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LV.1</Text>

                            </View>
                            <View style={{ marginTop: 30 * s }}>
                                <Progress percent={5} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.a2}>
                        <View style={styles.a3}>
                            <View style={styles.a23}><Text style={{ fontSize: 23 }}>距离下次升级还差58分</Text></View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <ImageBackground style={styles.b2} source={require('../../assets/ztishi.png')}>
                                    <View style={styles.c1}>
                                        <View><Text style={styles.c4}>444</Text></View>
                                        <View><Text style={styles.c4}>浏览量</Text></View>
                                    </View>
                                    <View style={styles.c2}>
                                        <Image style={styles.c21} source={require('../../assets/zsweet.png')}></Image>
                                    </View>
                                    <View style={styles.c3}>
                                        <View><Text style={styles.c4}>44</Text></View>
                                        <View ><Text style={styles.c4}>点赞数</Text></View>
                                    </View>
                                </ImageBackground>
                                
                            </View>
                           
                        </View>
                    </View>

                </View>
            
               
                  <FlatList
                        data={this.state.my}
                        renderItem={({ item }) => (
                     
                              <View style={styles.tt}>
                                    <View style={styles.t}>
                                        <View><Text>{item.use_name}</Text></View>
                                        <View><Text style={{fontSize:18}}>&nbsp;&nbsp;{item.content}</Text></View>
                                        <View style={styles.c31} ><Text>{item.state_date}</Text></View>
                                        <TouchableOpacity style={{ marginLeft: '87%' }} onPress={() => this.del(item.su_id)}>
                                            <Image source={require('../../assets/zla.png')} style={{ width: 30, height: 30, marginLeft: 5 }}></Image>
                                        </TouchableOpacity>
                                    </View>
                                 
                                </View>
                        
                           
                        )}
                    ></FlatList>
           
                
            </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    zong: {
        height: 400 * s,
        borderColor: '#A7BCF0',
        borderWidth: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    a1: {
        flexDirection: 'row'
    },
    a11: {
        width: 80 * s,
        height: 80 * s,
        borderRadius: 40 * s

    },
    a12: {
        width: 500 * s,
        height: 100 * s,
        marginLeft: 20 * s,
        flexDirection: 'column'
    },
    a2: {
        width: '90%',
        height: 200 * s,
        marginTop: 40 * s,
        backgroundColor: '#A7BCF0'
    },
    a3: {
        height: 200 * s,
    },
    a23: {
        paddingLeft: 50 * s,
        paddingTop: 20 * s
    },
    b2: {
        height: 120 * s,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    c1: {
        width: '20%',
        height: 85 * s,
        marginTop: 20 * s,
        marginLeft: 5 * s,
        alignItems: 'center',
        justifyContent: 'center',
    },
    c21: {
        height: 60 * s,
        width: 60 * s
    },

    c2: {
        width: '45%',
        height: 85 * s,
        marginTop: 20 * s,
        marginLeft: 8 * s,
        alignItems: 'center',
        justifyContent: 'center'
    },
    c3: {
        width: '20%',
        height: 85 * s,
        marginTop: 20 * s,
        marginLeft: 8 * s,
        alignItems: 'center',
        justifyContent: 'center'
    },
    c31:{
        paddingLeft:'55%',
        
    },
    c4: {
        color: 'white',
        fontSize: 18
    },
    tt: {
        alignItems: 'center'
    },
    t: {
        width: '95%',
        height: 170 * s,
        justifyContent: 'center',
        paddingLeft: '4%',
       borderColor:'#A7BCF0',
       borderWidth:1,
        marginTop: 6 * s,
        borderRadius: 30 * s
    },
})