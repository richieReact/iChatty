import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const LoginForm = ({ navigation, onSubmit }) => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const nameBiz = text => {
    setName(text)
    console.log(`${name}`)
  }

  return (
    <View>
      <TextInput 
        style={styles.input}
        value={name} 
        onChangeText={(text) => nameBiz(text)}
        placeholder={'Your name...'}   />
      <TextInput 
        style={styles.input}
        value={pass}
        onChangeText={(text) => setPass(text)}
        placeholder={'Your pass...'}
      />
      <Button title='Log In' onPress={onSubmit} />
      
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    width: 300
  }
})

export default LoginForm