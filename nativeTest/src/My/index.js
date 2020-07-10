/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */


import { createStackNavigator } from 'react-navigation-stack';
import MyScreen from './MyScreen';

const MyNav = createStackNavigator(
  {
    CompanyScreen: {
      screen: MyScreen,
    }
  },{
    defaultNavigationOptions:{
      headerTitleStyle: {
        color: 'white',
      },
      headerStyle: {
        backgroundColor: 'rgb(29,216,200)'
      }
    }
  }
)

export default MyNav;
