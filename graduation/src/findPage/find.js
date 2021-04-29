/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const s = width / 640;

const tabs = [
  {title: '推荐'},
  {title: '阅读好书'},
  {title: '体育锻炼'},
  {title: '实践活动'},
  {title: '时事政治'},
];
export default class find extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Tabs
          tabs={tabs}
          renderTabBar={(tabProps) => (
            <View
              style={{
                paddingHorizontal: 20 * s,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {tabProps.tabs.map((tab, i) => (
                <TouchableOpacity
                  key={tab.key || i}
                  style={{
                    padding: 6,
                  }}
                  onPress={() => {
                    const {goToTab, onTabClick} = tabProps;
                    onTabClick && onTabClick(tabs[i], i);
                    goToTab && goToTab(i);
                  }}>
                  <Text
                    style={{
                      color: tabProps.activeTab === i ? '#A7BCF0' : undefined,
                    }}>
                    {tab.title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View
                style={{
                  width: 300 * s,
                  height: 400 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/5.jpg')}
                  style={{width: 300 * s, height: 300 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  超火的背景图教程【素材评论区自取】
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/21.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 青春少女</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 233</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 500 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/23.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  长痘忌口|油痘肌饮食干货|带你养出白净肌
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/24.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 瑶壹个护</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 4470</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 500 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                  marginTop: -90 * s,
                }}>
                <Image
                  source={require('../../assets/25.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  四招养成少女背 锁骨 美背 轻松get
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/21.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 蟹蟹你丫</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 9336</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 330 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/26.jpg')}
                  style={{width: 300 * s, height: 250 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  半月谈 | 加强学生体育锻炼
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10 * s,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/21.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 奈斯的学习基地</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 3</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View>
            <Text>Content of Second Tab</Text>
          </View>
          <View>
            <Text>Content of Third Tab</Text>
          </View>
          <View>
            <Text>Content of Fouth Tab</Text>
          </View>
          <View>
            <Text>Content of Fifth Tab</Text>
          </View>
        </Tabs>
      </View>
    );
  }
}
