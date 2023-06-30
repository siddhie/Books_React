import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ id, handleSave, title }) => {
  const { updateTitle } = useContext(BooksContext);
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const handleChange = ({ target: { value } }) => {
    setUpdatedTitle(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSave();
    updateTitle(updatedTitle, id);
  };

  return (
    <form onSubmit={handleFormSubmit} className="book-edit">
      <label>Title</label>
      <input
        autoFocus
        value={updatedTitle}
        onChange={handleChange}
        className="input"
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
