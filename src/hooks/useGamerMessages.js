import { useState } from 'react'

export default () => {
  const [gamerMessages, setGamerMessages] = useState([])
  const [ids, setIds] = useState([])

  const getGamerMessages = async () => {
    await fetch("http://192.168.0.17:8000/api/gamerMessages", {
      method: "GET"
    }).then((res) => {
      console.log(res)
      return res.json()
    }).then((resJSON) => {
      const arrMsg = resJSON.reverse()
      setGamerMessages(arrMsg)
    }).then(() => {
      console.log({gamerMessages})
    }).catch((err) => {
      console.log(err)
    });
  }

  const randomId = () => {
    let rId = Math.random()
    setIds(rId)
  }

  return [gamerMessages, ids, getGamerMessages, randomId, setGamerMessages]
}