/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */


import CompanyScreen from './CompanyScreen';
import CompanyDetail from './CompanyDetail';
import {createStackNavigator} from 'react-navigation-stack';

const CompanyNav = createStackNavigator(
  {
    CompanyScreen: {
      screen: CompanyScreen,
    },
    CompanyDetail: {
        screen: CompanyDetail
    }
  },
  {
    defaultNavigationOptions: {
        headerTitleStyle: {
            color: 'white',
        },
        headerStyle: {
            backgroundColor: 'rgb(29,216,200)'
        }
    }
  }
);

CompanyNav.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if(navigation.state.index > 0) { //判断几级页面
      tabBarVisible = false;
  }
  return {
      tabBarVisible,
  };
};

export default CompanyNav;





