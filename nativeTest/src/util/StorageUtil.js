/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import { AsyncStorage } from 'react-native';

export default class StorageUtil {
  //存储数据
  static setData(keyName, keyData) {
    let promise = new Promise((resolve, reject) => {
        AsyncStorage.setItem(keyName, keyData, (error) => {
            if(error) {
                // console.log('存储失败了');
                return resolve('存储失败了');
            }else {
                // console.log('存储成功了');
                return resolve('存储成功了');
            }
        })
    })
    return promise;
  }

  //获取数据
  static getData(keyName) {
    let promise = new Promise((resolve, reject) => {
        AsyncStorage.getItem(keyName, (error, result) => {
            if(error) {
                return resolve('获取失败了');
            }else {
                return resolve(result);
            }
        })
    })
    return promise;
  }

  //删除数据
  static deleteData(keyName) {
    let promise = new Promise((resolve, reject) => {
        AsyncStorage.removeItem(keyName, (error) => {
            if(error) {
                return resolve('删除失败了');
            }else {
                return resolve('删除成功了');
            }
        })
        // AsyncStorage.getAllKeys
    })
    return promise;
  }
}