import { configureStore } from '@reduxjs/toolkit'
import bookSlice from "../library/book";

export const store = configureStore({
    reducer: { libraryBookState: bookSlice }
})