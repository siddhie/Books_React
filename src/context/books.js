import { createContext, useState, useCallback } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");

    setBooks(response.data);
  }, []);

  // create a new book
  async function createBook(title) {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    const updatedBook = [...books, response.data];
    setBooks(updatedBook);
  }

  // delete book
  async function deleteBookId(id) {
    await axios.delete(`http://localhost:3001/books/${id}`);

    fetchBooks();

    // let deletedItemArr = books.filter((book) => book.id !== id);
    // setBooks(deletedItemArr);
  }

  async function updateTitle(title, id) {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });

    fetchBooks();
  }

  const valueToShare = {
    books,
    deleteBookId,
    updateTitle,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
