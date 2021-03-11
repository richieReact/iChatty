import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const TrumpScreen = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    fetch('https://api.tronalddump.io/random/quote')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.value)
        setQuote(data.value)
      })
  }, [])

  return (
    <>
      <View style={styles.container} >
        <Image 
          style={styles.pic}
          source={require('../assets/unnamed.jpg')}
        />
        <Text style={styles.quote} >{quote}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  quote: {
    fontSize: 30,
    margin: 30
  },
  pic: {
    height: 420,
    width: 420
  }
})

export default TrumpScreen