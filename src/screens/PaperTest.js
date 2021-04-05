import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Text, withTheme, useTheme } from 'react-native-paper'

const PaperTest = () => {
  const colors = useTheme()

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Test of React-Native-Paper
      </Text>
    </SafeAreaView>
  )
}

PaperTest.navigationOptions = () => {
  return {
    backgroundColor: 'grey'
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1
  }
})

export default withTheme(PaperTest)