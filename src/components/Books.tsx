import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../global/Hooks";
import { API } from "../global/FetchAPI";
import { List } from "./List";

export const Books = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const { loading, error, books } = 
        useAppSelector((state) => state.books);

    React.useEffect(() => {
        dispatch(API.fetchAll())
    }, [dispatch]);

    return (
        <React.Fragment>
            <button>
                <Link to="/books/add">Add Book</Link>
            </button>
            {error ? (
                <h1>Error</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                <main>
                    {books.map((book) => (
                        <List key={book._id} book={book} />
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};



