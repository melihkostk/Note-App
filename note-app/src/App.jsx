import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import React from 'react'

function App() {

  const [flexDir, setFlexDir] = React.useState(true);
  const [sidebarShown, setSidebarShown] = React.useState(true);
  const [notes, setNotes] = React.useState([])
  const [img, setImg] = React.useState("")

  return (
    <>
      <Header setFlexDir={setFlexDir} setSidebarShown={setSidebarShown} notes={notes} />
      <div className='flex'>
        <Sidebar sidebarShown={sidebarShown} />
        <div className='w-full flex flex-col items-start'>
          <Content flexDir={flexDir} setNotes={setNotes} notes={notes} img={img} setImg={setImg} />
        </div>
      </div>
    </>
  )
}

export default App
