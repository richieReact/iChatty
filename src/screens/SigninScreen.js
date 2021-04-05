import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context } from '../context/AuthContext'
import Logo from '../components/Logo'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(Context)

  return (
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
  }
})

export default SigninScreen