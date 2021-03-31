import React, { useState, useContext } from 'react'
import { StyleSheet} from 'react-native'
import { Input } from 'react-native-elements'

import { Context as UserContext } from '../context/UserContext'

const LoginForm = () => {
  const [username, setUsername] = useState([''])
  const { state, editUsername } = useContext(UserContext)

  return (
    <>
      <Input 
        value={username} 
        onChangeText={(text) => editUsername(text)}
        label='Input your monicker...' 
      />
    </>
  )
}

const styles = StyleSheet.create({

})

export default LoginForm