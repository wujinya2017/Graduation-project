/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState,useEffect} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,TouchableOpacity} from 'react-native';
import { Actions, Lightbox, Modal, Overlay, Router, Scene,Tabs } from 'react-native-router-flux';

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
import search from './src/HomePage/search';
import anquan from './src/userPage/anquan';
import tongyong from './src/userPage/tongyong';
import yinsi from './src/userPage/yinsi';
import message from './src/userPage/message';


import Login from './src/common/Login'
import Logon from "./src/common/Logon";
import SwiperPage from './src/common/SwiperPage'
import misspassword from './src/common/misspassword';
import jihua from './src/userPage/jihua';

const App = () => {
  let [isLogin,setLogin] = useState(false);
  // let [isInstall,setInstall] = useState(true);
  // let now = 0;
  // let init = ()=>{
  //   AsyncStorage.getItem('isInstall')
  //     .then(res=>{
  //       if (res) {
  //         setInstall(false)
  //       }
  //     })   
  //     // 第二次进入的时候登录页判断
  //     // AsyncStorage.removeItem('user');
  //     // AsyncStorage.clear();
  //     AsyncStorage.getItem('user')
  //     .then(res=>{
  //       let user = JSON.parse(res)
  //       console.log('1111'+user);
  //       if(!user){
  //         //启动页
  //         SplashScreen.hide();
  //       }
  //       if(user&&user.token){
  //         setLogin(true);
  //         SplashScreen.hide();
  //       }
  //     })
  //   }
  //   useEffect(()=>{
  //     init();
  //   },[])

  //   let afterInstall = ()=>{
  //     console.log('afterInstall')
  //     setInstall(false)
  //   }
  //   if (isInstall) {
  //     return(
  //       <View style={{flex:1}}>
  //         {/* 引导页 */}
  //         <SwiperPage afterInstall={afterInstall}/>
  //       </View>
  //     )
  // }
  return (
    <Router
      backAndroidHandler={() => {
        // if (Actions.currentScene == 'login') {
        //   // console.log('11');
        //   Actions.reset('login');
        //   if (new Date().getTime() - now < 2000) {
        //     BackHandler.exitApp();
        //   } else {
        //     ToastAndroid.show('确定要退出吗', 100);
        //     now = new Date().getTime();
        //     return true;
        //   }
        // } else {
          if (Actions.currentScene == 'shouye') {
            if (new Date().getTime() - now < 2000) {
              BackHandler.exitApp();
            } else {
              ToastAndroid.show('确定要退出吗', 100);
              now = new Date().getTime();
              return true;
            }
          } else {
            Actions.pop();
            return true;
          }
        //}
      }}
    >
      <Overlay>
        <Modal key="modal" hideNavBar>
          <Lightbox>
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
                      <TouchableOpacity onPress={()=>Actions.search()}><Icon name='search' style={{color:'black',marginRight:10}}/></TouchableOpacity>
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
                <Scene
                  key='search'
                  hideTabBar
                  hideNavBar
                  component={search}
                  title='搜索'
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
              <Scene key='anquan'
                      component={anquan}
                      title="账号与安全"
                      navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                      titleStyle={{ flex: 1, textAlign: 'center'}}
                      renderLeftButton={
                        <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                          <Icon name='left' style={{color:'black'}}/>
                        </TouchableOpacity>
                      }
                    
              ></Scene>
                  <Scene key='tongyong'
                      component={tongyong}
                      title="通用"
                      navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                      titleStyle={{ flex: 1, textAlign: 'center'}}
                      renderLeftButton={
                        <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                          <Icon name='left' style={{color:'black'}}/>
                        </TouchableOpacity>
                      }
                    
              ></Scene>
                  <Scene key='yinsi'
                      component={yinsi}
                      title="隐私"
                      navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                      titleStyle={{ flex: 1, textAlign: 'center'}}
                      renderLeftButton={
                        <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                          <Icon name='left' style={{color:'black'}}/>
                        </TouchableOpacity>
                      }
                    
              ></Scene>
                  <Scene key='message'
                      component={message}
                      title="个人信息"
                      navigationBarStyle={{ backgroundColor: '#A7BCF0' }}
                      titleStyle={{ flex: 1, textAlign: 'center'}}
                      renderLeftButton={
                        <TouchableOpacity style={{marginLeft:10}} onPress={()=>Actions.pop()}>
                          <Icon name='left' style={{color:'black'}}/>
                        </TouchableOpacity>
                      }
              ></Scene>
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
               <Scene key='jihua'
                      component={jihua}
                      title="my future"
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
          </Lightbox>
          <Scene key="swiperPage" initial={!isLogin} component={SwiperPage} />
          <Scene key="login" title='登录' component={Login}/>
          <Scene key="misspassword" title="找回密码" component={misspassword}/>
          <Scene key="logon" title="注册" component={Logon}/>
        </Modal>
      </Overlay>
    </Router>
  );
};

export default App;
