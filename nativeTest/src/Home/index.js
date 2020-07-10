/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */


import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const HomeNav = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
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

export default HomeNav;
