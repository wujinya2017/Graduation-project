import {Icon, TextareaItem} from '@ant-design/react-native';
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextAreaItem,
  AsyncStorage,
  Alert,
} from 'react-native';

const {width} = Dimensions.get('window');
const s = width / 640;

var time = new Date();
export default class growplan extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      text: '',
      value: '',
      userid: '',
      rijiarr: [],
    };
    this.onChange = (value) => {
      this.setState({
        value,
      });
    };
  }
  addtext = (e) => {
    this.setState({
      text: e,
    });
  };
  componentDidMount() {
    AsyncStorage.getItem('use_id', (error, result) => {
      this.setState({userid: JSON.parse(result)});
      fetch(`http://81.70.101.193:8006/wriji/${this.state.userid}`)
        .then((res1) => res1.json())
        .then((res1) => {
          this.setState({
            rijiarr: res1.data,
          });
        });
    });
  }
  faburiji = () => {
    if (this.state.text == '') {
      Alert.alert('提示', '日记不能为空哦');
    } else {
      fetch(`http://81.70.101.193:8005/get_phone/${this.state.userid}`)
        .then((res) => res.json())
        .then((res) => {
          var targetcontent = {
            id: res.data[0].use_id,
            content: this.state.text,
            fabutime: time,
          };
          fetch('http://81.70.101.193:8006/wriji', {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain; charset=UTF-8',
            },
            body: JSON.stringify(targetcontent),
          }).then(() => {
            Alert.alert('提示', '日记发布成功！');
            fetch(`http://81.70.101.193:8006/wriji/${this.state.userid}`)
              .then((res1) => res1.json())
              .then((res1) => {
                this.setState({
                  rijiarr: res1.data,
                });
              });
          });
        });
    }
  };
  deleteriji = (e) => {
    fetch(`http://81.70.101.193:8006/wriji/${e}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        Alert.alert('提示', '删除成功！', [{text: '确认'}]);
        fetch(`http://81.70.101.193:8006/wriji/${this.state.userid}`)
          .then((res1) => res1.json())
          .then((res1) => {
            this.setState({
              rijiarr: res1.data,
            });
          });
      });
  };
  render() {
    return (
      <View>
        <TextareaItem
          rows={9}
          onChange={this.addtext}
          placeholder="嗨，快来发布你的日记吧！"
          count={100}
          style={{borderColor: 'gray', borderWidth: 1 * s}}
        />
        <TouchableOpacity onPress={this.faburiji}>
          <Image
            source={require('../../assets/zfabu.png')}
            style={{width: 50 * s, height: 50 * s}}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 30 * s, margin: 10 * s}}>我的日记</Text>
        <View style={{alignItems: 'center'}}>
          {this.state.rijiarr.map((item) => (
            <View
              style={{
                borderColor: 'gray',
                borderWidth: 2 * s,
                margin: 10 * s,
                padding: 10 * s,
                width: 600 * s,
                borderRadius: 10 * s,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 23 * s, width: 550 * s}}>
                &emsp;{item.content}
              </Text>
              <TouchableOpacity onPress={() => this.deleteriji(item.windex)}>
                <Image
                  source={require('../../assets/70.png')}
                  style={{width: 30 * s, height: 30 * s}}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
