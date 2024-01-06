export const addBook = (book) => {
    return {
        type: "ADD_BOOK",
        payload: book
    }
}

export const deleteBook = (bookId) => {
    return {
        type: "DELETE_BOOK",
        payload: bookId
    }
}

export const selectedBookToEdit = (book) => {
    return {
        type: "EDIT_BOOK",
        payload: book
    }
}

export const saveEditedBook = (book) => {
    return {
        type: "SAVE_EDITED_BOOK",
        payload: book
    }
}