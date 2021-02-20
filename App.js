import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'

const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  Chat: ChatScreen
  }, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'iChatty'
  }
}
);

export default createAppContainer(navigator);
