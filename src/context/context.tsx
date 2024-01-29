import { ReactNode, createContext, useEffect, useState } from "react";
import { BookTypes } from "../types/book.types";
import { v4 as uuid } from 'uuid'
import { AuthorTypes } from "../types/author.types";
import { authorsDataInitial, booksDataInitial } from "../components/table-management/mock/data";
import { ContextProps } from "../types/Context.types";

export const Context = createContext<ContextProps>({
  bookData: {
    books: [],
    createNewBook: () => {},
    deleteBook: () => {},
    setBooks: () => {}
  },
  authorData: {
    authors: [],
    createNewAuthor: () => {},
    deleteAuthor: () => {}
  },
});

export const ContextProvider = ({ children }: { children: ReactNode}) => {
  const [books, setBooks] = useState<BookTypes[]>(localStorage.getItem("BOOKS") ? JSON.parse(localStorage.getItem("BOOKS") as string) : booksDataInitial);

  const [authors, setAuthors] = useState<AuthorTypes[]>(localStorage.getItem("AUTHORS") ? JSON.parse(localStorage.getItem("AUTHORS") as string) : authorsDataInitial);

  useEffect(() => {
    const itemsBooks = JSON.parse(localStorage.getItem("BOOKS") as string);
    if(itemsBooks) setBooks(itemsBooks);

    const itemsAuthors = JSON.parse(localStorage.getItem("AUTHORS") as string);
    if(itemsAuthors) setAuthors(itemsAuthors);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("BOOKS", JSON.stringify(books))
  }, [books]);

  useEffect(() => {
    localStorage.setItem("AUTHORS", JSON.stringify(authors))
  }, [authors]);


  const createNewBook = (name: string, authorId: string, pages: number) => {
    setBooks((previous) => {
      return [
        ...previous,
        {
          name,
          author_id: authorId,
          id: uuid(),
          pages
        }
      ]
    })
  }

  const deleteBook = (id: string) => {
    const data = books.filter((book) => book.id !== id);
    setBooks(data)
  }

  const createNewAuthor = (name: string, email: string) => {
    setAuthors((previous) => {
      return [
        ...previous,
        {
          name,
          id: String(previous.length),
          email
        }
      ]
    })
  }

  const deleteAuthor = (id: string) => {
    const data = authors.filter((author) => author.id !== id);
    setAuthors(data)
  }

  return (
    <Context.Provider value={{
      bookData:{
        books,
        createNewBook,
        deleteBook,
        setBooks 
      },
      authorData: {
        authors,
        createNewAuthor,
        deleteAuthor
      }
    }}>{ children }</Context.Provider>
  )
}