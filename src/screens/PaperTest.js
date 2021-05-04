import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Text, withTheme, useTheme } from 'react-native-paper'

const PaperTest = ({ theme }) => {
  const { colors } = theme

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.theme, }]}>
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
    flex: 1,
    alignItems: 'center',
    alignContent: 'center'
  }
})

export default withTheme(PaperTest)