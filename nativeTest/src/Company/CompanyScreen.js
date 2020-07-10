/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';

import { companyList } from '../data';
const wWidth = Dimensions.get('window').width;

export default class CompanyScreen extends Component {
  static navigationOptions = {
    title: '公司'
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      contentList: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
        contentList: companyList.list,
      });
    }, 1000);
  }

  handlePress = item => event => {
    this.props.navigation.navigate('CompanyDetail', {company: item});
  };

  renderItem = ({item, index, separators}) => {
    // console.log('item', item, index);
    return (
      <TouchableHighlight
        style={styles.itemContent}
        key={`item_${item.name}_${index}`}
        onPress={this.handlePress(item)}>
        <View>
          <View style={styles.pNameContent}>
            <ImageBackground style={styles.pImage} source={{uri: item.logo}} />
            <Text style={styles.pName}>{`${item.location}`}</Text>
            <Text style={styles.pSalary}>{`|${item.type}\n|${item.size}\n|${item.employee}`}</Text>
          </View>
          <View style={styles.pLine} />
          <Text style={styles.pHr}>{`热招：${item.hot} 等${item.count}个职位`}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  keyExtractor = (item, index) => {
    return `default_${item.name}_${index}`
    
  }

  renderListEmptyComponent = () => {
    return (
      <View style={styles.emptyContent}>
        <Text style={{fontSize: 16}}>暂无数据下拉刷新</Text>
      </View>
    );
  }

  render() {
    const {isLoading, contentList} = this.state;

    return (
      <View style={styles.container}>
        {
          isLoading ? (
            <ActivityIndicator animating={true} color="blue" size="large" />
          ) : (
            <FlatList 
              style={styles.contentList}
              contentContainerStyle={{paddingTop: 0 }} //设置内边距的值
              data={contentList}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={({highlighted}) => (
                <View style={styles.separator} />
              )}
              ListEmptyComponent={this.renderListEmptyComponent} //如果时空数据的时候
              initialNumToRender={8}
            />  
          )
        }
        
      </View>
    )
  }
}

const ITEM_HEIGHT = 130;
const SEPERATOR_HEIGHT = StyleSheet.hairlineWidth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContent: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentList: {
    width: wWidth,
    flex: 1,
    backgroundColor: 'rgb(241,242,246)',
  },
  separator: {
    height: 5,
    alignSelf: 'stretch',
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    height: ITEM_HEIGHT,
    backgroundColor: 'white',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pImage: {
    width: 40,
    height: 40,
  },
  pNameContent: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },
  pName: {
    fontSize: 12,
  },
  pSalary: {
    textAlignVertical: 'center',
    fontSize: 16,
    color: 'grey',
  },
  pLine: {
    marginTop: 10,
    height: SEPERATOR_HEIGHT,
    backgroundColor: '#e0e0e0',
  },
  pHr: {
    marginTop: 10,
    height: 20,
    fontSize: 12,
    color: 'rgb(29,216,200)',
  },
});
