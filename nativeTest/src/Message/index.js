/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */


import { createStackNavigator } from 'react-navigation-stack';
import MessageScreen from './MessageScreen';

const MessageNav = createStackNavigator(
  {
    CompanyScreen: {
      screen: MessageScreen,
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

export default MessageNav;
