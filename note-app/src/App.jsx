import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

function App() {

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
