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

const handleMarkAsRead = (id, time) =>{
  const newReadTime = readingTime + time;
  setreadingTime(newReadTime)
  // console.log(id);
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remainingBookmarks)
 
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
