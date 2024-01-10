import { useDispatch } from "react-redux";
import { deleteBook, selectedBookForEdit } from "./book.js"

const ListItem = ({ oneBook }) => {
    let dispatch = useDispatch();

    return (
        <div>
            <h2>{oneBook.bookName}</h2>
            <img src={oneBook.img} />
            <h2>{oneBook.price}</h2>
            <input type="button" value="delete book" onClick={() => { dispatch(deleteBook(oneBook.id)) }} />
            <input type="button" value="edit book" onClick={() => { dispatch(selectedBookForEdit(oneBook)) }} />

        </div>
    )
}
export default ListItem;