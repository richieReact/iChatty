import { useState } from 'react'

export default () => {
  const [messages, setMessages] = useState([])
  const [ids, setIds] = useState([])

  const getMessages = async () => {
    await fetch("http://192.168.0.17:8000/api/messages", {
      method: "GET"
    }).then((res) => {
      console.log(res)
      return res.json()
    }).then((resJSON) => {
      const arrMsg = resJSON.reverse()
      setMessages(arrMsg)
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

  return [messages, ids, getMessages, randomId, setMessages]
}