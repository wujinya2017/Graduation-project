
import { district } from 'antd-mobile-demo-data';
import React from 'react';
import { Text, View, ScrollView, Dimensions, StyleSheet, Image, Modal, TouchableOpacity, AsyncStorage, Alert, ToastAndroid } from 'react-native';
import { List, Picker, Provider, TextareaItem, InputItem, Icon, Toast, ActionSheet } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';
import { FlatList } from 'react-native-gesture-handler';

const data = require('@bang88/china-city-data');
const { width } = Dimensions.get('window');
const s = width / 640;

export default class PopupExample extends React.Component {
    constructor(props) {
        super(props);
        this.onPress = () => {
            setTimeout(() => {
                this.setState({
                    data: district,
                });
            }, 500);
        };
        this.onChange = value => {
            this.setState({ value });
        };
        this.state = {
            data: [],
            value: [],
            pickerValue: [],
            qiantime: '',
            xinqing: '开心',
            quanxian: '所有人可见',
            modalVisible: false,
            modalVisible2: false,
            modalVisible3: false,
            img: [{ imgsrc: "'../../assets/伤心.png'" }, { imgsrc: "'../../assets/伤心.png'" }, { imgsrc: "'../../assets/伤心.png'" }, { imgsrc: "'../../assets/伤心.png'" }],
            imageUrl: '',
            content:'',
            use_id:'',
            use_name:''


        };
    }
    //获取时间
    componentDidMount() {
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
           // console.log(this.state.use_id)
           fetch(`http://81.70.101.193:8005/get_phone/${this.state.use_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            }
        }).then((res) => res.json())
            .then((res) => {
                //console.log(res.data[0])
                this.setState({ use_name: res.data[0].use_name })
            })
    
    

        })
        //console.log(this.state.use_id)


        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        var hour = date.getHours().toString();
        var minute = date.getMinutes().toString();
        this.setState({
            qiantime: year + '年' + month + '月' + day + '日' + ' ' + hour + ':' + minute
        })
    }
    //弹窗可见性
    setModalVisible = (visible) => {
        this.setState({
            modalVisible: visible
        })
    };
    //权限
    setModalVisible2 = (visible) => {
        this.setState({
            modalVisible2: visible
        })
    };
    //草稿
    
     setModalVisible3= (visible) => {
        this.setState({
            modalVisible3: visible
        })
    };
    //xinqing
    xinqing = (e) => {
        //console.log(e.e)
        this.setState({
            xinqing: e.e,

        })

    }
    //quanxian
    quanxian = (e) => {
        this.setState({
            quanxian: e.e,

        })
    }
    //拍照
    takephoto = () => {
        // //拍照
        const options = {
            title: '请选择',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择相册',
            customButtons: [],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    imageUrl: source,

                })
                console.log(this.state.imageUrl)
            }
        });

    }
    //发布
    fabu=()=>{
        var a={
            use_id:this.state.use_id,
            content:this.state.content,
            xinqing:this.state.xinqing,
            quanxian:this.state.quanxian,
            shijian:this.state.qiantime,
            location:this.state.value,
            use_name:this.state.use_name
        }
        if(this.state.content=='')
        {
            Alert.alert('提示','请输入发布内容！')
        }
        else{
            if(this.state.value=='')
            {
                Alert.alert('提示','请选择位置！')
            }
            else{
                fetch(`http://81.70.101.193:8005/zfabu`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain; charset=UTF-8'
                    },
                    body: JSON.stringify(a)
                }).then(res => res.json())
                .then(res=>{
                   Alert.alert('提示','发布成功，请确认是否返回到展示页面！',[
                    { text: "确认", onPress: ()=>{Actions.fenxiang()} },
                    { text: "取消"},
                   ])
                })
            }
        }
    
    }

    //保存
    baocun=()=>{
      
            var a={
                use_id:this.state.use_id,
                content:this.state.content,
                xinqing:this.state.xinqing,
                quanxian:this.state.quanxian,
                shijian:this.state.qiantime,
                location:this.state.value,
                use_name:this.state.use_name
            }
            if(this.state.content=='')
            {
                Alert.alert('提示','请输入发布内容！')
            }
            else{
                if(this.state.value=='')
                {
                    Alert.alert('提示','请选择位置！')
                }
                else{
                    fetch(`http://81.70.101.193:8005/zcaogao`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'text/plain; charset=UTF-8'
                        },
                        body: JSON.stringify(a)
                    }).then(res => res.json())
                    .then(res=>{
                       Alert.alert('提示','保存草稿成功')
                       this.setModalVisible3(false)
                       Actions.fenxiang()
                    })
                }
            }
    
        
    }
    render() {
        return (
            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            width: '100%',
                            height: 73 * s,
                            backgroundColor: '#A7BCF0',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}

                    >
                         <TouchableOpacity style={{marginLeft:5}} onPress={()=>Actions.fenxiang()}>
                             <Image source={require('../../assets/zleft.png')} style={{width:25,height:25}}></Image>
                         </TouchableOpacity>
                        <TouchableOpacity style={{ height: 73, width: 80, justifyContent: 'center', marginLeft: 20 }} onPress={() => {
                                this.setModalVisible3(true)
                            }}>
                            <Text style={{ fontSize: 23, color: 'white' }}>取消</Text>
                        </TouchableOpacity>
                        <Modal animationType={'none'}
                            transparent={true}
                            visible={this.state.modalVisible3}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 200,width:'70%',opacity:0.8, backgroundColor: '#A7BCF0', alignItems: 'center' }}>
                                   
                                    <View style={{borderBottomColor:'black',borderBottomWidth:2,height:130,width:'100%',justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:20}}>是否保存为草稿？</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <TouchableOpacity style={{height:70,width:'48%',borderRightColor:'black',borderRightWidth:2,justifyContent:'center',alignItems:'center'}} onPress={() => this.setModalVisible3(false)} >
                                            <Text style={{fontSize:23}}>取消</Text>
                                        </TouchableOpacity >
                                        <TouchableOpacity onPress={this.baocun} style={{height:70,width:'48%',justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:23}}>保存</Text>
                                        </TouchableOpacity >
                                    </View>
                                    
                                      
                                    
                                </View>

                            </View>
                        </Modal>
                        <TouchableOpacity style={{ height: 73, width: 80, justifyContent: 'center', marginLeft: 280 }} onPress={this.fabu}>
                            <Text style={{ fontSize: 23, color: 'white' }}>发布</Text>
                        </TouchableOpacity>



                    </View>
                    <View style={{ width: '95%', backgroundColor: 'white', padding: 10 * s, marginTop: 10 * s, borderTopLeftRadius: 20 * s, borderTopRightRadius: 20 * s, borderBottomColor: '#adaba3', borderBottomWidth: 2 }}>
                        <TextareaItem
                            placeholder='分享新鲜事'
                            value={i => this.wujinyareturn1 = i}
                            onChange={value => {
                                this.setState({
                                    content: value,
                                });
                            }}
                            placeholderTextColor='#C0C0C0'
                            rows={10}
                            count={500}
                        />
                        {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 360 * s, marginLeft: 20 * s }}>
                            {
                                this.state.clickstate ?
                                    <TouchableOpacity
                                        title='照片'
                                        onPress={this.onPressImg}
                                        style={{ width: 120 * s, height: 120 * s, backgroundColor: '#708090', justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <Image style={{ width: 50 * s, height: 50 * s }} source={require('../../assets/1.jpg')} />
                                        <Text style={{ color: 'white', fontSize: 16 }}>图片/视频</Text>
                                    </TouchableOpacity> :
                                    <View></View>
                            }

                        </View> */}
                        {/* <View style={{ flexDirection: 'row' }}>
                            <FlatList
                                data={this.state.img}
                                numColumns={4}
                                renderItem={({ item }) => (

                                    <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                                        <View style={{ height: 100, width: 100, backgroundColor: 'red' }}>
                                            <Image style={{ height: 100, width: 100, backgroundColor: 'red' }} source={{ uri: item.imgsrc }}></Image>
                                            <Text>{item.imgsrc}</Text>
                                        </View>
                                    </View>
                                )}
                            ></FlatList>

                        </View>
                        <TouchableOpacity onPress={() => this.takephoto()} style={{ height: 60, marginTop: 20, alignItems: 'center', justifyContent: 'center', width: '99%', backgroundColor: '#A7BCF0', borderRadius: 10 }}>
                            <Text style={{ fontSize: 50, color: 'white' }}>+</Text>

                        </TouchableOpacity> */}

                    </View>
                    <View style={{ width: '95%', backgroundColor: 'white', borderBottomLeftRadius: 20 * s, borderBottomRightRadius: 20 * s }}>
                        <Modal animationType={'none'}
                            transparent={true}
                            visible={this.state.modalVisible}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 350, width: '80%', backgroundColor: '#afdfe4', alignItems: 'center' }}>
                                    <View style={{ height: 45, width: '100%', backgroundColor: '#afdfe4', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 19 }}>选择心情(点击即可)</Text>
                                        <TouchableOpacity style={{ marginLeft: '40%' }} onPress={() => this.setModalVisible(false)}><Text style={{ fontSize: 23 }}>X</Text></TouchableOpacity>
                                    </View>

                                    <View style={{ height: 297, width: '97%', backgroundColor: 'white' }}>

                                        <View style={{ flexDirection: 'column' }}>
                                            <TouchableOpacity onPress={(kaixin) => this.xinqing({ e: '开心' })} style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#afdfe4', marginLeft: 40, alignItems: 'center', justifyContent: 'center' }}>
                                                <Image style={{ width: 50, height: 50 }} source={require('../../assets/开心.png')}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={(kaixin) => this.xinqing({ e: '伤心' })} style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#afdfe4', marginLeft: 190, marginTop: -20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Image style={{ width: 50, height: 50 }} source={require('../../assets/伤心.png')}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={(kaixin) => this.xinqing({ e: '一般' })} style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#afdfe4', marginLeft: 100, marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                                                <Image style={{ width: 50, height: 50 }} source={require('../../assets/一般.png')}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={(kaixin) => this.xinqing({ e: '失落' })} style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#afdfe4', marginLeft: 250, alignItems: 'center', justifyContent: 'center' }}>
                                                <Image style={{ width: 50, height: 50 }} source={require('../../assets/失落.png')}></Image>
                                            </TouchableOpacity>
                                            <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 20 }}>
                                                <Text style={{ fontSize: 20, width: '60%' }}>您已选择表情：{this.state.xinqing}</Text>
                                                <TouchableOpacity onPress={() => this.setModalVisible(false)} style={{ width: 50, marginTop: -10, height: 40, backgroundColor: '#afdfe4', marginLeft: 80, alignItems: 'center', justifyContent: 'center' }} >
                                                    <Text>确认</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </Modal>


                        <View style={styles.listontent}>
                            <View style={{ flexDirection: 'row' }}>
                                <Icon style={{ color: '#708090', padding: 3 * s }} name='smile' />
                                <Text style={{ fontSize: 18, marginLeft: 8 }}>心情</Text>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: '67%' }} onPress={() => {
                                this.setModalVisible(true)
                            }}>
                                <Text style={{ fontSize: 17, color: 'gray' }}>{this.state.xinqing}</Text>
                                {/* <Image source={this.state.biaoqing}></Image> */}
                                <Icon name='right' />
                            </TouchableOpacity>
                        </View>
                        <Modal animationType={'none'}
                            transparent={true}
                            visible={this.state.modalVisible2}
                        >
                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                <View style={{ height: 350, width: '80%', backgroundColor: '#afdfe4', alignItems: 'center' }}>
                                    <View style={{ height: 45, width: '100%', backgroundColor: '#afdfe4', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 19 }}>选择权限(点击即可)</Text>
                                        <TouchableOpacity style={{ marginLeft: '40%' }} onPress={() => this.setModalVisible2(false)}><Text style={{ fontSize: 23 }}>X</Text></TouchableOpacity>
                                    </View>

                                    <View style={{ height: 297, width: '97%', backgroundColor: 'white' }}>

                                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={(kaixin) => this.quanxian({ e: '仅自己可见' })} style={{ width: '90%', height: 60, marginTop: 10, borderRadius: 30, backgroundColor: '#afdfe4', alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>仅自己可见</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={(kaixin) => this.quanxian({ e: '所有人可见' })} style={{ width: '90%', height: 60, borderRadius: 30, backgroundColor: '#afdfe4', marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>所有人可见</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={(kaixin) => this.quanxian({ e: '部分人可见' })} style={{ width: '90%', height: 60, borderRadius: 30, backgroundColor: '#afdfe4', marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>部分人可见</Text>
                                            </TouchableOpacity>

                                            <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 20 }}>
                                                <Text style={{ fontSize: 20, width: '60%' }}>权限：{this.state.quanxian}</Text>
                                                <TouchableOpacity onPress={() => this.setModalVisible2(false)} style={{ width: 50, marginTop: -10, height: 40, backgroundColor: '#afdfe4', marginLeft: 80, alignItems: 'center', justifyContent: 'center' }} >
                                                    <Text>确认</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </Modal>
                        <View style={styles.listontent}>
                            <TouchableOpacity style={{ flexDirection: 'row' }} >
                                <Icon style={{ color: '#708090', padding: 3 * s }} name='user' />
                                <Text style={{ fontSize: 18, marginLeft: 8 }}>权限</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', marginLeft: '60%' }} onPress={() => { this.setModalVisible2(true) }} >
                                <Text style={{ fontSize: 17, color: 'gray' }}>{this.state.quanxian}</Text>
                                <Icon name='right' />
                            </TouchableOpacity>

                        </View>
                        <View style={styles.listontent}>
                            <Image style={{ padding: 3, width: 30, height: 30 }} source={require('../../assets/ztime.png')}></Image>
                            <Text style={{ fontSize: 18, marginLeft: 8 }}>时间</Text>
                            <View style={{ marginLeft: '50%' }}><Text style={{ fontSize: 16, color: '#696363' }}>{this.state.qiantime}</Text></View>

                        </View>
                        <Provider >
                            <List>
                                <Picker
                                    data={data}
                                    cols={3}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                >
                                    <List.Item arrow="horizontal" onPress={this.onPress} style={{ borderBottomColor: '#adaba3', height: 49, borderBottomWidth: 2, fontSize: 24 }}>
                                        省市选择
                                    </List.Item>
                                </Picker>

                            </List>

                        </Provider>

                    </View>
                </View>
            </ScrollView>


        );
    }
}



const styles = StyleSheet.create({
    listontent: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: 'white',

        alignItems: 'center',
        paddingLeft: 15 * s,
        paddingRight: 15 * s,
        borderBottomColor: '#adaba3',
        borderBottomWidth: 2
    },
    fabutext: {
        backgroundColor: '#708090',
        width: 70 * s,
        height: 40 * s,
        borderRadius: 10 * s,
        marginTop: 10 * s,
        marginBottom: 10 * s,
        marginLeft: 500 * s,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
// // import React, { Component } from 'react'

// // import {
// //     SafeAreaView,
// //     StyleSheet,
// //     ScrollView,
// //     View,
// //     Text,
// //     StatusBar,
// //     Dimensions,
// //     TouchableOpacity,
// //     Image
// //   } from 'react-native';
// //   import {Actions} from 'react-native-router-flux';
// //   import { NoticeBar, Icon, InputItem, List, TextareaItem } from '@ant-design/react-native';

// //   const { width } = Dimensions.get('window');
// // const s = width / 640;

// // export default class fabu extends Component {
// //     render() {
// //         return (
// //             <View>
// //                  <View
// //                     style={{
// //                         width:'100%',
// //                         height:73*s,
// //                         backgroundColor:'#A7BCF0',
// //                         flexDirection:'row',
// //                         alignItems:'center',
// //                     }}

// //                 >

// //                     <TouchableOpacity style={{height:73,width:80,justifyContent:'center',marginLeft:20}} onPress={()=>Actions.pop()}>
// //                         <Text style={{fontSize:23,color:'white'}}>取消</Text>
// //                     </TouchableOpacity>
// //                     <TouchableOpacity style={{height:73,width:80,justifyContent:'center',marginLeft:320}}>
// //                         <Text style={{fontSize:23,color:'white'}}>发布</Text>
// //                     </TouchableOpacity>



// //                 </View>
// //             </View>
// //         )
// //     }
// // }
