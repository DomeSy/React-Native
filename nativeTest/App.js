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
import React, {Component} from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import AppNavigator from './src';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        {/* StatusBar用于控制状态栏，包括颜色，动画效果，显示和隐藏等。 */}
        <StatusBar barStyle='dark-content' />
        <AppNavigator />
      </View>
    )
  }
}
