import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Logo = () => {
  return <Text style={styles.logo}>Chatty</Text>
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 85,
    alignItems: 'center',
    marginLeft: 80,
    marginBottom: 40,
    color: 'white',
  },
})

export default Logo
