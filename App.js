import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './src/screens/HomeScreen'
import GeneralChat from './src/screens/GeneralChat'
import SportChatScreen from './src/screens/SportChatScreen'
import GamerChatScreen from './src/screens/GamerChatScreen'
import TrumpScreen from './src/screens/TrumpScreen'

import { Provider as UserProvider } from './src/context/UserContext'

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
