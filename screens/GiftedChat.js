import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { GiftedChat as GChat } from 'react-native-gifted-chat'

const GiftedChat = () => {
  const [messages, setMessages] = useState([])
  const [ids, setIds] = useState([])

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

  const randomId = () => {
    let rId = Math.random()
    setIds(rId)
  }

  useEffect(() => {
    getMessages()
    randomId()
  }, [])

  const onSend = (message) => {
    let userObject = message[0].user
    let txt = message[0].text
    console.log(message)
    setMessages(previousMessages => GChat.append(previousMessages, message))
    // GChat.append(messages, message)
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
      showUserAvatar
      messages={messages.reverse()}
      onSend={message => onSend(message)}
      user={{
        _id: ids,
        name: 'Richard',
        avatar: 'https://placeimg.com/140/140/any'
      }}
    />
  )
}

const styles = StyleSheet.create({

})

export default GiftedChat