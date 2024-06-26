import { useState } from 'react'
import { Flex } from '@chakra-ui/react'

import './App.css'
import SideBar from './components/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flex  w={"100%"} pos={'relative'}>
      <SideBar className="sidebar"/>
      </Flex>
    </>
  )
}

export default App
