import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    const ferchBooks = useCallback ( async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    }, [] );

    
    
    const editBookById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title,
        });
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return { ...book, ...response.data };
          }
          return book;
        });
        setBooks(updatedBooks);
      };
    
      const deleteBookById = async (id) => {
    
        await axios.delete(`http://localhost:3001/books/${id}`)
        
        const updatededBooks = books.filter((book) => {
          return book.id !== id;
        });
        setBooks(updatededBooks);
      };
    
      const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
          title,
        });
    
        const updateBooks = [...books, response.data];
        setBooks(updateBooks);
      };

      const valueToShare = {
        books:books,
        deleteBookById,
        editBookById,
        createBook,
        ferchBooks
      }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export { Provider };
export default BooksContext;