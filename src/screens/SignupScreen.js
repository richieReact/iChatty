import React, { useContext } from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import Logo from '../components/Logo'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  console.log(state.errorMessage)
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
    </ImageBackground>
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
  },
  image: {
    height: '100%',
    width: '100%'
  }
})

export default SignupScreen