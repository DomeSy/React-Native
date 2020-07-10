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
  SafeAreaView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Text,
  ActivityIndicator,
  Image,
  TextInput,
  Alert,
  FlatList,
  Dimensions,
  RefreshControl
} from 'react-native';
import jsonData from './city_list.json'

const { width } = Dimensions.get('window');

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataList: jsonData,
      // dataList: [], //模拟网络加载,
      loading: true, //设置loading
      isRefresh: false,  //控制刷新的状态
      loadMore: false, //是否加载更多
    }

    // this.fetchData(); //网络加载
  }

  fetchData = () => {
    setTimeout(()=>{
      this.setState({
        dataList:jsonData,
        loading: false
      })
    },3000);
  }

  renderListView = () => {
    return(
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
        <Button title='scrollPosition' onPress={()=>{
          // this.filtList.scrollToOffset({animated: true, offset:0})  //计算便宜了，自带动画，设置为0时可滑动到顶部
          this.filtList.scrollToEnd() //滑动到最后
          // this.filtList.scrollToIndex({viewPosition:0, index:0}) //滑动到顶部，不包括顶部视图
        }}/>
        {/* FlatList */}
        <FlatList
          ref={(filtList) => this.filtList= filtList} //ref
          style={{flex:1,backgroundColor:'#fff'}} // 样式
          data = {this.state.dataList}  //data:数组
          renderItem = {this.renderItem}
          // ListEmptyComponent: 如果列表没有显示的数据则会展示此时的数据
          ListFooterComponent = {this.renderListFooter} //尾部视图
          ListHeaderComponent = {this.renderListHeader}  //头部视图
          ItemSeparatorComponent = {()=>{  //行与行的分割线
            return <View style={{height:1, backgroundColor:'#999'}} />
          }}

          keyExtractor={this.keyExtractor}  //设置每一行的keyeven
          onScroll = {(event) => {
            let offsetY = event.nativeEvent.contentOffset.y; //y轴位置
            // console.log(offsetY)
          }} //监听滚动
          refreshControl= { //下拉刷新
            <RefreshControl 
              title= 'loading...' //标题
              tintColor= 'red'  //loading颜色
              titleColor = 'red'  //文字颜色
              refreshing={this.state.isRefresh} //控制刷星的状态
              onRefresh={()=>{
                this.setState({
                  isRefresh: true
                })
                setTimeout(()=>{
                  this.setState({
                    isRefresh: false
                  })
                },2000)
              }}
            /> //控件
          }
          onEndReached={()=>{  //滑动到最底部
            // console.log('onEndReached')
            this.setState({
              loadMore: true
            })
            setTimeout(() => {
              this.setState({
                loadMore:false
              })
            },2000)
          }}
          onEndReachedThreshold={0.1}
        >

        </FlatList>
      </SafeAreaView>
    )
  }

  renderLoadingView = () => {
    return (
      <View style={{justifyContent: 'center',alignItems:'center',flex:1,backgroundColor:'blue'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  renderItem = ({item, index}) =>{
    return (
      <TouchableHighlight onPress={() => {
        console.log(item)
      }}>
        <Text style={styles.itemStyle}>{item.name}</Text>
      </TouchableHighlight>
    )
  }

  renderListHeader = () => {
    return(
      <View style={styles.listHeader}>
        <Text>头部视图</Text>
      </View>
    )
  }

  // renderListFooter = () => {
  //   return(
  //     <View style={styles.listFooter}>
  //       <Text>尾部视图</Text>
  //     </View>
  //   )
  // }

  renderListFooter = () => {
    return(
      <View style={styles.listFooter}>
        {this.state.loadMore && <ActivityIndicator/>}
        <Text>
          {this.state.loadMore ? '加载更多' : '暂无更多数据'}
        </Text>
      </View>
    )
  }

  keyExtractor = (item, index) => {
    return "index" + index + item
  }

  render(){
    // if(!this.state.loading){
    //   return this.renderListView()
    // }else{
    //   return this.renderLoadingView()
    // }
    return this.renderListView()
  }
}

const styles = StyleSheet.create({
  itemStyle:{
    marginVertical: 20,
    marginLeft:10
  },
  listHeader:{
    width,
    height: 50,
    backgroundColor: 'blue',
    justifyContent:'center',
    alignItems: 'center',
  },
  listFooter:{
    width,
    height: 50,
    // backgroundColor: 'red',
    justifyContent:'center',
    alignItems: 'center',
  }
})
