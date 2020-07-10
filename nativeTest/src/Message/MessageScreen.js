/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class MessageScreen extends Component {
  static navigationOptions = {
    title: '消息'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>消息</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
