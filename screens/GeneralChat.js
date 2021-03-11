import React, { useState, useEffect, useContext } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import useMessages from '../hooks/useMessages'
import { Context as UserContext } from '../context/UserContext'

import { GiftedChat as GChat } from 'react-native-gifted-chat'

const GeneralChat = () => {
  const [messages, ids, getMessages, randomId, setMessages] = useMessages()
  const { state: { username } } = useContext(UserContext)

  useEffect(() => {
    getMessages()
    randomId()
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
      // isLoadingEarlier
      scrollToBottom
      infiniteScroll
      loadEarlier
      alwaysShowSend
      renderUsernameOnMessage
      inverted={true}
      showUserAvatar
      messages={messages}
      onSend={message => onSend(message)}
      user={{
        _id: ids,
        name: username,
        avatar: 'https://placeimg.com/140/140/any'
      }}
    />
  )
}

GeneralChat.navigationOptions = () => {
  return {
    title: 'General Chat',
  }
}

const styles = StyleSheet.create({

})

export default GeneralChat