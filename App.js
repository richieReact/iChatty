import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import GiftedChat from './screens/GiftedChat'
import SportChatScreen from './screens/SportChatScreen'
import GamerChatScreen from './screens/GamerChatScreen'

const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  Chat: ChatScreen,
  Gifted: GiftedChat,
  Sports: SportChatScreen,
  Games: GamerChatScreen
  }, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'iChatty',
    headerStyle: {
      backgroundColor: '#fdf5e6'
    }
  }
}
);

export default createAppContainer(navigator);
