import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import GiftedChat from './screens/GiftedChat'

const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  Chat: ChatScreen,
  Gifted: GiftedChat
  }, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'iChatty'
  }
}
);

export default createAppContainer(navigator);
