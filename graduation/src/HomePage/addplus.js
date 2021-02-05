import { Tabs, TextareaItem,Card, Checkbox } from '@ant-design/react-native';
import React, { Component } from 'react';
import { Dimensions, Image, Text, View ,TouchableOpacity, Pagination,WhiteSpace, WingBlank} from 'react-native';

const {width} = Dimensions.get('window');
const s = width/640;

const tabs = [
    {
        title:<View style={{justifyContent:'center',alignItems:'center'}}><Image source={require('../../assets/饭.png')} style={{width:40*s,height:40*s}}/><Text>健康饮食</Text></View>
    },
    {
        title:<View style={{justifyContent:'center',alignItems:'center'}}><Image source={require('../../assets/water.png')} style={{width:40*s,height:40*s}}/><Text>喝水</Text></View>
    },
    {
        title:<View style={{justifyContent:'center',alignItems:'center'}}><Image source={require('../../assets/早起.png')} style={{width:40*s,height:40*s}}/><Text>早起</Text></View>
    },
    {
        title:<View style={{justifyContent:'center',alignItems:'center'}}><Image source={require('../../assets/跑步.png')} style={{width:40*s,height:40*s}}/><Text>跑步</Text></View>
    },
];

export default class addplus extends Component {
    constructor(){
        super();
        this.state={
            fourView:1
        }
    }
    render() {
        return (
            <View>
                <View style={{height:150*s,marginLeft:10*s,marginRight:10*s,marginTop:10*s}}>
                    <Text style={{fontSize:25*s,marginBottom:5*s}}>自定义添加</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TextareaItem rows={3} placeholder="用最简洁的语言添加你的目标吧" count={100} style={{width:550*s,borderColor:'gray',borderWidth:1*s}} />  
                        <Image source={require('../../assets/17.png')} style={{marginLeft:15*s,width:50*s,height:50*s}}/>
                    </View>
                </View>
                <View style={{height:865*s,marginLeft:10*s,marginRight:10*s}}>
                    <Text style={{fontSize:25*s,marginBottom:5*s}}>快速添加</Text>
                    <Tabs 
                        tabs={tabs}
                        renderTabBar={tabProps => (
                            <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent:'space-around',
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
                            
                        </View>
                        <View><Text>2</Text></View>
                        <View><Text>3</Text></View>
                        <View>
                            <Card>
                                <Card.Header
                                    title="1.您跑步的目的是什么？"
                                    thumbStyle={{ width: 100*s }}
                                />
                                <Card.Body>
                                    <View style={{ height: 640*s,marginTop:10*s}}>
                                        <Checkbox style={{ margin: 6*s}}>锻炼身体</Checkbox>
                                        <Checkbox style={{ margin: 6*s}}>参加比赛</Checkbox>
                                        <Checkbox style={{ margin: 6*s }}>提高体育技能</Checkbox>
                                        <View style={{alignItems:'center',marginTop:50*s}}>
                                            <TouchableOpacity style={{width:400*s,height:70*s,backgroundColor:'#A7BCF0',borderRadius:4*s,justifyContent:'center',alignItems:'center'}}>
                                                <Text style={{fontSize:25*s,color:'white'}}>下一步</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Card.Body>
                            </Card>
                        </View>
                    </Tabs>
                </View>
            </View>
        )
    }
}