import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import axios from 'axios'

import { GiftedChat } from 'react-native-gifted-chat'
import { FlatList } from 'react-native'

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  // const onSend = useCallback((messages = []) => {
  //   setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  //   console.log(messages)
  // }, [])

  const getMessages = async () => {
    const response = await fetch("http://192.168.0.17:8000/api/messages", {
      method: "GET"
    }).then((res) => {
      console.log(res)
      return res.json()
    }).then((resJSON) => {
      setMessages(resJSON.concat())
    }).then(() => {
      console.log({messages})
    }).catch((err) => {
      console.log(err)
    });
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        scrollToBottom
        data={messages}
        // keyExtractor={(id) => id}
        renderItem={({ item }) => {
          return (
              <View style={styles.hmm} >
                <Text style={styles.text}>{item.body}</Text>
              </View> 
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
  },
  hmm: {
    borderColor: 'black',
    borderWidth: 2
  }
})

export default ChatScreen