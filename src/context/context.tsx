import { ReactNode, createContext, useState } from "react";
import { BookTypes } from "../types/book.types";
import { v4 as uuid } from 'uuid'

export type ContextProps = {
  bookData: {
    books: BookTypes[];
    createNewBook: (name: string, authorId: string, pages: number) => void;
    deleteBook: (id: string) => void;
  }
}

const Context = createContext<ContextProps | null>(null);


export const ContextProvider = ({ children }: { children: ReactNode}) => {
  const [books, setBooks] = useState<BookTypes[]>([{
    id: uuid(),
    author_id: 'dsadsa',
    name: 'Rei Arthur',
    pages: 50
  }]);

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


  return (
    <Context.Provider value={{
      bookData:{
        books,
        createNewBook,
        deleteBook
      }
    }}>{ children }</Context.Provider>
  )
}