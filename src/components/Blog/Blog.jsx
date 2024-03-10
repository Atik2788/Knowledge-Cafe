import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 mt-4' src={cover} alt={`Cover picture of the title${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div className=''>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookmark(blog)} className='ml-2 text-blue-600 text-xl align-middle'><FaRegBookmark/></button>
                </div>
            </div>

            <h2 className='text-4xl mb-3'>{title} </h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key = {idx} className='ml-2 text-xl ;'> <a href='' className='text-red-300'>{hash}</a></span>)
                }
            </p>
            <button 
                className='mt-2 text-white text-xl bg-blue-600 rounded-md p-2' 
                onClick={() =>handleMarkAsRead(reading_time)} href=""
            >Marke as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;

