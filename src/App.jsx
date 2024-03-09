import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmars from './components/Bookmars/Bookmars'
import Header from './components/Header/Header'

function App() {


  return (
    <>
        <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs></Blogs> 
        <Bookmars></Bookmars>
      </div>


    
    </>
  )
}

export default App
