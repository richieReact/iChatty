import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import LoginForm from '../components/LoginForm'
import { Context as AuthContext } from '../context/AuthContext'

const HomeScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>Chatty</Text>
      <LoginForm />
      <Button 
        title='General Chat'
        onPress={() => navigation.navigate('General')}
      />
      <Button 
        title='Sports Chat'
        onPress={() => navigation.navigate('Sports')}
      />
      <Button 
        title='Gamer Chat'
        onPress={() => navigation.navigate('Games')}
      />
      <Button 
        title='Stupid Trump quotes'
        onPress={() => navigation.navigate('Trump')}
      />
      <Button title='Sign out' onPress={signout} />
      <Button title='RN Paper Test' onPress={() => navigation.navigate('Paper')} />
    </SafeAreaView>
  )
}

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: '#fdf5e6'
  },
  title: {
    fontSize: 85,
    marginTop: 80,
    marginBottom: 60
  }
})

export default HomeScreen