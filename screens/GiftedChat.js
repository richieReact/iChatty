import React, { useState, useEffect,useCallback } from 'react'
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

  const onSend = (message) => {
    let userObject = message[0].user
    let txt = message[0].text

    console.log(message)
    setMessages(previousMessages => GChat.append(previousMessages, message))

    const messageObject = {
      text: txt,
      user: userObject
    }

    fetch("http://192.168.0.17:8000/api/messages", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(messageObject)
      }).then((res) => {
          return res.json();
      }).catch((err) => {
          console.log(err);
      });
  }
  

  return (
    <GChat
      messages={messages}
      onSend={message => onSend(message)}
      user={{
        _id: 1,
      }}
    />
  )
}

const styles = StyleSheet.create({

})

export default GiftedChat