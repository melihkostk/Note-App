import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Archive } from './components/Archive'
import { Trash } from './components/Trash'
import closeIcon from './assets/close.png'
import React from 'react'

function App() {

  const [flexDir, setFlexDir] = React.useState(true)
  const [sidebarShown, setSidebarShown] = React.useState(true)
  const [notes, setNotes] = React.useState([])
  const [archivedNotes, setArchivedNotes] = React.useState([])
  const [deletedNotes, setDeletedNotes] = React.useState([])
  const [img, setImg] = React.useState("")
  const [archiveShown, setArchiveShown] = React.useState(false)
  const [unArchiveShown, setUnArchiveShown] = React.useState(false)
  const [deleteShown, setDeleteShown] = React.useState(false)
  const [contentShown, setContentShown] = React.useState(true)
  const [archivePage, setArchivePage] = React.useState(false)
  const [trashPage, setTrashPage] = React.useState(false)
  const [searchInput, setSearchInput] = React.useState("")
  const [darkMode, setDarkMode] = React.useState(true)
  const [editedNotes, setEditedNotes] = React.useState([])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setArchiveShown(false);
    }, 3000);

    return () => clearInterval(timer);

  }, [archiveShown]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDeleteShown(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, [deleteShown]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-[#202124]" : "bg-white"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} contentShown={contentShown} trashPage={trashPage} archivePage={archivePage} searchInput={searchInput} setSearchInput={setSearchInput} setFlexDir={setFlexDir} setSidebarShown={setSidebarShown} notes={notes} />
      <div className='flex'>
        <Sidebar darkMode={darkMode} sidebarShown={sidebarShown} trashPage={trashPage} setTrashPage={setTrashPage} archivePage={archivePage} contentShown={contentShown} setArchivePage={setArchivePage} setContentShown={setContentShown} />
        {contentShown && <div className='w-full flex flex-col items-start'>
          <Content setUnArchiveShown={setUnArchiveShown} setDeleteShown={setDeleteShown} editedNotes={editedNotes} setEditedNotes={setEditedNotes} darkMode={darkMode} searchInput={searchInput} trashPage={trashPage} flexDir={flexDir} setDeletedNotes={setDeletedNotes} setArchivedNotes={setArchivedNotes} archivedNotes={archivedNotes} setNotes={setNotes} notes={notes} img={img} setImg={setImg} setArchiveShown={setArchiveShown} />
        </div>}
        {archivePage && <div className='w-full flex flex-col items-center'>
          <Archive setUnArchiveShown={setUnArchiveShown} darkMode={darkMode} setNotes={setNotes} archivePage={archivePage} archivedNotes={archivedNotes} setArchivedNotes={setArchivedNotes}
          />
        </div>}
        {trashPage && <div className='w-full flex flex-col items-center mt-8'>
          <Trash darkMode={darkMode} setNotes={setNotes} trashPage={trashPage} deletedNotes={deletedNotes} setDeletedNotes={setDeletedNotes}
          />
        </div>}
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
            <img className='cursor-pointer' onClick={() => setArchiveShown(prev => !prev)} src={closeIcon} alt="" />
          </div>
        </div>
      </div>}
      {deleteShown && <div className='flex justify-between items-center bg-[#313235] w-[30%] pl-5 pr-2.5 py-2.5 fixed bottom-5 left-5'>
        <div className='text-white text-sm font-semibold'>
          Not çöp kutusuna gönderildi
        </div>
        <div className='flex items-center'>
          <div className='text-[#8ab4f8] font-semibold text-sm px-6 py-2'>
            Geri al
          </div>
          <div>
            <img className='cursor-pointer' onClick={() => setDeleteShown(prev => !prev)} src={closeIcon} alt="" />
          </div>
        </div>
      </div>}
      {unArchiveShown && <div className='flex justify-between items-center bg-[#313235] w-[30%] pl-5 pr-2.5 py-2.5 fixed bottom-5 left-5'>
        <div className='text-white text-sm font-semibold'>
          Not arşivden çıkarıldı
        </div>
        <div className='flex items-center'>
          <div className='text-[#8ab4f8] font-semibold text-sm px-6 py-2'>
            Geri al
          </div>
          <div>
            <img className='cursor-pointer' onClick={() => setDeleteShown(prev => !prev)} src={closeIcon} alt="" />
          </div>
        </div>
      </div>}
    </div>
  )
}

export default App
