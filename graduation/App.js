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
import motto from './src/userPage/motto';
import shezhi from './src/userPage/shezhi';
import about from './src/userPage/about';
import advice from './src/userPage/advice';
import connect from './src/userPage/connect'
import jifen from './src/userPage/jifen';
import huifu from './src/userPage/huifu';
import caogao from './src/userPage/caogao';
import shoucang from './src/userPage/shoucang';
import fangke from './src/userPage/fangke';
import fensi from './src/userPage/fensi';
import guanzhu from './src/userPage/guanzhu';
import chuangzuo from './src/userPage/chuangzuo';
import future from './src/userPage/future'
import notice from './src/HomePage/notice';
import noticedetails from './src/HomePage/noticedetails';
import addplus from './src/HomePage/addplus';
import growplan from './src/HomePage/growplan';

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
                  <TouchableOpacity onPress={()=>Actions.notice()}><Icon name='mail' style={{color:'black'}}/></TouchableOpacity>
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
            <Scene
              key='notice'
              hideTabBar
              component={notice}
              title='通知'
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
            <Scene
              key='noticedetails'
              hideTabBar
              component={noticedetails}
              title='通知'
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
            <Scene
              key='addplus'
              hideTabBar
              component={addplus}
              title='设置目标'
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
            <Scene
              key='growplan'
              hideTabBar
              component={growplan}
              title='成长计划'
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
            title="发现"
            icon={
              ({focused})=><Icon
                color={focused?'#91ABEC':'black'}
                name='eye'
              />
            } 
          >
            <Scene 
              key='faxian'
              component={find}
              title="发现"
              navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
							titleStyle={{ flex: 1, textAlign: 'center'}}
            />
          </Scene>
          <Scene 
            key="three" 
            title="分享" 
            icon={
              ({focused})=><Icon
                color={focused?'#91ABEC':'black'}
                name='select'
              />
            } 
          >
            <Scene 
              key='fenxiang'
              component={share}
              title="分享"
              navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
							titleStyle={{ flex: 1, textAlign: 'center'}}
            />
          </Scene>

          <Scene 
            key="four" 
            title="我的" 
            icon={
              ({focused})=><Icon
                color={focused?'#91ABEC':'black'}
                name='user'
              />
            } 
          >
           
             <Scene 
              key='shouye'
              component={user}
              title="我的"
              navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
              titleStyle={{ flex: 1, textAlign: 'center'}}
              renderRightButton={
								<TouchableOpacity style={{marginLeft:10}}>
                  <Icon name='setting' style={{color:'black',marginRight:25}}  onPress={()=>Actions.shezhi()}/>
                </TouchableOpacity>
							}
            />
          <Scene 
            key='shezhi'
            title='设置'
            navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
            component={shezhi}
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
         <Scene key='motto'
                  component={motto}
                  title="编辑座右铭"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                  renderRightButton={
                    <TouchableOpacity style={{marginRight:10}} >
                     <Text style={{color:'white',fontSize:18}}>发布</Text>
                    </TouchableOpacity>
                  }
           ></Scene>
           <Scene key='chuangzuo'
                  component={chuangzuo}
                  title="我的创作"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
           <Scene key='guanzhu'
                  component={guanzhu}
                  title="我的关注"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
           <Scene key='fensi'
                  component={fensi}
                  title="我的粉丝"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
           <Scene key='fangke'
                  component={fangke}
                  title="我的访客"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
           <Scene key='future'
                  component={future}
                  title="我的未来"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
            <Scene key='jifen'
                  component={jifen}
                  title="我的积分"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
            <Scene key='shoucang'
                  component={shoucang}
                  title="我的收藏"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
            <Scene key='huifu'
                  component={huifu}
                  title="我的回复"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
            <Scene key='caogao'
                  component={caogao}
                  title="草稿箱"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
            <Scene key='advice'
                  component={advice}
                  title="意见反馈"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
            <Scene key='connect'
                  component={connect}
                  title="我的客服"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
            <Scene key='about'
                  component={about}
                  title="关于"
                  navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                  titleStyle={{ flex: 1, textAlign: 'center'}}
                  renderLeftButton={
                    <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                      <Icon name='left' style={{color:'black'}}/>
                    </TouchableOpacity>
                  }
                
           ></Scene>
          </Scene>
        </Tabs>
        
      </Scene>
    </Router>
  );
};

export default App;
