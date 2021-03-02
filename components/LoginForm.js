import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Input } from 'react-native-elements'

const LoginForm = ({ navigation, onSubmit }) => {
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

  const nameBiz = text => {
    setName(text)
    console.log(`${name}`)
  }

  return (
    <>
      <Input 
        value={name} 
        onChangeText={(text) => nameBiz(text)}
        label='Email' 
      />
      <Input 
        value={pass}
        onChangeText={(text) => setPass(text)}
        label='Password'
      />
      <Button title='Log In' onPress={onSubmit} />     
    </>
  )
}

const styles = StyleSheet.create({

})

export default LoginForm