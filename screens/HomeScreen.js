import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LoginForm from '../components/LoginForm'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text>Home Screen</Text>
      <LoginForm 
        onSubmit={() => navigation.navigate('Chat')}
      />
    </View>
  )
}

// HomeScreen.navigationOptions = () => {
//   return {
//     header: () => false
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100
  }
})

export default HomeScreen