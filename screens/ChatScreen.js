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
    <View>
      <FlatList
        scrollToBottom
        data={messages}
        renderItem={({ item }) => {
          return <Text>{item.body}</Text>
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ChatScreen