import PropTypes from 'prop-types';

const Book = ({book}) => {
    console.log(book)
    const {title, image, subtitle, price } = book;
    return (
        <div className='overflow-hidden relative rounded-lg transition hover:-translate-y-1 duration-200'>
            <img src={image} alt="Cover page Image"  className='object-cover h-48 md:h-64 lg:h-80 '/>
            <div className='bg-black text-gray-300 bg-opacity-75 absolute inset-0 p-5 flex flex-col opacity-0 hover:opacity-100'>
                <p>{title}</p>
                <p className='mt-8'>{subtitle}</p>
                <p className='mt-auto'>{price}</p>
            </div>
        </div>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;