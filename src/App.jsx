import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmars from './components/Bookmars/Bookmars'
import Header from './components/Header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([])

const handleAddToBookmark = blog =>{
  console.log('from bookmarks');
}

  return (
    <>
        <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs> 
        <Bookmars handleAddToBookmark={handleAddToBookmark}></Bookmars>
      </div>


    
    </>
  )
}

export default App
