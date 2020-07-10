/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import AsyncStorage from "@react-native-community/async-storage";

export default class DataStore { 
  static checkTimestampValid(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setTime(timestamp);

    if (currentDate.getMonth() !== targetDate.getMonth()) return false;
    if (currentDate.getDate() !== targetDate.getDate()) return false;
    if (currentDate.getHours() - targetDate.getHours() > 4) return false; //有效期4个⼩时
    // if (currentDate.getMinutes() - targetDate.getMinutes() > 1)returnfalse;
    return true;
  }

  fetchData(url) {
    return new Promise((resolve, reject) => {
    //获取本地数据
    this.fetchLocalData(url)
        .then(wrapdata => {
          //检查有效期
          if (wrapdata && DataStore.checkTimestampValid(wrapdata.timestamp)) {
            resolve(wrapdata);
          } else {
          //获取⽹络数据
            this.fetchNetData(url).then(data => {
              //给数据打个时间戳
              resolve(this._wrapData(data));
            })
            .catch(e => {
              reject(e);
            });
          }
       })
        .catch(error => {
          this.fetchNetData(url)
          .then(data => {
            resolve(this._wrapData(data));
          })
          .catch(error => {
            reject(error);
          });
        });
    });
  }
  saveData(url, data, callback) {
    if (!data || !url) return;
      
    AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data)), callback);
  }
  
  _wrapData(data) {
    return { 
      data: data, timestamp: new Date().getTime()
    }; //本地时间，推荐服务器时间
  }
    
  fetchLocalData(url) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(url, (err, result) => {
        if (!err) {
          resolve(JSON.parse(result)); // getItem获取到的是string，我们需要将其反序列化为object
        } else {
          reject(err);
          console.log(err);
        }
      });
    });
  }

  fetchNetData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("network response was not ok");
        })
        .then(responseData => {
          this.saveData(url, responseData);
          resolve(responseData);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}