/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, {Component} from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';

export default class ThirdScreen extends Component {

  componentDidMount(){
    // 并且可以拿到值
    // 监听界面将要出现
    this.viewWillApper = this.props.navigation.addListener(
      'willFocus', obj => {  //可以监听到点下按钮那一刻的数据
        console.log(obj,'willFocus')
      }
    );

    // 监听界面已经出现
    this.viewDidApper = this.props.navigation.addListener(
      'didFocus', obj => {  //可以监听到点下按钮那一刻的数据
        console.log(obj,'didFocus')
      }
    );

    //监听界面将要失去焦点
    this.viewWillDisappear = this.props.navigation.addListener(
      'willBlur', obj => {
          console.log('willBlur', obj);
      }
  );

  //监听界面已经失去焦点
  this.viewDidDisappear = this.props.navigation.addListener(
      'didBlur', obj => {
          console.log('didBlur', obj);
      }
  );
  }

  render() {
    return (
      <View style={{backgroundColor: 'green', flex: 1}}>
        <Button title='按钮' onPress={()=>{
          // this.props.navigation.navigate('Home')
          this.props.navigation.popToTop(); //回到最初的页面
        }}/>
      </View>
    )
  }

  // 在卸载的时候应该移除监听
  componentWillUnmount(){
    this.viewWillApper.remove();
    this.viewDidApper.remove();
    this.viewWillDisappear.remove();
    this.viewDidDisappear.remove();
  }
}