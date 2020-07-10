/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, {Component} from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'blue', flex: 1}}>
        <Button title='跳转到详情' style={styles.button} onPress={() => {
          // console.log(this.props)
          this.props.navigation.navigate('Detail',{
            title: '我是传递的数据'
          }); //跳转
        }} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  button: {
   
    
  }
})
