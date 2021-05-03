import { useState } from 'react'

export default () => {
  const [sportsMessages, setSportsMessages] = useState([])
  const [ids, setIds] = useState([])

  const getSportsMessages = async () => {
    await fetch("http://192.168.0.6:8000/api/sportsMessages", {
      method: "GET"
    }).then((res) => {
      console.log(res)
      return res.json()
    }).then((resJSON) => {
      const arrMsg = resJSON.reverse()
      setSportsMessages(arrMsg)
    }).then(() => {
      // I need to go around and clean up stuff like this since these things are correct
      console.log({sportsMessages})
    }).catch((err) => {
      console.log(err)
    });
  }

  const randomId = () => {
    let rId = Math.random()
    setIds(rId)
  }

  return [sportsMessages, ids, getSportsMessages, randomId, setSportsMessages]
}