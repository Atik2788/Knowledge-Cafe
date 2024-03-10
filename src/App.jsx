import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmars/Bookmarks'



function App() {
const [bookmarks, setBookmarks] = useState([])
const [readingTime, setreadingTime] = useState(0)

const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
  // console.log(bookmarks);
}

const handleMarkAsRead = time =>{
  const newReadTime = readingTime + time;
  setreadingTime(newReadTime)
  // console.log(readingTime);
}

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto mt-10'>
        <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark}></Blogs> 
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks> 
      </div>


    
    </>
  )
}

export default App
