import PropTypes from 'prop-types';

const Book = ({book}) => {
    console.log(book)
    return (
        <div>
            <img src={book.image} alt="" />
        </div>
    );
};

Book.proptypes = {
    book: PropTypes.object.isRequired,
}

export default Book;