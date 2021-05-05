import {Progress} from '@ant-design/react-native';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  Alert,
  ScrollView,
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
      userid: '',
      targetarr: [],
      color: '#A7BCF0',
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
  componentDidMount() {
    AsyncStorage.getItem('use_id', (error, result) => {
      this.setState({userid: JSON.parse(result)});
      fetch(`http://81.70.101.193:8006/wtarget/${this.state.userid}`)
        .then((res) => res.json())
        .then((res) => {
          var arr = [];
          for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].wanchengbi !== 100) {
              arr.push(res.data[i]);
            }
          }
          this.setState({
            targetarr: arr,
          });
        });
    });
  }
  wdaka = () => {
    if (this.state.dakasatate === '打卡') {
      Alert.alert('提示', '打卡成功');
      this.setState({
        dakasatate: '已打卡',
        color: 'gray',
      });
    } else if (this.state.dakasatate === '已打卡') {
      Alert.alert('提示', '您已打过卡了哦');
    }
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.dakaone}>
          <TouchableOpacity
            style={{
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
              backgroundColor: this.state.color,
            }}
            onPress={this.wdaka}>
            <Text
              style={{fontSize: 35 * s, color: 'white', marginBottom: 15 * s}}>
              {this.state.dakasatate}
            </Text>
            <Text>{this.state.dakatime}</Text>
            <Text>{this.state.dakaweek}</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{margin: 10 * s, fontSize: 25 * s}}>
            {this.state.dakaxiatime}
          </Text>
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>今日目标完成情况</Text>
              <Text style={{paddingTop: 5 * s}}>获得积分</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{flexDirection: 'row', width: 400 * s, margin: 10 * s}}>
                <Progress
                  percent={this.state.percent}
                  style={{height: 7 * s, marginTop: 10 * s}}
                />
                <Text style={{marginTop: -2 * s, marginLeft: 5 * s}}>
                  {this.state.percent}%
                </Text>
              </View>
              <Text
                style={{
                  marginRight: 10 * s,
                  color: '#A7BCF0',
                  fontSize: 23 * s,
                  marginTop: -3 * s,
                }}>
                223分
              </Text>
            </View>

            <Text style={{marginBottom: 10 * s}}>今日目标未完成内容：</Text>
            <View>
              {this.state.targetarr.map((item) => (
                <View style={{alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 22 * s,
                      width: 600 * s,
                      borderRadius: 5 * s,
                      borderColor: 'gray',
                      borderWidth: 1 * s,
                      padding: 5 * s,
                      margin: 5 * s,
                    }}
                    key={item.id}>
                    {item.windex}. {item.maincontent}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
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
  dakatwo: {},
});
