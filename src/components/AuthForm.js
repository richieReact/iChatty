import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, Button, Input } from 'react-native-elements'
import Spacer from './Spacer'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Spacer>
        <Text h3 style={styles.title} >{headerText}</Text>
      </Spacer>
      <Input 
        autoCapitalize='none'
        autoCorrect={false}
        label='Email'
        value={email}
        onChangeText={setEmail}
        inputStyle={{ color: 'white' }}
        labelStyle={{ color: 'white' }}
      />
      <Spacer />
      <Input 
        secureTextEntry
        autoCapitalize='none'
        autoCorrect={false}
        label='Password'
        value={password}
        onChangeText={setPassword}
        inputStyle={{ color: 'white' }}
        labelStyle={{ color: 'white' }}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage} >{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title={submitButtonText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  )
}

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  title: {
    color: 'white'
  }
})

export default AuthForm