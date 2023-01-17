import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get(
        'https://api.stackexchange.com/2.3/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&page=1&pagesize=10&order=desc&sort=activity&filter=default'
      )
      .then((res) => {
        console.log('res', res)
      })
  }, [])

  useEffect(() => {
    axios
      .get(
        'https://api.stackexchange.com/2.3/tags?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=popular&filter=default'
      )
      .then((res) => {
        console.log('帧的嘛', res)
      })
  }, [])

  return (
    <div className='App'>
      <div>123</div>
    </div>
  )
}

export default App
