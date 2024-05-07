import {useLoaderData, useNavigation} from "react-router-dom";
import Book from "./Book";
import LoadingSpinner from "./LoadingSpinner";


const Books = () => {
    const navigation = useNavigation();
    if(navigation === "loading"){
        return <LoadingSpinner/>
    }
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
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