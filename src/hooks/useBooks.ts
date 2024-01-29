import { useContext } from "react";
import { Context } from "../context/context";

const useBooks = () => useContext(Context);

export default useBooks;