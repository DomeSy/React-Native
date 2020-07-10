/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class MyScreen extends Component {
  static navigationOptions = {
    title: '我的'
  }

  componentDidMount = () => {
    this.fetchDate()
  }
  // RN网络编程
  fetchDate = () => {
    let url = `http://m.app.haosou.com/index/getData?type=1&page=1`;

    // fetch(url, {
      // method: 'POST',  //请求方式
      // headers: { //请求头
      // Accept: 'application/json',
      // 'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({  //POST下有请求体
      //   firstParam: 'yourValue',
      //   secondParam: 'yourOtherValue',
      // }),
    // })

    fetch(url).then((response) => response.json())
              .then((responseJSON) => {
                console.log(responseJSON)
              })
              .catch((err) => console.error(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>我的</Text>
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
