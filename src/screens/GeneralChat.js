import React, { useEffect, useContext, useRef } from 'react'
import { StyleSheet } from 'react-native'

import io from 'socket.io-client'

import useMessages from '../hooks/useMessages'
import { Context as UserContext } from '../context/UserContext'
import { GiftedChat as GChat } from 'react-native-gifted-chat'

const GeneralChat = () => {
  const [messages, ids, getMessages, randomId, setMessages] = useMessages()
  const { state: { username } } = useContext(UserContext)

  const socket = useRef()

  useEffect(() => {
    socket.current = io('http://192.168.0.6:8000')
    socket.current.on('send message', message => {
      setMessages(previousMessages => GChat.append(previousMessages, message))
    });
    getMessages()
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
    fetch("http://192.168.0.6:8000/api/messages", {
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
    headerStyle: {
      backgroundColor: 'grey'
    }
  }
}

const styles = StyleSheet.create({

})

export default GeneralChat