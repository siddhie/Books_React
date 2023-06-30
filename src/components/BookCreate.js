import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

import ".././index.css";

const BookCreate = () => {
  const { createBook } = useBooksContext();
  const [title, setTitle] = useState("");

  function handleChange({ target: { value } }) {
    // console.log(value);
    setTitle(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    createBook(title);
    setTitle("");
  }

  return (
    <div className="book-create">
      <form onSubmit={handleSubmit}>
        <h3>Add a Book</h3>
        <label>Title</label>
        <input onChange={handleChange} value={title} type="text" />
        <button className="button" type="submit">
          Create!
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
