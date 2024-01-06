import { useState } from "react";
import { Dispatch } from "redux";
import { addBook } from "../store/actions/book-actions";
import { useDispatch } from "react-redux";


const AddBook = ({flag,setFlag}) => {
    let dispatch = useDispatch();
    let [newBook, setNewBook] = useState({});
    const getDetailsFromInput = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value })
    }
    const sendNewBookDEtails = (e) => {
        e.preventDefault();
        dispatch(addBook(newBook));
        setFlag(false);
    }
    return (
        <form onSubmit={sendNewBookDEtails} >

            <label>book name</label>
            <input type="text" name="bookName" onMouseLeave={getDetailsFromInput} />
            <label>book id</label>
            <input type="text" name="id" onMouseLeave={getDetailsFromInput} />
            <label>price </label>
            <input type="text" name="price" onMouseLeave={getDetailsFromInput} />
            <label>author </label>
            <input type="text" name="author" onMouseLeave={getDetailsFromInput} />
            <label>img src </label>
            <input type="text" name="img" onMouseLeave={getDetailsFromInput} />
            <input type="submit" value="send" />

        </form>
    );
}

export default AddBook;