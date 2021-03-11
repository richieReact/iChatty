import React, { useState, useEffect, useContext } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import useSportsMessages from '../hooks/useSportsMessages'
import { Context as UserContext } from '../context/UserContext'

const SportChatScreen = () => {
  const [sportsMessages, ids, getSportsMessages, randomId, setSportsMessages] = useSportsMessages()
  const { state: { username } } = useContext(UserContext)

  useEffect(() => {
    getSportsMessages()
    randomId()
  }, [])

  const onSend = (message) => {
    let userObject = message[0].user
    let txt = message[0].text
    console.log(message)
    setSportsMessages(previousMessages => GiftedChat.append(previousMessages, message))
    const messageObject = {
      text: txt,
      user: userObject
    }
    fetch("http://192.168.0.17:8000/api/sportsMessages", {
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
    <GiftedChat
      // isLoadingEarlier
      scrollToBottom
      infiniteScroll
      loadEarlier
      alwaysShowSend
      renderUsernameOnMessage
      inverted={true}
      showUserAvatar
      messages={sportsMessages}
      onSend={message => onSend(message)}
      user={{
        _id: ids,
        name: username,
        avatar: 'https://placeimg.com/140/140/any'
      }}
    />
  )
}

SportChatScreen.navigationOptions = () => {
  return {
    title: 'Sports Chat',
  }
}

const styles = StyleSheet.create({

})

export default SportChatScreen