/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import {Tabs} from '@ant-design/react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Actions} from 'react-native-router-flux';

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
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <TouchableOpacity
                onPress={() => Actions.faxianxiangqing()}
                style={{
                  width: 300 * s,
                  height: 400 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/27.jpg')}
                  style={{width: 300 * s, height: 300 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  2020书单推荐提升自我|女生|治愈|情商
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/31.jpg')}
                      style={{
                        width: 30 * s,
                        height: 30 * s,
                        overflow: 'hidden',
                        borderRadius: 15 * s,
                      }}
                    />
                    <Text> 杨二水ya</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 7.6万</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  width: 300 * s,
                  height: 450 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/28.jpg')}
                  style={{width: 300 * s, height: 340 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  不看必后悔的30本好书！！学生提升修养气质
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/32.jpg')}
                      style={{
                        width: 30 * s,
                        height: 30 * s,
                        overflow: 'hidden',
                        borderRadius: 15 * s,
                      }}
                    />
                    <Text> 七月北陆</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 1875</Text>
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
                  marginTop: -40 * s,
                }}>
                <Image
                  source={require('../../assets/29.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  治愈图文|让你在烦躁的生活中多一些平静
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
                    <Text> 我有一个好故事</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 1.2万</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 450 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/30.jpg')}
                  style={{width: 300 * s, height: 330 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  72本书助你成为从容、优雅、自信的100分女性
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
                    <Text> 友友mua</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 2.0万</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
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
                  source={require('../../assets/49.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  作文素材>>主题：体育锻炼
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
                    <Text> 浙江学姐</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 543</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 300 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/48.jpg')}
                  style={{width: 300 * s, height: 200 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  做好体育锻炼，提高认知能力
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
                    <Text> 金色雨林</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 10</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 580 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                  // marginTop: -90 * s,
                }}>
                <Image
                  source={require('../../assets/47.jpg')}
                  style={{width: 300 * s, height: 500 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  成长长高小课堂|第三课
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
                    <Text> biubiu</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 821</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 530 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                  marginTop: -190 * s,
                }}>
                <Image
                  source={require('../../assets/50.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  要科学的选择帕梅拉运动！燃脂真的是绝了
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
                    <Text> 5480</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View
                style={{
                  width: 300 * s,
                  height: 530 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/51.jpg')}
                  style={{width: 300 * s, height: 450 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s,marginTop: 5*s}}>
                  暑假社会实践个人心得报告
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
                    <Text> YY</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 580</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 450 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/52.jpg')}
                  style={{width: 300 * s, height: 350 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s,marginTop: 5*s}}>
                  教培中心可以带小朋友参加哪些实践活动？
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
                    <Text> Jess老师</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 195</Text>
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
                  // marginTop: -90 * s,
                }}>
                <Image
                  source={require('../../assets/53.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s,marginTop: 5*s}}>
                  支教|大一暑假社会实践get
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
                    <Text> 大头桌桌</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 337</Text>
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
                  marginTop: -70 * s,
                }}>
                <Image
                  source={require('../../assets/54.jpg')}
                  style={{width: 300 * s, height: 250 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  我们的活力青春
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
                    <Text> tan90</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 202</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <ScrollView>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <View
                style={{
                  width: 300 * s,
                  height: 380 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/56.jpg')}
                  style={{width: 300 * s, height: 300 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s,marginTop: 5*s}}>
                  高三艺考生|距离高考7天
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
                    <Text> 李小小</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 1.2万</Text>
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
                  source={require('../../assets/57.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s,marginTop: 5 * s }}>
                  2021教师资格证面试结构化万能模板汇总
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
                    <Text> 小强</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 105</Text>
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
                  marginTop: -100 * s,
                }}>
                <Image
                  source={require('../../assets/58.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  2021年高考重点时政术语
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
                    <Text> 重考北大</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 1316</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: 300 * s,
                  height: 480 * s,
                  backgroundColor: '#f9f9f5',
                  margin: 10 * s,
                  borderRadius: 10 * s,
                  overflow: 'hidden',
                }}>
                <Image
                  source={require('../../assets/59.jpg')}
                  style={{width: 300 * s, height: 400 * s}}
                />
                <Text style={{fontSize: 20 * s, marginBottom: 5 * s}}>
                  高考政治|时政总结
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
                    <Text> Orem的高考经验</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={require('../../assets/22.png')}
                      style={{width: 30 * s, height: 30 * s}}
                    />
                    <Text> 14</Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </Tabs>
      </View>
    );
  }
}
