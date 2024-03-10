import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks);
    return (
        <div className="md:w-1/3  rounded-md ml-4 pt-4">
           
            <h2 className='text-indigo-700 font-bold text-2xl bg-pink-200 mt-10 rounded ml-4 mb-4 p-2'>Spent time on read: {readingTime} min.</h2>
            
            <div className=" bg-gray-300 h-full bg-gray-300 rounded-md ml-4 pt-4">
                <h2 className='text-3xl ml-4 text-center '>Bookmarked Blogs: {bookmarks.length}</h2>
                    {
                        bookmarks.map((bookMark, idx) => <Bookmark key={idx}  bookMark = {bookMark}></Bookmark>)
                    }
                
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;