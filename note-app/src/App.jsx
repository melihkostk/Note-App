import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import closeIcon from './assets/close.png'
import React from 'react'

function App() {

  const [flexDir, setFlexDir] = React.useState(true);
  const [sidebarShown, setSidebarShown] = React.useState(true);
  const [notes, setNotes] = React.useState([])
  const [img, setImg] = React.useState("")
  const [archiveShown, setArchiveShown] = React.useState(false)

  return (
    <>
      <Header setFlexDir={setFlexDir} setSidebarShown={setSidebarShown} notes={notes} />
      <div className='flex'>
        <Sidebar sidebarShown={sidebarShown} />
        <div className='w-full flex flex-col items-start'>
          <Content flexDir={flexDir} setNotes={setNotes} notes={notes} img={img} setImg={setImg} setArchiveShown={setArchiveShown} />
        </div>
      </div>
      {archiveShown && <div className='flex justify-between items-center bg-[#313235] w-[30%] pl-5 pr-2.5 py-2.5 fixed bottom-5 left-5'>
        <div className='text-white text-sm font-semibold'>
          Not arşivlendi
        </div>
        <div className='flex items-center'>
          <div className='text-[#8ab4f8] font-semibold text-sm px-6 py-2'>
            Geri al
          </div>
          <div>
            <img className='cursor-pointer' onClick={()=>setArchiveShown(prev => !prev)} src={closeIcon} alt="" />
          </div>
        </div>
      </div>}
    </>
  )
}

export default App
