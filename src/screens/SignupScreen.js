import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Logo from '../components/Logo'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  console.log(state.errorMessage)

  return (
    <View style={styles.container} >
      <Logo />
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm 
        headerText='Sign up'
        errorMessage={state.errorMessage}
        submitButtonText='Sign up'
        onSubmit={signup}
      />
      <NavLink 
        routeName='Signin'
        text='Already have an account? Sign in instead'
      />
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
})

export default SignupScreen