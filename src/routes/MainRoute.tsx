import { useRoutes } from "react-router-dom";
import Author from "../pages/author/Author";
import Book from "../pages/book/Book";
import { Text } from "@radix-ui/themes";

const MainRoutes = () => useRoutes([
  {path: '/', element:  <Book/>},
  {path: '/authors', element: <Author/>},
  {path: '/*', element: <><Text>Page not Found...</Text></>},
])

export default MainRoutes;