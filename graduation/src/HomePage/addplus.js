import { Icon, TextareaItem, SearchBar, TabBar } from '@ant-design/react-native';
import React, { Component } from 'react'
import {View, Text, ScrollView, Image, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const s = width/640;

export default class addplus extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'redTab',
        };
    }
    renderContent(pageText) {
        return (
          <View style={{flex:1}}>
            <Text >{pageText}</Text>
          </View>
        );
    }
    onChangeTab(tabName) {
        this.setState({
          selectedTab: tabName,
        });
    }
    render() {
        return (
            // <View>
            //     <View style={{height:150*s,marginLeft:10*s,marginRight:10*s,marginTop:10*s}}>
            //         <Text style={{fontSize:25*s,marginBottom:5*s}}>自定义添加</Text>
            //         <View style={{flexDirection:'row',alignItems:'center'}}>
            //             <TextareaItem rows={3} placeholder="用最简洁的语言添加你的目标吧" count={100} style={{width:550*s,borderColor:'gray',borderWidth:1*s}} />  
            //             <Icon name='plus-circle'/>
            //         </View>
            //     </View>
            //     <View style={{height:850*s,backgroundColor:'red',marginLeft:10*s,marginRight:10*s}}>
            //         <Text style={{fontSize:25*s,marginBottom:5*s}}>快速添加</Text>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="#f5f5f5"
                    >
                        <TabBar.Item
                            title="Life"
                            icon={<Icon name="home" />}
                            selected={this.state.selectedTab === 'blueTab'}
                            onPress={() => this.onChangeTab('blueTab')}
                        >
                            {this.renderContent('Life Tab')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<Icon name="ordered-list" />}
                            title="Koubei"
                            badge={2}
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => this.onChangeTab('redTab')}
                        >
                            {this.renderContent('Koubei Tab')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<Icon name="like" />}
                            title="Friend"
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => this.onChangeTab('greenTab')}
                        >
                            {this.renderContent('Friend Tab')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<Icon name="user" />}
                            title="My"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => this.onChangeTab('yellowTab')}
                        >
                            {this.renderContent('My Tab')}
                        </TabBar.Item>
                    </TabBar>
            //     </View>
            // </View>
        )
    }
}
