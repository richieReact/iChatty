import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  console.log(state.errorMessage)

  return (
    <View style={styles.container} >
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