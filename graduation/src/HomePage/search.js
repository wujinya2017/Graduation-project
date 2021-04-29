import {SearchBar} from '@ant-design/react-native';
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {Icon} from '@ant-design/react-native';
import AsyncStorage from '@react-native-community/async-storage';

const {width} = Dimensions.get('window');
const s = width / 640;
export default class search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      searchTextarr: [],
      storesearchTextarr: [],
    };
    this.onChange = (value) => {
      this.setState({value});
    };
    this.clear = () => {
      this.setState({value: ''});
    };
  }
  // componentDidMount() {
  //   AsyncStorage.getItem('searchrecord').then((result) => {
  //     console.log(result);
  //     console.log(typeof result.substring(1, result.length - 2));
  //   });
  // }
  render() {
    return (
      <View>
        <SearchBar
          value={this.state.value}
          placeholder="成长之路"
          style={{height: 50 * s}}
          onSubmit={(value) => {
            this.setState({
              value: value,
            });
            // AsyncStorage.setItem('searchrecord', this.state.value, () => {
            //   this.state.searchTextarr.push(this.state.value);
            //   console.log('存储成功');
            // });
          }}
          onCancel={this.clear}
          onChange={this.onChange}
          showCancelButton
        />
        <View>
          <Text style={{fontSize: 25 * s, marginTop: 10 * s}}>热搜</Text>
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap', width: 500 * s}}>
            <Text
              style={{
                backgroundColor: '#f9f9f9',
                margin: 5 * s,
                fontSize: 20 * s,
                padding: 5 * s,
                borderRadius: 10 * s,
              }}>
              阅读好书推荐
            </Text>
            <Text
              style={{
                backgroundColor: '#f9f9f9',
                margin: 5 * s,
                fontSize: 20 * s,
                padding: 5 * s,
                borderRadius: 10 * s,
              }}>
              体育锻炼
            </Text>
            <Text
              style={{
                backgroundColor: '#f9f9f9',
                margin: 5 * s,
                fontSize: 20 * s,
                padding: 5 * s,
                borderRadius: 10 * s,
              }}>
              健康生活
            </Text>
            <Text
              style={{
                backgroundColor: '#f9f9f9',
                margin: 5 * s,
                fontSize: 20 * s,
                padding: 5 * s,
                borderRadius: 10 * s,
              }}>
              喝水
            </Text>
            <Text
              style={{
                backgroundColor: '#f9f9f9',
                margin: 5 * s,
                fontSize: 20 * s,
                padding: 5 * s,
                borderRadius: 10 * s,
              }}>
              运动的好处
            </Text>
            <Text
              style={{
                backgroundColor: '#f9f9f9',
                margin: 5 * s,
                fontSize: 20 * s,
                padding: 5 * s,
                borderRadius: 10 * s,
              }}>
              如何快速成长
            </Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 25 * s, marginTop: 10 * s}}>历史搜索</Text>
            <TouchableOpacity>
              <Image
                source={require('../../assets/27.png')}
                style={{width: 25 * s, height: 25 * s, margin: 20 * s}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap', width: 500 * s}}>
            <Text
              style={{
                backgroundColor: '#f9f9f9',
                margin: 5 * s,
                fontSize: 20 * s,
                padding: 5 * s,
                borderRadius: 10 * s,
              }}>
              励志的句子
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
