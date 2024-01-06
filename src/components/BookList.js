import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import AddBook from "./AddBook"
import { useState } from "react";

const BookList = () => {
    let [flag, setFlag] = useState(false);
    let bookArr = useSelector((state) => { return state.bookArr });
    return (
        <>
            <h1>כל הספרים</h1>
            <input type="button" value="add new book" onClick={() => { setFlag(true) }} />
            {flag && <AddBook flag={flag} setFlag={setFlag}/>}
            {bookArr.map(item => <ListItem key={item.id} oneBook={item} />)}

        </>
    );
}

export default BookList;