import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

import BookEdit from "./BookEdit";

const BookShow = ({ title, id }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookId } = useBooksContext();

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteBookId(id);
  };

  function handleSave() {
    setShowEdit(false);
  }

  let content = <h3>{title}</h3>;
  if (showEdit) {
    content = <BookEdit id={id} handleSave={handleSave} title={title} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${id}//300/200`} alt="random" />
      <div>{content}</div>

      <div className="actions">
        <button onClick={handleEditClick} className="edit">
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}></button>
      </div>
    </div>
  );
};

export default BookShow;
