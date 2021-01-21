/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar} from 'react-native';
import { Router, Scene,Tabs } from 'react-native-router-flux';

import find from './src/findPage/find';
import home from './src/HomePage/home';
import share from './src/SharePage/share';
import user from './src/userPage/user';

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
            component={home} 
            initial={true}
            title="首页" 
            icon={
              ({focused})=><Icon
                color={focused?'#91ABEC':'black'}
                name='home'
              />
            } 
          />
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
            titleStyle={{ color: 'white', flex: 1, textAlign: 'center', marginLeft: -30 }}
            navigationBarStyle={{ backgroundColor: 'red' }}
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
