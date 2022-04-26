import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../models/Interfaces";

type Props = {
    book: IBook
};

export const List = ({book}: Props): JSX.Element => {    
    return (
        <React.Fragment>
            <main key={book._id}>
                <h1>{book.title}</h1>
                <p>Name: {book.first} {book.last}</p>
                <p>Age: {book.age}</p>
                <p>Info: {book.info}</p>
                <button>
                    <Link to={`/books/edit/${book._id}`}
                        >Edit
                    </Link>
                </button>
            </main>
        </React.Fragment>
    );
};



