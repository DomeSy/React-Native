/* eslint-disable eslint-comments/no-unlimited-disable */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* eslint-disable */
// 列表

// 创建底部导航
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Job from './Home/index';
import Company from './Company/index';
import Message from './Message/index';
import My from './My/index';
import Icon from 'react-native-vector-icons/FontAwesome';
import WelcomePage from './Welcome';

// 每一个模块都是通过栈来管理的，并且相互独立，互不影响
let TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Job,
      navigationOptions:{
        // title: '职位'
        tabBarLabel: '职位',  // title也可以 ,最好是tabBarLabel，为空时默认为key，即 Home
        // tabBarIcon: 返回个组件之类的
        // tabBarIcon 设置字体
      }
    },
    Company: {
      screen: Company,
      navigationOptions:{
        // title: '职位'
        tabBarLabel: '公司',  
      }
    },
    Message: {
      screen: Message,
      navigationOptions:{
        // title: '职位'
        tabBarLabel: '消息',  
      }
    },
    My: {
      screen: My,
      navigationOptions:{
        // title: '职位'
        tabBarLabel: '我的'  
      }
    }
  },
  {  //设置默认
    initialRouteName: 'My',  // 设置默认的标签
    // order: ['Message','My', 'Home', 'Company' ]  //可设置默认的Tab选项位置为数组，当然一般不用设置
    defaultNavigationOptions:({navigation}) => ({ //设置默认导航栏的样式
      tabBarIcon: ({focused, tintColor, horizontal}) => {
        // console.log(navigation)
        const { routeName } = navigation.state;
        let iconName;
        if(routeName == 'Home'){
          iconName = 'globe';
        }else if(routeName == 'Company'){
          iconName = 'building-o';
        }else if(routeName == 'Message'){
          iconName = 'comments-o';
        }else if(routeName == 'My'){
          iconName = 'user-circle-o';
        }
        // 分别是 是否选中状态， 显示的颜色， 是否水平（应为垂直和水平不一样）
        return <Icon name={iconName} size={20} color={tintColor}/>
      }
     
    }), 
    tabBarOptions:{  //设置导航栏的一些样式
      // showLabel: false //隐藏标题的名字，默认为true，但实际上还是可以点
      activeTintColor: 'rgba(29, 216, 200, 1)', //选中字体的颜色
      inactiveTintColor: 'gray', //未选中的字体颜色
    }
  }
)
 
const AppInitNav = createStackNavigator({
  welcome: {  //欢迎页面 
    
    screen: WelcomePage,
    navigationOptions:{  //设置头部为空
      header: null
    }
  }
})

const swtichNavigator = createSwitchNavigator({
  Init: AppInitNav,
  Main: TabNavigator
})

const AppNavigator = createAppContainer(swtichNavigator);

export default AppNavigator;
