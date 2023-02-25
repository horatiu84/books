import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

const App = () => {
  const { ferchBooks } = useContext(BooksContext);

  useEffect(() => {
    ferchBooks();
  }, [ferchBooks]);

  return (
    <div className="app">
      <h1>Reading list</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default App;
