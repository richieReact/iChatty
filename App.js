import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import HomeScreen from './src/screens/HomeScreen'
import GeneralChat from './src/screens/GeneralChat'
import SportChatScreen from './src/screens/SportChatScreen'
import GamerChatScreen from './src/screens/GamerChatScreen'
import TrumpScreen from './src/screens/TrumpScreen'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen'
import SignupScreen from './src/screens/SignupScreen'
import SigninScreen from './src/screens/SigninScreen'

import { Provider as UserProvider } from './src/context/UserContext'
import { Provider as AuthProvider } from './src/context/AuthContext'
import { setNavigator } from './src/navigationRef'


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createStackNavigator({
    Home: HomeScreen,
    General: GeneralChat,
    Sports: SportChatScreen,
    Games: GamerChatScreen,
    Trump: TrumpScreen
  })
  }, {
  initialRouteName: 'ResolveAuth',
  defaultNavigationOptions: {
    title: 'Chatty',
    headerStyle: {
      backgroundColor: '#fdf5e6'
    },
    tabBarOptions: {
      backgroundColor: 'grey',
      activeTintColor: 'red'
    }
  }
}
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
    <UserProvider>
      <App ref={(navigator) => {
        setNavigator(navigator)
        }} 
      />
    </UserProvider>
    </AuthProvider>
  )
}
