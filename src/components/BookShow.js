import { useState,useContext } from "react"
import BooksContext from "../context/books";
import BookEdit from './BookEdit';

const BookShow = ({book}) => {

    const {deleteBookById} = useContext(BooksContext);
    const [showEdit,setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    return (
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
            <div>{content}</div>
            <div className="actions">
                <button onClick={handleEditClick} className="edit">edit</button>
                <button onClick={handleDeleteClick} className="delete">
                    Delete
                </button>
            </div>
            </div>
    )
}

export default BookShow;