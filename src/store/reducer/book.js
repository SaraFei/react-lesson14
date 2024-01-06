const initialState = {
    bookArr: [{ id: 1, bookName: "the girl on the train", price: 120, img: "https://www.read-english.co.il/wp-content/uploads/%D7%94%D7%A0%D7%A2%D7%A8%D7%94-%D7%A2%D7%9C-%D7%94%D7%A8%D7%9B%D7%91%D7%AA-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg", author: "woston" },
    { id: 2, bookName: "cobin", price: 220, img: "https://www.read-english.co.il/wp-content/uploads/%D7%9E%D7%A2%D7%92%D7%9C-%D7%9E%D7%9B%D7%95%D7%A9%D7%A3-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg", author: "joh" }]
    , selectedBook: null,
    selectedBookToEdit: null
}
export const bookReducer = (state = initialState, actionBook) => {
    switch (actionBook.type) {
        case "ADD_BOOK":
            return {
                selectedBook: state.selectedBook,
                selectedBookToEdit: state.selectedBookToEdit,
                bookArr: [...state.bookArr, actionBook.payload]
            }
        case "DELETE_BOOK": console.log("Deleting book with id:", actionBook.payload);
                console.log("Current state:", state);
            return {
               
                selectedBook: state.selectedBook,
                selectedBookToEdit: state.selectedBookToEdit,
                bookArr: state.bookArr.filter(item => item.id !== actionBook.payload)
            }
        case "EDIT_BOOK"://הספר שנבחר לעריכה
            return {
                selectedBook: state.selectedBook,
                selectedBookToEdit: actionBook.payload,
                bookArr: state.bookArr
            }
        case "SAVE_EDITED_BOOK"://שמירת הפרטים שנערכו
            let copy = state.bookArr.map(item => {
                if (item.id !== actionBook.payload.id)
                    return item
                return actionBook.payload
            })
            return {
                selectedBook: state.selectedBook,
                selectedBookToEdit: null,
                bookArr: copy
            }
        default: return state;
    }
}
