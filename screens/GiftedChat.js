import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { GiftedChat as GChat } from 'react-native-gifted-chat'

const GiftedChat = () => {
  const [messages, setMessages] = useState('')

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

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({

})

export default GiftedChat