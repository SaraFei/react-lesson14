import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookArr: [{ id: 1, bookName: "the girl on the train", price: 120, img: "https://www.read-english.co.il/wp-content/uploads/%D7%94%D7%A0%D7%A2%D7%A8%D7%94-%D7%A2%D7%9C-%D7%94%D7%A8%D7%9B%D7%91%D7%AA-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg", author: "woston" },
    { id: 2, bookName: "cobin", price: 220, img: "https://www.read-english.co.il/wp-content/uploads/%D7%9E%D7%A2%D7%92%D7%9C-%D7%9E%D7%9B%D7%95%D7%A9%D7%A3-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg", author: "joh" }]
    , selectedBook: null,
    selectedBookToEdit: null
}

export const librarySlice = createSlice({
    name: 'libraryActions',
    initialState: initialState,
    reducers: {
        addBook: (state, action) => {
            state.bookArr.push(action.payload);
        },
        deleteBook: (state, action) => {
            let newArr = state.bookArr.filter(item => item.id !== action.payload);
            state.bookArr = newArr;
        },
        selectedBookForEdit: (state, action) => {
            state.selectedBookToEdit = action.payload;
        },
        saveEditedBook: (state, action) => {
            let copy = state.bookArr.map(item => {
                if (item.id !== action.payload.id)
                    return item
                return action.payload
            })
            state.bookArr = copy;
        }
    }
})

export const { addBook, deleteBook, selectedBook, saveEditedBook,selectedBookForEdit } = librarySlice.actions;
export default librarySlice.reducer;