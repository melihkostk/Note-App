import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import React from 'react'

function App() {

  const [flexDir, setFlexDir] = React.useState(true)

  return (
    <>
      <Header setFlexDir={setFlexDir} />
      <div className='flex'>
        <Sidebar />
        <div className='w-full flex flex-col items-start'>
          <Content flexDir={flexDir} />
        </div>
      </div>
    </>
  )
}

export default App
