/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TouchableOpacity} from 'react-native';
import { Actions, Router, Scene,Tabs } from 'react-native-router-flux';

import find from './src/findPage/find';
import home from './src/HomePage/home';
import share from './src/SharePage/share';
import user from './src/userPage/user';
import clock from './src/HomePage/clock';


import {Icon} from '@ant-design/react-native'

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Tabs
          hideNavBar
          activeTintColor="#91ABEC"
          inactiveTintColor="black"
        >
          <Scene 
            key="one" 
            initial={true}
            title="首页" 
            icon={
              ({focused})=><Icon
                color={focused?'#91ABEC':'black'}
                name='home'
              />
            } 
          >
            <Scene 
              key='shouye'
              component={home}
              title="成长之路"
              navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
							renderLeftButton={
								<TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.daka()}>
                  <Icon name='carry-out' style={{color:'black'}}/>
                </TouchableOpacity>
							}
							titleStyle={{ flex: 1, textAlign: 'center'}}
							renderRightButton={
								<View style={{marginRight:10,flexDirection:'row'}}>
                  <Icon name='search' style={{color:'black',marginRight:10}}/>
                  <Icon name='mail' style={{color:'black'}}/>
                </View>
							}
            />
            <Scene
              key='daka'
              component={clock}
              title='成长日历'
              navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
							renderLeftButton={
								<TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                  <Icon name='left' style={{color:'black'}}/>
                </TouchableOpacity>
							}
							titleStyle={{ flex: 1, textAlign: 'center'}}
							renderRightButton={
								<View style={{marginRight:10}}></View>
							}
            />
          </Scene>
          <Scene 
            key="two" 
            component={find} 
            title="发现"
            icon={
              ({focused})=><Icon
                color={focused?'#91ABEC':'black'}
                name='eye'
              />
            } 
          />
          <Scene 
            key="three" 
            component={share} 
            title="分享" 
            icon={
              ({focused})=><Icon
                color={focused?'#91ABEC':'black'}
                name='select'
              />
            } 
          />
          <Scene 
            key="four" 
            component={user} 
            title="我的" 
            icon={
              ({focused})=><Icon
                color={focused?'#91ABEC':'black'}
                name='user'
              />
            } 
          />
        </Tabs>
        
      </Scene>
    </Router>
  );
};

export default App;
