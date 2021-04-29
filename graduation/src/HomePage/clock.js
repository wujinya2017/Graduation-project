import {Progress} from '@ant-design/react-native';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');
const s = width / 640;

export default class clock extends Component {
  constructor() {
    super();
    this.state = {
      dakatime: '',
      dakaxiatime: '',
      dakaweek: '',
      dakasatate: '打卡',
      percent: 70,
    };
    setInterval(() => {
      this.formatDateTime();
    }, 1000);
  }
  formatDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    var day = date.getDate();
    day = day < 10 ? '0' + day : day;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    let Time = year + '-' + month + '-' + day + '    ' + h + ':' + minute;
    var weeks = new Array(
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    );
    var weekday = date.getDay();
    var week = weeks[weekday];
    this.setState({
      dakatime: Time,
      dakaweek: week,
    });
    this.setState({
      dakaxiatime: month + '月' + day + '日',
    });
  }
  daka() {
    console.log(222);
  }
  render() {
    return (
      <View>
        <View style={styles.dakaone}>
          <View style={styles.dakatwo}>
            <Text
              style={{fontSize: 35 * s, color: 'white', marginBottom: 15 * s}}>
              {this.state.dakasatate}
            </Text>
            <Text>{this.state.dakatime}</Text>
            <Text>{this.state.dakaweek}</Text>
          </View>
        </View>
        <View>
          <Text style={{margin: 10 * s, fontSize: 20 * s}}>
            {this.state.dakaxiatime}
          </Text>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>今日目标完成情况：</Text>
              <Text>获得积分</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <View
                style={{flexDirection: 'row', width: 500 * s, margin: 10 * s}}>
                <Progress
                  percent={this.state.percent}
                  style={{height: 7 * s, marginTop: 10 * s}}
                />
                <Text style={{marginTop: -2 * s, marginLeft: 5 * s}}>
                  {this.state.percent}%
                </Text>
              </View>
            </View>

            <Text>今日目标未完成内容：</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dakaone: {
    height: 350 * s,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 1 * s,
  },
  dakatwo: {
    backgroundColor: '#A7BCF0',
    width: 250 * s,
    height: 250 * s,
    borderRadius: 150 * s,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'red',
    shadowOffset: {width: 100 * s, height: 20 * s},
    shadowOpacity: 0.8,
    shadowRadius: 6,
    elevation: 10,
  },
});
