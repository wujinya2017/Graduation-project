import React, { Component } from 'react'

import {View, Text, ScrollView, Image, Dimensions,TouchableOpacity, StyleSheet} from 'react-native';
import { Tabs } from '@ant-design/react-native';

const {width} = Dimensions.get('window');
const s = width/640;

const tabs = [
    { title: '推荐' },
    { title: '阅读好书' },
    { title: '体育锻炼' },
    { title: '实践活动' },
    { title: '时事政治' },
];
export default class find extends Component {
    render() {        
        return (
            <View style={{flex:1}}>
                <Tabs
                    tabs={tabs}
                    renderTabBar={tabProps => (
                      <View
                        style={{
                          paddingHorizontal: 20*s,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}
                      >
                        {tabProps.tabs.map((tab, i) => (
                          <TouchableOpacity
                            key={tab.key || i}
                            style={{
                              padding: 6,
                            }}
                            onPress={() => {
                              const { goToTab, onTabClick } = tabProps;
                              onTabClick && onTabClick(tabs[i], i);
                              goToTab && goToTab(i);
                            }}
                          >
                            <Text
                              style={{
                                color: tabProps.activeTab === i ? '#A7BCF0' : undefined,
                              }}
                            >
                              {tab.title}
                            </Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    )}
                  >
                    <View>
                        <Text>Content of First Tab</Text>
                    </View>
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
        )
    }
}
