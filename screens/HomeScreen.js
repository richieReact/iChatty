import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import LoginForm from '../components/LoginForm'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Chatty</Text>
      <LoginForm 
        onSubmit={() => navigation.navigate('Chat')}
      />
      <Button 
        title='General Chat'
        onPress={() => navigation.navigate('Gifted')}
      />
      <Button 
        title='Sports Chat'
        onPress={() => navigation.navigate('Sports')}
      />
      <Button 
        title='Gamer Chat'
        onPress={() => navigation.navigate('Games')}
      />
    </View>
  )
}

HomeScreen.navigationOptions = () => {
  return {
    headerShown: true,
    title: 'The chatty app...'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fdf5e6'
  },
  title: {
    fontSize: 85,
    marginBottom: 80
  }
})

export default HomeScreen