import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import React from 'react'

function App() {

  const [flexDir, setFlexDir] = React.useState("row")

  return (
    <>
      <Header />
      <div className='flex'>
        <Sidebar />
        <div className='w-full flex flex-col items-start'>
          <Content />
        </div>
      </div>
    </>
  )
}

export default App
