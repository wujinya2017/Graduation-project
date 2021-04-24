import React, { Component } from 'react'
import { Text, View, Dimensions, TextInput, TouchableOpacity, ImageBackground, Image, StyleSheet, AsyncStorage, Alert } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import { NoticeBar, Icon, InputItem, List, TextareaItem } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
import Input from '@ant-design/react-native/lib/input-item/Input';

const { width } = Dimensions.get('window');
const s = width / 640;

const options = {
    title: '选择图片',
    cancelButtonTitle: '取消',
    takePhotoButtonTitle: '拍照',
    chooseFromLibraryButtonTitle: '选择照片',
    cameraType: 'back',
    mediaType: 'photo',
    videoQuality: 'high',
    durationLimit: 10,
    maxWidth: 300,
    maxHeight: 300,
    quality: 0.8,
    angle: 0,
    allowsEditing: false,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            imageUrl: '',
            txtValue1: '未填写',
            txtValue2: '未填写',
            txtValue3: '未填写',
            txtValue4: '未填写',
            txtValue5: '未填写',
            wtouxiang: '',
            wusername: '',
            wsex: '',
            weixinnumber: '',
            wclass: '',
            wschool: '',
            loginstd: '',
            wimage: '',
            use_id:'',
            aa1:'请输入昵称',
            aa2:'请输入性别',
            aa3:'请输入星座',
            aa4:'请输入年龄',
            aa5:'请输入微信'
        }
    }

    takephoto = () => {
        var formData = new FormData();
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                console.log(response)
                const source = { uri: response.uri };
                const file = { uri: response.uri, type: response.type, name: response.fileName };
                console.log(file);
                formData.append('image', file);
                console.log(JSON.stringify(formData))
                this.setState({
                    imageUrl: source,
                })
                this.setState({
                    wimage: formData
                })
            }
        });
    }
    componentDidMount(){
        AsyncStorage.getItem('use_id', (err, result) => {
            this.setState({ use_id: JSON.parse(result) })
            // console.log(this.state.use_id)
            fetch(`http://81.70.101.193:8005/get_phone/${this.state.use_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain; charset=UTF-8'
                }
            }).then((res) => res.json())
            .then((res)=>{
               // console.log(res.data)
                this.setState({aa1:res.data[0].use_name})
                this.setState({aa2:res.data[0].use_sex})
                this.setState({aa3:res.data[0].xing_zuo})
                this.setState({aa4:res.data[0].use_age})
                this.setState({aa5:res.data[0].use_wechat})
            })
           
        })
       
    }
  baocun=()=>{
      var a={
          use_name:this.state.aa1,
          use_sex:this.state.aa2,
          use_wechat:this.state.aa3,
          use_age:this.state.aa4,
          xing_zuo:this.state.aa5
      }
      //console.log(a)
      fetch(`http://81.70.101.193:8005/zmessage/${this.state.use_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
        },
        body: JSON.stringify(a)
    }).then(res => res.json())
        .then((res) => {
            Alert.alert('修改个人信息成功！')
        })
   
  }
    render() {
        return (
            <View style={{ flex: 1 }}>


                <View>
                    <View style={styles.firstlist}>
                        <Text style={{ fontSize: 18 }}>头像</Text>
                        <TouchableOpacity  style={styles.buttontouxiang}>
                            <ImageBackground style={{ width: 100 * s, height: 100 * s }} source={require('../../assets/1.jpg')}>
                                <Image style={{ width: 100 * s, height: 100 * s }} source={this.state.imageUrl} />
                            </ImageBackground>
                            <Text style={styles.genghuantouxiang}>更换头像</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{ fontSize: 18 }}>昵称</Text>
                        
                            <TextInput
                                placeholder={this.state.aa1}
                                onChangeText={(text) => { this.setState({ aa1: text }) }}
                                placeholderTextColor='gray'
                                style={styles.inputconent}
                                underlineColorAndroid='transparent'
                            >{this.state.wusername}</TextInput>
                        
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{ fontSize: 18 }}>性别</Text>
                        <TextInput
                            placeholder={this.state.aa2}
                            placeholderTextColor='gray'
                            onChangeText={(text) => { this.setState({ aa2: text }) }}
                            style={styles.inputconent}
                        >{this.state.wsex}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{ fontSize: 18 }}>星座</Text>
                        <TextInput
                            placeholder={this.state.aa3}
                            placeholderTextColor='gray'
                            style={styles.inputconent}
                            onChangeText={(text) => { this.setState({ aa3: text }) }}
                        >{this.state.weixinnumber}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{ fontSize: 18 }}>年龄</Text>
                        <TextInput
                            placeholder={this.state.aa4}
                            placeholderTextColor='gray'
                            onChangeText={(text) => { this.setState({ aa4: text }) }}
                            style={styles.inputconent}
                        >{this.state.wsex}</TextInput>
                    </View>
                    <View style={styles.listcontent}>
                        <Text style={{ fontSize: 18 }}>微信</Text>
                        <TextInput
                            placeholder={this.state.aa5}
                            placeholderTextColor='gray'
                            style={styles.inputconent}
                            onChangeText={(text) => { this.setState({ aa5: text }) }}
                        >{this.state.wclass}</TextInput>
                    </View>
                    
                    <TouchableOpacity style={styles.baocun} onPress={this.baocun}><Text style={{ color: 'white', fontSize: 16 }}>保存</Text></TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    listcontent: {
        flexDirection: 'row',
        height: 100 * s,
        paddingLeft: 70 * s,
        paddingRight: 10 * s,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputconent: {
        width: 200 * s,
        fontSize: 17,
        textAlign: 'center',
    },
    firstlist: {
        flexDirection: 'row',
        height: 100 * s,
        paddingLeft: 80 * s,
        paddingRight: 50 * s,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    genghuantouxiang: {
        width: 100 * s,
        opacity: 0.8,
        marginTop: -33 * s,
        color: 'gray',
        backgroundColor: 'white',
        paddingLeft: 12 * s
    },
    buttontouxiang: {
        width: 100 * s,
        height: 100 * s,
        borderRadius: 50 * s,
        overflow: 'hidden',
        marginTop: 20 * s,
        marginRight: 11 * s,
    },
    baocun: {
        width: 80 * s,
        height: 50 * s,
        backgroundColor: '#708090',
        marginLeft: '85%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})