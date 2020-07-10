/* eslint-disable eslint-comments/no-unlimited-disable */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* eslint-disable */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,

} from 'react-native';

import {WebView} from 'react-native-webview'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      animating: false
    }
  }

  onButton = () => {
    this.setState({
      animating: !this.state.animating
    })
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containers}>
          {/* TouchableWithoutFeedback；点击无反馈 */}
          {/* <TouchableWithoutFeedback
            onPress={()=>{
              console.log('onPress')
            }}
            onPressIn={()=>{
              console.log('onPressIn')
            }}
            onPressOut={()=>{
              console.log('onPressOut')
            }}
            onLongPress={()=>{
              console.log('onLongPress')
            }}
          >
            <View style={styles.btn}>
              <Text>我是按钮</Text>
            </View>
          </TouchableWithoutFeedback> */}

        {/* TouchableHighlight： 高亮按钮 */}
          {/* <TouchableHighlight
            onPress={()=>{
              console.log('onpress')
            }}
            underlayColor='red'
            activeOpacity={0.9}
          >
            <Text>按钮</Text>
          </TouchableHighlight>
        </View> */}

          {/* TouchableOpacity: 透明度 */}
          {/* <TouchableOpacity
            onPress={()=>{
              console.log('onpress')
            }}
            activeOpacity={0.9}
          >
            <Text>TouchableOpacity</Text>
          </TouchableOpacity> */}

          {/* <Button title="点击我呀" color="blue" onPress={()=>{
            console.log('Button');
            this.setState({
              animating: !this.state.animating
            })
          }} /> */}
          {/* <Button title="点击我呀" color="blue" onPress={this.onButton} /> */}

          {/* ActivityIndicator: loading框 */}
          {/* <ActivityIndicator size='large' color='red' animating={this.state.animating}>
          </ActivityIndicator> */}

          {/* 本地图片 */}
          {/* <Image source={require('./imgs/log.jpg')}/> */}

          {/* 网络图片 需要加宽和高 */}
          {/* <Image
            style={{width: 200, height: 200}}
            //⽹络和 base64 数据的图⽚需要⼿动指定尺⼨
            source={{uri: 'https://upload.jianshu.io/users/upload_avatars/15251376/d9660eee-83a0-4f5b-a03d-9c583e878349.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'}}
          /> */}

          {/* <TextInput 
            style={styles.textInput}   // 样式
            // value={'哈哈哈'}         // 默认value
            placeholder={'请输入密码'}   // 提示语
            placeholderTextColor={'blue'}  //提示语颜色
            // secureTextEntry={true}     // 如果是密码之类看不见的话为密码模式，默认为false
            // keyboardType={'number-pad'}  //拉起键盘的样式
            clearButtonMode='while-editing' //编辑工具中出现*

            returnKeyType={'go'}  //更改返回值
            onChangeText={(text) => {    //时间改变
              console.log(text)
            }}
            onSubmitEditing={(event) => {
              const { nativeEvent: {text}} = event;
              Alert.alert(text,'aaa',[
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ],
              { cancelable: false })
            }}
          /> */}

          <WebView source={{uri: 'https://github.com/'}} />
        </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn:{
    width: 80,
    height: 50,
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2
  },
  textInput:{ 
    width: 375,
    marginHorizontal: 20,
    marginTop: 50,
    height: 30,
    borderColor: 'red',
    borderWidth: 1
  }
})