import { useDispatch, useSelector } from "react-redux";
import { saveEditedBook } from "../src/store/actions/book-actions"
import { useState } from "react";

const EditBookDetails = () => {
    let booktoEdit = useSelector(state => state.selectedBookToEdit);
    let dispatch = useDispatch();
    let [details, setDetails] = useState({ ...booktoEdit });
    const change = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }

    const saveDetails = (e) => {
        e.preventDefault();
        dispatch(saveEditedBook(details))

    }

    return (
        <form  onSubmit={saveDetails} >
            עריכת פרטי ספר📔
            <label>שם הספר</label>
            <input type="text" name="bookName" onBlur={change} defaultValue={details.bookName} />
            <label>מחיר</label>
            <input type="text" name="price" onBlur={change} defaultValue={details.price} />
            <input type="submit"/>
        </form>
    );
}

export default EditBookDetails;