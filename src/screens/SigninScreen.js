import React, { useContext } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'
import Logo from '../components/Logo'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)

  const image = { uri: "https://preview.redd.it/hqkgw0cek1x61.jpg?width=640&crop=smart&auto=webp&s=6f47a84709b7ddc26a1a2fa991a8df013b58356f" }

  return (
    <ImageBackground
      source={image}
      style={styles.image}
    >
    <View style={styles.container} >
      <Logo />
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm 
        headerText='Sign In to your Account'
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText='Sign in'
      />
      <NavLink 
        text='Dont have an account? Sign up instead'
        routeName='Signup'
      />
    </View>
    </ImageBackground>
  )
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

export default SigninScreen