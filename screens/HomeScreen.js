import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import LoginForm from '../components/LoginForm'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text>Home Screen</Text>
      <LoginForm 
        onSubmit={() => navigation.navigate('Chat')}
      />
      <Button 
        title='To the Gifted Chat Demo'
        onPress={() => navigation.navigate('Gifted')}
      />
    </View>
  )
}

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 200
  }
})

export default HomeScreen