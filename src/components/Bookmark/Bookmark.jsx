import PropTypes from 'prop-types'

const Bookmark = ({bookMark}) => {
    const {title} = bookMark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-md'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes ={
    bookMark: PropTypes.object.isRequired
}

export default Bookmark;