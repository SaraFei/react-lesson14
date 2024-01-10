import logo from './logo.svg';
import './App.css';
import BookList from './library/BookList';

import { useSelector } from 'react-redux';
import EditBookDetails from './library/EditBookDetails';

function App() {
  let selectedBookToEdit = useSelector(state => state.libraryBookState.selectedBookToEdit);
  return (
    <>
      <BookList />

      {selectedBookToEdit && <EditBookDetails />}
    </>
  );
}

export default App;
