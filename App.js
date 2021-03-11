import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import GeneralChat from './screens/GeneralChat'
import SportChatScreen from './screens/SportChatScreen'
import GamerChatScreen from './screens/GamerChatScreen'
import TrumpScreen from './screens/TrumpScreen'

import { Provider as UserProvider } from './context/UserContext'

const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  General: GeneralChat,
  Sports: SportChatScreen,
  Games: GamerChatScreen,
  Trump: TrumpScreen
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

const App = createAppContainer(navigator);

export default () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  )
}
