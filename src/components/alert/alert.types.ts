export type AlertTypes = {
  id: string;
  deleteBook?: (id: string) => void;
  deleteAuthor?: (id: string) => void
}