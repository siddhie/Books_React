import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context";

const BookList = () => {
  const { books } = useBooksContext();

  const renderedBooks = books?.map(({ title, id }) => {
    return <BookShow key={id} title={title} id={id} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;

