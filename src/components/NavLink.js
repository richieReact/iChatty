import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity 
      style={styles.navi}
      onPress={() => navigation.navigate(routeName)} >
      <Text style={styles.text} >{text}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  navi: {
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
})

export default withNavigation(NavLink)