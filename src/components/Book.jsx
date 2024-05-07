import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { title, image, subtitle, price, isbn13 } = book;
    return (
        <div>
            <Link to={`/bookDetails/${isbn13}`}>
                <div className='overflow-hidden relative rounded-lg transition hover:-translate-y-1 duration-200 shadow-md'>
                    <img src={image} alt="Cover page Image" className='object-cover h-52 md:h-64 lg:h-80 ' />
                    <div className='bg-black text-gray-300 bg-opacity-75 absolute inset-0 p-5 flex flex-col opacity-0 hover:opacity-100 shadow-md'>
                        <p>{title}</p>
                        <p className='md:mt-6'>{subtitle.substring(0, 25)}....</p>
                        <p className='mt-auto'>{price}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;