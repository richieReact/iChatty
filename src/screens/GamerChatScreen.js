import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { GiftedChat } from 'react-native-gifted-chat'
import useGamerMessages from '../hooks/useGamerMessages'
import { Context as UserContext } from '../context/UserContext'

const GamerChatScreen = () => {
  const [gamerMessages, ids, getGamerMessages, randomId, setGamerMessages] = useGamerMessages()
  const { state: { username } } = useContext(UserContext)

  useEffect(() => {
    getGamerMessages()
    randomId()
  }, [])

  const onSend = (message) => {
    let userObject = message[0].user
    let txt = message[0].text
    console.log(message)
    setGamerMessages(previousMessages => GiftedChat.append(previousMessages, message))
    const messageObject = {
      text: txt,
      user: userObject
    }
    fetch("http://192.168.0.17:8000/api/gamerMessages", {
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
      messages={gamerMessages}
      onSend={message => onSend(message)}
      user={{
        _id: ids,
        name: username,
        avatar: 'https://placeimg.com/140/140/any'
      }}
    />
  )
}


GamerChatScreen.navigationOptions = () => {
  return {
    title: 'Gamer Chat',
  }
}

const styles = StyleSheet.create({

})

export default GamerChatScreen