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
import user from './src/userPage/user'
const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Tabs>
          <Scene 
            key="one" 
            component={home} 
            initial={true}
            title="首页" 
          />
          <Scene key="two" component={find} title="发现"/>
          <Scene key="three" component={share} title="分享" />
          <Scene key="four" component={user} title="我的" />
        </Tabs>
        
      </Scene>
    </Router>
  );
};

export default App;
