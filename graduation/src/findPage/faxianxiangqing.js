import React, {Component} from 'react';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Tabs, Actions, Icon} from '@ant-design/react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');
const s = width / 640;

export default class faxianxiangqing extends Component {
  constructor() {
    super();
    this.state = {
      anniu: false,
    };
  }
  anniuguanzhu = () => {
    this.setState({
      anniu: true,
    });
  };
  render() {
    return (
      <ScrollView>
        <Swiper style={{height: 800 * s}}>
          <Image style={styles.img} source={require('../../assets/27.jpg')} />
          <Image style={styles.img} source={require('../../assets/67.jpg')} />
          <Image style={styles.img} source={require('../../assets/66.jpg')} />
          <Image style={styles.img} source={require('../../assets/65.jpg')} />
          <Image style={styles.img} source={require('../../assets/64.jpg')} />
          <Image style={styles.img} source={require('../../assets/63.jpg')} />
          <Image style={styles.img} source={require('../../assets/62.jpg')} />
          <Image style={styles.img} source={require('../../assets/61.jpg')} />
        </Swiper>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/31.jpg')}
              style={{
                width: 60 * s,
                height: 60 * s,
                overflow: 'hidden',
                borderRadius: 30 * s,
                margin: 15 * s,
              }}
            />
            <Text style={{marginTop: 30 * s, fontSize: 22 * s}}> 杨二水ya</Text>
          </View>
          <TouchableOpacity
            style={{
              width: 80 * s,
              height: 35 * s,
              borderWidth: 1 * s,
              margin: 30 * s,
              borderColor: 'red',
              borderRadius: 10 * s,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={this.anniuguanzhu}>
            {this.state.anniu ? (
              <View>
                <Text style={{fontSize: 20 * s, color: 'red'}}>已关注</Text>
              </View>
            ) : (
              <View style={{flexDirection: 'row'}}>
                <Icon name="plus" style={{color: 'red'}} />
                <Text style={{fontSize: 20 * s, color: 'red'}}>关注</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 23*s,marginBottom: 10*s}}>&emsp;<Image source={require('../../assets/88.png')} style={{width: 30*s,height: 30*s}}/>2020书单推荐提升自我|女生|治愈|情商|理财</Text>
        <Text style={{fontSize: 22*s,marginLeft: 5*s}}>
          <Image source={require('../../assets/68.png')} style={{width: 30*s,height: 30 * s}}/>
          &emsp;hi~本期给大家推荐10本好书，治愈系，理财系，提升自我，摆脱迷茫！大学生必读30本，每本都值得你看！悄悄提高自己的能力！
        </Text>
        <Text style={{fontSize: 22*s,marginLeft: 5*s}}>
          <Image source={require('../../assets/68.png')} style={{width: 30*s,height: 30*s}}/>
          &emsp;读书，可以让时间慢下来。当你坐下来打开一本书，会让你周围一切都变得安静了，面对不确定的未来，与其焦虑和迷茫，不如让自己的心静下来。可以在书中找到你所有的答案，帮助你解决一切疑惑！
        </Text>
        <Text>&emsp;1&emsp;《小团圆》</Text>
        <Text>&emsp;2&emsp;《我们仨》</Text>
        <Text>&emsp;3&emsp;《被讨厌的勇气》</Text>
        <Text>&emsp;4&emsp;《半生缘》</Text>
        <Text>&emsp;5&emsp;《你今天真好看》</Text>
        <Text>
          &emsp;6&emsp;《云边有个小卖部》--一部超感动，感觉就像我奶奶！
        </Text>
        <Text>&emsp;7&emsp;《非暴力沟通》</Text>
        <Text>&emsp;8&emsp;《内向者沟通圣经》--内向者也可以沟通！</Text>
        <Text>&emsp;9&emsp;《沟通艺术》</Text>
        <Text>&emsp;10&emsp;《人性的弱点》--教你如何看透人类</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: width,
    height: 800 * s,
    resizeMode: 'stretch',
  },
});
