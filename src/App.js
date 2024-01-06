import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';

import { useSelector } from 'react-redux';
import EditBookDetails from './EditBookDetails';

function App() {
  let selectedBookToEdit = useSelector(state => state.selectedBookToEdit);
  return (
    <>
      <BookList />

      {selectedBookToEdit && <EditBookDetails />}
    </>
  );
}

export default App;
