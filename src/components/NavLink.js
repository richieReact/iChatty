import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity 
      style={styles.navi}
      onPress={() => navigation.navigate(routeName)} >
      <Text>{text}</Text>
    </TouchableOpacity> 
  )
}

const styles = StyleSheet.create({
  navi: {
    alignItems: 'center'
  }
})

export default withNavigation(NavLink)