import React, { useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import useMessages from '../hooks/useMessages'

const ChatScreen = () => {
  const [messages, ids, getMessages, randomId] = useMessages()

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        scrollToBottom
        data={messages}
        // keyExtractor={(text) => text}
        renderItem={({ item }) => {
          return (
              // <View style={styles.hmm}>
                <Text style={styles.text}>{item.text}</Text>
              // {/* </View>  */}
            )
          }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 2,
    alignSelf: 'flex-start',
    flexDirection: 'column',
    marginBottom: 100,
    flexWrap: 'wrap'
  },
  text: {
    alignItems: 'flex-start',
    borderColor: 'blue',
    borderWidth: 2,
    justifyContent: 'flex-start'
  }
})

export default ChatScreen