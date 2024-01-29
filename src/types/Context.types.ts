import { AuthorTypes } from "./author.types";
import { BookTypes } from "./book.types";

export type ContextProps = {
  bookData: {
    books: BookTypes[];
    createNewBook: (name: string, authorId: string, pages: number) => void;
    deleteBook: (id: string) => void;
    setBooks: React.Dispatch<React.SetStateAction<BookTypes[]>>
  },
  authorData: {
    authors: AuthorTypes[];
    createNewAuthor: (name: string, email: string) => void;
    deleteAuthor: (id: string) => void;
  },
}