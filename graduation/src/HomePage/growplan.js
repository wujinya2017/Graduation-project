import {Icon} from '@ant-design/react-native';
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window');
const s = width / 640;

export default class growplan extends Component {
  render() {
    return (
      <View>
        <View style={{height: 110 * s, padding: 10 * s}}>
          <Text>自定义计划</Text>
          <TouchableOpacity
            style={{
              width: 600 * s,
              height: 55 * s,
              flexDirection: 'row',
              borderColor: 'gray',
              borderWidth: 1 * s,
              alignItems: 'center',
              margin: 10 * s,
              borderRadius: 8 * s,
              paddingLeft: 15 * s,
            }}>
            <Image
              source={require('../../assets/16.png')}
              style={{width: 40 * s, height: 40 * s, marginRight: 20 * s}}
            />
            <Text style={{fontSize: 20 * s}}>自定义成长计划</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{height: 110 * s, backgroundColor: 'red', padding: 10 * s}}>
          <Text>推荐类型</Text>
        </View>
      </View>
    );
  }
}
