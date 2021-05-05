import React, { useEffect, useContext, useRef } from 'react'
import { StyleSheet } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import useSportsMessages from '../hooks/useSportsMessages'
import { Context as UserContext } from '../context/UserContext'

import io from 'socket.io-client'

const SportChatScreen = () => {
  const [sportsMessages, ids, getSportsMessages, randomId, setSportsMessages] = useSportsMessages()
  const { state: { username } } = useContext(UserContext)

  const socket = useRef()

  useEffect(() => {
    socket.current = io('http://192.168.0.6:8000')
    socket.current.on('send message', message => {
      setSportsMessages(previousMessages => GiftedChat.append(previousMessages, message))
    });
    getSportsMessages()
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
    fetch("http://192.168.0.6:8000/api/sportsMessages", {
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
      // loadEarlier
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