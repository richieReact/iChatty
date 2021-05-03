import React, { useEffect, useContext, useRef } from 'react'
import { StyleSheet } from 'react-native'
import io from 'socket.io-client'

import { GiftedChat } from 'react-native-gifted-chat'
import useGamerMessages from '../hooks/useGamerMessages'
import { Context as UserContext } from '../context/UserContext'

const GamerChatScreen = () => {
  const [gamerMessages, ids, getGamerMessages, randomId, setGamerMessages] = useGamerMessages()
  const { state: { username } } = useContext(UserContext)

  const socket = useRef(null)

  useEffect(() => {
    socket.current = io('http://192.168.0.6:8000')
    socket.current.on('send message', message => {
      setGamerMessages(previousMessages => GiftedChat.append(previousMessages, message))
    });
    getGamerMessages()
    randomId()
  }, [])

  const onSend = (message) => {
    let userObject = message[0].user
    let txt = message[0].text
    socket.current.emit('send message', message[0])

    const messageObject = {
      text: txt,
      user: userObject
    }
    fetch("http://192.168.0.6:8000/api/gamerMessages", {
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