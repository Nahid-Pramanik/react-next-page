import { useLoaderData } from "react-router-dom";
import Book from "./Book";


const Books = () => {
    const {books} = useLoaderData();
    return (
        <div className="my-container grid  grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-7 justify-items-center">
            {
                books.map(book => <Book key={book.isbn13} book={book}></Book>)
            }
        </div>
    );
};

export default Books;