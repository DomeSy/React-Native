/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, {Component} from 'react';
import {
  View,
  Button
} from 'react-native';

export default class DetailScreen extends Component {

  // 设置标题
  // static navigationOptions = {
  //   title: '标题页'
  // }

  static navigationOptions = (props) => {
    const { navigation } = props;
    const { state: {params} } = navigation;
    // console.log(params,'---')
    return {
      title: params.title,
      headerBackTitle: ' ',
      headerRight: ( //设置右侧按钮
        <Button title='保存' onPress={()=>{
          // navigation.goBack() //返回上一层
          navigation.navigate('Third') //跳转到home
          // navigation.push('Home'); //向栈内中加入一个新页面
          // navigation.popToTop(); //回到最初的页面
        }}/>
      )
    }
  }

  componentWillMount(){
    console.log('componentWillMount')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  render() {
    return (
      <View style={{backgroundColor: 'red', flex: 1}}>
        
      </View>
    )
  }
}
