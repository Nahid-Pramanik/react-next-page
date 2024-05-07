import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Bookdetails = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading'){
        return <LoadingSpinner></LoadingSpinner>
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fold, setFold] = useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const details = useLoaderData();
    const { title, authors, publisher, price, rating, year, desc, image } = details;

    

    return (
        <div className="my-container flex flex-col md:flex-row md:items-center md:justify-center gap-5 shadow-md">
            <div className="md:w-1/3">
                <img src={image} alt="" className="w-full " />
            </div>
            <div className="md:w-1/3">
                <span className="badge">BRAND NEW</span>
                <h2 className="text-4xl font-extrabold">{title}</h2>
                <div className="text-base font-semibold mt-2 mb-3">
                    <p>Authors: {authors}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year: {year}</p>
                    <p>Rating: {rating}</p>
                </div>
                {
                    fold ? <p>{desc.substring(0, 100)}...
                        <span onClick={() => setFold(!fold)} className="cursor-pointer text-blue-700 font-bold">Read More</span>
                    </p>
                        :
                        <p>{desc}
                            <span onClick={() => setFold(!fold)} className="cursor-pointer text-blue-700 font-bold">Read Less</span>
                        </p>
                }
                <div className="flex items-center mt-5 gap-5">
                    <button className="btn">Buy Now</button>
                    <p className="text-base font-semibold">Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;