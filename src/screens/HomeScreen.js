import React, { useContext } from 'react'
import { Text, StyleSheet, SafeAreaView, ImageBackground, View } from 'react-native'
import LoginForm from '../components/LoginForm'
import { Context as AuthContext } from '../context/AuthContext'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const HomeScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext)

  const image = { uri: "https://preview.redd.it/9uzuu7kldww61.jpg?width=640&crop=smart&auto=webp&s=f220fb3ddba8a785b889ef7fbe75d539117b53ed" }

  return (
    <ImageBackground source={image} style={styles.image}>
    <SafeAreaView style={styles.container} >
      <Text style={styles.title}>Chatty</Text>
      <LoginForm />
      <Button 
        title='General Chat'
        onPress={() => navigation.navigate('General')}
        raised
        type='outline'
      />
      <Spacer />
      <Button 
        title='Sports Chat'
        onPress={() => navigation.navigate('Sports')}
        raised
        type='outline'
      />
      <Spacer />
      <Button 
        title='Gamer Chat'
        onPress={() => navigation.navigate('Games')}
        raised
        type='outline'
      />
      <Spacer />
      <Button 
        title='Stupid Trump quotes'
        onPress={() => navigation.navigate('Trump')}
        raised     
        type='outline'
      />
      <Spacer />
      <Button title='Sign out' onPress={signout} raised />
    </SafeAreaView>
    </ImageBackground>
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
    fontSize: 100,
    marginTop: 80,
    marginBottom: 60,
    color: 'white',
    fontFamily: 'AlNile-Bold'
  },
  image: {
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
    justifyContent: 'center'
  }
})

export default HomeScreen