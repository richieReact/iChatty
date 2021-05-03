import React, { useEffect, useContext, useRef } from 'react'
import { StyleSheet } from 'react-native'

import io from 'socket.io-client'

import useMessages from '../hooks/useMessages'
import { Context as UserContext } from '../context/UserContext'
import { GiftedChat as GChat } from 'react-native-gifted-chat'

const GeneralChat = () => {
  const [messages, ids, getMessages, randomId, setMessages] = useMessages()
  const { state: { username } } = useContext(UserContext)

  const socketRef = useRef()
  // GamerChat has the correct implication of all this socket stuff
  socketRef.current = io('http://192.168.0.6:8000')

  useEffect(() => {
    getMessages()
    randomId()
    // Fix all this shit
    const socket = io('http://192.168.0.6:8000')
    socket.on('your id', id => {
      console.log(id)
    })
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
    socketRef.current.emit('send message', messageObject)
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
  }
}

const styles = StyleSheet.create({

})

export default GeneralChat