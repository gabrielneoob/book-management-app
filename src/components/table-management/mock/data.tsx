import { v4 } from "uuid";

export const booksDataInitial = [
  {
    author_id: "Gabriel",
    id: v4(),
    name: "Grande Guerra",
    pages: 500
  },
  {
    author_id: "Pedro",
    id: v4(),
    name: "Pequeno Príncipe",
    pages: 123
  },
  {
    author_id: "Maria",
    id: v4(),
    name: "Maria mae de jesus",
    pages: 234
  },
  {
    author_id: "Carlos",
    id: v4(),
    name: "Grande Guerra Revanche",
    pages: 500
  }, 
]

export const authorsDataInitial = [
  {
    id: 0,
    name: "Gabriel",
    email: "gabrielneoob@gmail.com"
   },
  {
    id: 1,
    name: "Pedro",
    email: "pedro@gmail.com"

   },
  {
    id: 2,
    name: "Carlos",
    email: "carlos@outlook.com"

   },
  {
    id: 3,
    name: "Maria",
    email: ""
  }, 
]