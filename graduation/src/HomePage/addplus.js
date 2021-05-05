/* eslint-disable react-native/no-inline-styles */
import {
  Tabs,
  TextareaItem,
  Card,
  Checkbox,
  Tag,
  DatePicker,
  List,
  Provider,
  Icon,
  Progress,
} from '@ant-design/react-native';
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Pagination,
  WhiteSpace,
  WingBlank,
  AsyncStorage,
  Alert,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const s = width / 640;

const tabs = [
  {
    title: (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/饭.png')}
          style={{width: 40 * s, height: 40 * s}}
        />
        <Text>健康饮食</Text>
      </View>
    ),
  },
  {
    title: (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/water.png')}
          style={{width: 40 * s, height: 40 * s}}
        />
        <Text>喝水</Text>
      </View>
    ),
  },
  {
    title: (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/早起.png')}
          style={{width: 40 * s, height: 40 * s}}
        />
        <Text>早起</Text>
      </View>
    ),
  },
  {
    title: (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../assets/跑步.png')}
          style={{width: 40 * s, height: 40 * s}}
        />
        <Text>跑步</Text>
      </View>
    ),
  },
];

export default class addplus extends Component {
  constructor() {
    super();
    this.state = {
      userid: 0,
      firstView: 0,
      secondView: 0,
      thirdView: 0,
      fourView: 0,
      value: undefined,
      textareaval: '',
      checkboxItem1: '',
    };
    this.onChange = (value) => {
      this.setState({value});
    };
  }
  firstxiayibu() {
    this.setState({
      firstView: ++this.state.firstView,
    });
  }
  firstshangyibu() {
    this.setState({
      firstView: --this.state.firstView,
    });
  }
  secondxiayibu() {
    this.setState({
      secondView: ++this.state.secondView,
    });
  }
  secondshangyibu() {
    this.setState({
      secondView: --this.state.secondView,
    });
  }
  thirdxiayibu() {
    this.setState({
      thirdView: ++this.state.thirdView,
    });
  }
  thirdshangyibu() {
    this.setState({
      thirdView: --this.state.thirdView,
    });
  }
  fourxiayibu() {
    this.setState({
      fourView: ++this.state.fourView,
    });
  }
  fourshangyibu() {
    this.setState({
      fourView: --this.state.fourView,
    });
  }
  firstContent() {
    switch (this.state.firstView) {
      case 0:
        return (
          <Card>
            <Card.Header
              title="1.您健康饮食的主要目标是？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox
                  style={{margin: 6 * s}}
                  checked={this.state.checkboxItem1}
                  onChange={(event) => {
                    this.setState({checkboxItem1: event.target.checked});
                    console.log(this.state.checkboxItem1);
                  }}>
                  营养素摄入充足平衡
                </Checkbox>
                <Checkbox style={{margin: 6 * s}}>预防疾病</Checkbox>
                <Checkbox style={{margin: 6 * s}}>改善生活</Checkbox>
                <Checkbox style={{margin: 6 * s}}>保持理想体重</Checkbox>
                <Checkbox style={{margin: 6 * s}}>丰富饮食</Checkbox>
                <View style={{alignItems: 'center', marginTop: 50 * s}}>
                  <TouchableOpacity
                    onPress={() => this.firstxiayibu()}
                    style={{
                      width: 400 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 1:
        return (
          <Card>
            <Card.Header
              title="2.您对自己的身材或饮食习惯是否满意？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>满意</Checkbox>
                <Checkbox style={{margin: 6 * s}}>不满意</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.firstshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.firstxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 2:
        return (
          <Card>
            <Card.Header
              title="3.您会随身携带以下哪些食物？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>水果</Checkbox>
                <Checkbox style={{margin: 6 * s}}>饼干</Checkbox>
                <Checkbox style={{margin: 6 * s}}>巧克力</Checkbox>
                <Checkbox style={{margin: 6 * s}}>其他零食</Checkbox>
                <Checkbox style={{margin: 6 * s}}>不带吃的</Checkbox>
                <Checkbox style={{margin: 6 * s}}>水</Checkbox>
                <Checkbox style={{margin: 6 * s}}>代餐食品</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.firstshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.firstxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 3:
        return (
          <Card>
            <Card.Header
              title="4.您使用过什么保持身材的方法？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>运动</Checkbox>
                <Checkbox style={{margin: 6 * s}}>吃减肥药</Checkbox>
                <Checkbox style={{margin: 6 * s}}>每顿少吃一点</Checkbox>
                <Checkbox style={{margin: 6 * s}}>运动+控制饮食</Checkbox>
                <Checkbox style={{margin: 6 * s}}>
                  自认为有效的减肥偏方
                </Checkbox>
                <Checkbox style={{margin: 6 * s}}>参加减肥训练营</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.firstshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.firstxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 4:
        return (
          <Card>
            <Card.Header
              title="5.对一款健康食品，您会更倾向于什么口味？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>无味</Checkbox>
                <Checkbox style={{margin: 6 * s}}>橙子</Checkbox>
                <Checkbox style={{margin: 6 * s}}>西瓜</Checkbox>
                <Checkbox style={{margin: 6 * s}}>草莓</Checkbox>
                <Checkbox style={{margin: 6 * s}}>葡萄</Checkbox>
                <Checkbox style={{margin: 6 * s}}>芒果</Checkbox>
                <Checkbox style={{margin: 6 * s}}>柠檬</Checkbox>
                <Checkbox style={{margin: 6 * s}}>西柚</Checkbox>
                <Checkbox style={{margin: 6 * s}}>香蕉</Checkbox>
                <Checkbox style={{margin: 6 * s}}>桃子</Checkbox>
                <Checkbox style={{margin: 6 * s}}>蓝莓</Checkbox>
                <Checkbox style={{margin: 6 * s}}>猕猴桃</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.firstshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.firstxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 5:
        return (
          <Card>
            <Card.Header
              title="6.来制定您的健康饮食目标吧！"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <TextareaItem rows={6} count={100} style={{width: 600 * s}} />
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.firstshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.firstxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>完成</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 6:
        return (
          <View
            style={{
              width: 620 * s,
              height: 280 * s,
              borderRadius: 10 * s,
              backgroundColor: 'white',
              overflow: 'hidden',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  marginTop: 30 * s,
                  width: 425 * s,
                  height: 100 * s,
                  marginLeft: 30 * s,
                  borderBottomWidth: 1 * s,
                  borderColor: 'gray',
                }}>
                <Text style={{fontSize: 30 * s}}>您的健康饮食计划</Text>
                <Text style={{fontSize: 25 * s}}> A balanced diet</Text>
              </View>
              <Image
                source={require('../../assets/18.jpg')}
                style={{width: 150 * s, height: 150 * s}}
              />
            </View>
            <View
              style={{
                width: 550 * s,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{width: 200 * s, height: 120 * s}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 40 * s}}>856</Text>
                  <Text
                    style={{
                      fontSize: 20 * s,
                      marginLeft: 10 * s,
                      color: '#f1f9f9',
                    }}>
                    Cal
                  </Text>
                </View>
                <Text>Calories Intake</Text>
                <Progress
                  percent={50}
                  style={{marginTop: 10 * s, backgroundColor: 'white'}}
                />
              </View>
              <View style={{width: 200 * s, height: 120 * s}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 40 * s}}>2.3</Text>
                  <Text
                    style={{
                      fontSize: 20 * s,
                      marginLeft: 10 * s,
                      color: '#f1f9f9',
                    }}>
                    L
                  </Text>
                </View>
                <Text>Water Intake</Text>
                <Progress
                  percent={80}
                  style={{marginTop: 10 * s, backgroundColor: 'white'}}
                  unfilled="false"
                />
              </View>
            </View>
          </View>
        );
      default:
        break;
    }
  }
  secondContent() {
    switch (this.state.secondView) {
      case 0:
        return (
          <Card>
            <Card.Header
              title="1.您喝水的主要目标是？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>清脂肪</Checkbox>
                <Checkbox style={{margin: 6 * s}}>预防疾病</Checkbox>
                <Checkbox style={{margin: 6 * s}}>改善生活</Checkbox>
                <Checkbox style={{margin: 6 * s}}>调整内分泌</Checkbox>
                <View style={{alignItems: 'center', marginTop: 50 * s}}>
                  <TouchableOpacity
                    onPress={() => this.secondxiayibu()}
                    style={{
                      width: 400 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 1:
        return (
          <Card>
            <Card.Header
              title="2.您对自己的喝水习惯是否满意？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>满意</Checkbox>
                <Checkbox style={{margin: 6 * s}}>不满意</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.secondshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.secondxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 2:
        return (
          <Card>
            <Card.Header
              title="3.您一天大概会喝多少水？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>1000ml~1500ml</Checkbox>
                <Checkbox style={{margin: 6 * s}}>1500ml~2000ml</Checkbox>
                <Checkbox style={{margin: 6 * s}}>2000ml~2500ml</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.secondshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.secondxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 3:
        return (
          <Card>
            <Card.Header
              title="4.来制定您的健康饮食目标吧！"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <TextareaItem rows={6} count={100} style={{width: 600 * s}} />
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.secondshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.secondxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>完成</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 4:
        return (
          <View
            style={{
              width: 620 * s,
              height: 280 * s,
              borderRadius: 10 * s,
              backgroundColor: 'white',
              overflow: 'hidden',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  marginTop: 30 * s,
                  width: 425 * s,
                  height: 100 * s,
                  marginLeft: 30 * s,
                  borderBottomWidth: 1 * s,
                  borderColor: 'gray',
                }}>
                <Text style={{fontSize: 30 * s}}>您的喝水计划</Text>
                <Text style={{fontSize: 25 * s}}> Water Tracker</Text>
              </View>
              <Image
                source={require('../../assets/18.jpg')}
                style={{width: 150 * s, height: 150 * s}}
              />
            </View>
            <View
              style={{
                width: 550 * s,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{width: 200 * s, height: 120 * s}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 40 * s}}>856</Text>
                  <Text
                    style={{
                      fontSize: 20 * s,
                      marginLeft: 10 * s,
                      color: '#f1f9f9',
                    }}>
                    Cal
                  </Text>
                </View>
                <Text>Calories Intake</Text>
                <Progress
                  percent={50}
                  style={{marginTop: 10 * s, backgroundColor: 'white'}}
                />
              </View>
              <View style={{width: 200 * s, height: 120 * s}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 40 * s}}>2.3</Text>
                  <Text
                    style={{
                      fontSize: 20 * s,
                      marginLeft: 10 * s,
                      color: '#f1f9f9',
                    }}>
                    L
                  </Text>
                </View>
                <Text>Water Intake</Text>
                <Progress
                  percent={80}
                  style={{marginTop: 10 * s, backgroundColor: 'white'}}
                  unfilled="false"
                />
              </View>
            </View>
          </View>
        );
      default:
        break;
    }
  }
  threeContent() {
    switch (this.state.thirdView) {
      case 0:
        return (
          <Card>
            <Card.Header
              title="1.您打算早上几点起床？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>5点</Checkbox>
                <Checkbox style={{margin: 6 * s}}>6点</Checkbox>
                <Checkbox style={{margin: 6 * s}}>7点</Checkbox>
                <Checkbox style={{margin: 6 * s}}>8点</Checkbox>
                <Checkbox style={{margin: 6 * s}}>9点</Checkbox>
                <View style={{alignItems: 'center', marginTop: 50 * s}}>
                  <TouchableOpacity
                    onPress={() => this.thirdxiayibu()}
                    style={{
                      width: 400 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 1:
        return (
          <Card>
            <Card.Header
              title="2.您对自己的起床时间是否满意？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>满意</Checkbox>
                <Checkbox style={{margin: 6 * s}}>不满意</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.thirdshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.thirdxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 2:
        return (
          <Card>
            <Card.Header
              title="3.您起床后打算做什么开启一天的美好生活？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>吃早餐</Checkbox>
                <Checkbox style={{margin: 6 * s}}>瑜伽</Checkbox>
                <Checkbox style={{margin: 6 * s}}>收拾房间</Checkbox>
                <Checkbox style={{margin: 6 * s}}>欣赏音乐</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.thirdshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.thirdxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 3:
        return (
          <Card>
            <Card.Header
              title="4.来制定您的早起目标吧！"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <TextareaItem rows={6} count={100} style={{width: 600 * s}} />
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.thirdshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.thirdxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>完成</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 4:
        return (
          <View
            style={{
              width: 620 * s,
              height: 280 * s,
              borderRadius: 10 * s,
              backgroundColor: 'white',
              overflow: 'hidden',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  marginTop: 30 * s,
                  width: 425 * s,
                  height: 100 * s,
                  marginLeft: 30 * s,
                  borderBottomWidth: 1 * s,
                  borderColor: 'gray',
                }}>
                <Text style={{fontSize: 30 * s}}>您的早起计划</Text>
                <Text style={{fontSize: 25 * s}}> Early Rising</Text>
              </View>
              <Image
                source={require('../../assets/18.jpg')}
                style={{width: 150 * s, height: 150 * s}}
              />
            </View>
            <View
              style={{
                width: 550 * s,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View style={{width: 200 * s, height: 120 * s}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 40 * s}}>856</Text>
                  <Text
                    style={{
                      fontSize: 20 * s,
                      marginLeft: 10 * s,
                      color: '#f1f9f9',
                    }}>
                    Cal
                  </Text>
                </View>
                <Text>Get up</Text>
                <Progress
                  percent={50}
                  style={{marginTop: 10 * s, backgroundColor: 'white'}}
                />
              </View>
              <View style={{width: 200 * s, height: 120 * s}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                  <Text style={{fontSize: 40 * s}}>2.3</Text>
                  <Text
                    style={{
                      fontSize: 20 * s,
                      marginLeft: 10 * s,
                      color: '#f1f9f9',
                    }}>
                    L
                  </Text>
                </View>
                <Text>Water Intake</Text>
                <Progress
                  percent={80}
                  style={{marginTop: 10 * s, backgroundColor: 'white'}}
                  unfilled="false"
                />
              </View>
            </View>
          </View>
        );
      default:
        break;
    }
  }
  fourContent() {
    switch (this.state.fourView) {
      case 0:
        return (
          <Card>
            <Card.Header
              title="1.您跑步的目的是什么？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>锻炼身体</Checkbox>
                <Checkbox style={{margin: 6 * s}}>参加比赛</Checkbox>
                <Checkbox style={{margin: 6 * s}}>提高体育技能</Checkbox>
                <View style={{alignItems: 'center', marginTop: 50 * s}}>
                  <TouchableOpacity
                    onPress={() => this.fourxiayibu()}
                    style={{
                      width: 400 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 1:
        return (
          <Card>
            <Card.Header title="2.您想跑多远？" thumbStyle={{width: 100 * s}} />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Checkbox style={{margin: 6 * s}}>马拉松</Checkbox>
                <Checkbox style={{margin: 6 * s}}>半马拉松</Checkbox>
                <Checkbox style={{margin: 6 * s}}>10公里</Checkbox>
                <Checkbox style={{margin: 6 * s}}>5公里</Checkbox>
                <Checkbox style={{margin: 6 * s}}>10英里</Checkbox>
                <Checkbox style={{margin: 6 * s}}>5英里</Checkbox>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.fourshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.fourxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      下一步
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 2:
        return (
          <Card>
            <Card.Header
              title="3.您的目标用时是？"
              thumbStyle={{width: 100 * s}}
            />
            <Card.Body>
              <View style={{height: 640 * s, marginTop: 10 * s}}>
                <Provider>
                  <View>
                    <List>
                      <DatePicker
                        value={this.state.value}
                        mode="time"
                        onChange={this.onChange}
                        format="HH:mm">
                        <List.Item arrow="horizontal">
                          <Icon name="dashboard" />
                        </List.Item>
                      </DatePicker>
                    </List>
                  </View>
                </Provider>
                <Image source={require('../../assets/16.jpg')} />
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: 50 * s,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => this.fourshangyibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginRight: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>
                      上一步
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.fourxiayibu()}
                    style={{
                      width: 250 * s,
                      height: 70 * s,
                      backgroundColor: '#A7BCF0',
                      borderRadius: 4 * s,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 15 * s,
                    }}>
                    <Text style={{fontSize: 25 * s, color: 'white'}}>完成</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card.Body>
          </Card>
        );
      case 3:
        return (
          <View style={{height: 640 * s, marginTop: 10 * s}}>
            <ImageBackground
              source={require('../../assets/11.jpg')}
              style={{
                height: 300 * s,
                borderRadius: 10 * s,
                overflow: 'hidden',
              }}>
              <Text style={{fontSize: 25 * s}}>
                您已制定今日5公里的跑步计划
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{margin: 20 * s}}>
                  <Text style={{color: '#A7BCF0', fontSize: 20 * s}}>
                    预计用时
                  </Text>
                  <Text style={{fontSize: 25 * s}}> 40分钟</Text>
                </View>
                <View style={{margin: 20 * s}}>
                  <Text style={{color: '#A7BCF0', fontSize: 20 * s}}>配速</Text>
                  <Text style={{fontSize: 25 * s}}> 平均强度</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        );

      default:
        break;
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('use_id', (error, result) => {
      this.setState({userid: JSON.parse(result)});
    });
    console.log(this.state.userid);
  }
  textareaonChange(val) {
    this.setState({
      textareaval: val,
    });
  }
  mytijiao() {
    if (this.state.textareaval == '') {
      Alert.alert('提示', '您还没设置目标哦！');
    } else {
      fetch(`http://81.70.101.193:8005/get_phone/${this.state.userid}`)
        .then((res) => res.json())
        .then((res) => {
          var targetcontent = {
            id: res.data[0].use_id,
            username: res.data[0].use_name,
            maincontent: this.state.textareaval,
            wanchengbi: 0,
          };
          fetch('http://81.70.101.193:8006/wtarget', {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain; charset=UTF-8',
            },
            body: JSON.stringify(targetcontent),
          }).then(() => {
            Alert.alert('提示', '目标设置成功！');
          });
        });
    }
  }
  render() {
    return (
      <View style={{backgroundColor: '#F5F5F5'}}>
        <View
          style={{
            flexDirection: 'row',
            height: 72 * s,
            alignItems: 'center',
            backgroundColor: '#A7BCF0',
          }}>
          <TouchableOpacity onPress={() => Actions.pop(this.props.wmubiao())}>
            <Icon name="left" style={{color: 'black', marginLeft: 10 * s}} />
          </TouchableOpacity>
          <Text style={{fontSize: 27 * s, marginLeft: 220 * s}}>成长目标</Text>
          <Text></Text>
        </View>
        <View
          style={{
            height: 150 * s,
            marginLeft: 10 * s,
            marginRight: 10 * s,
            marginTop: 10 * s,
          }}>
          <Text style={{fontSize: 25 * s, marginBottom: 5 * s}}>
            自定义添加
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextareaItem
              rows={3}
              onChange={this.textareaonChange.bind(this)}
              placeholder="用最简洁的语言添加你的目标吧"
              count={100}
              style={{width: 550 * s, borderColor: 'gray', borderWidth: 1 * s}}
            />
            <TouchableOpacity onPress={this.mytijiao.bind(this)}>
              <Image
                source={require('../../assets/17.png')}
                style={{marginLeft: 15 * s, width: 50 * s, height: 50 * s}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{height: 865 * s, marginLeft: 10 * s, marginRight: 10 * s}}>
          <Text style={{fontSize: 25 * s, marginBottom: 5 * s}}>快速添加</Text>
          <Tabs
            tabs={tabs}
            renderTabBar={(tabProps) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
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
            <View>{this.firstContent()}</View>
            <View>{this.secondContent()}</View>
            <View>{this.threeContent()}</View>
            <View>{this.fourContent()}</View>
          </Tabs>
        </View>
      </View>
    );
  }
}
