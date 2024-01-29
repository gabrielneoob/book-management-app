import { Flex, Text } from "@radix-ui/themes";
import { DataTableType } from "../../../types/dataTable.types";
import { EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons";
import useBooks from "../../../hooks/useBooks";


export const DATA:DataTableType[] = [
  {
    book: "Rei Arthur",
    author: "Arthur",
    pages: 10
  },
  {
    book: "Homem Arthur",
    author: "Ber",
    pages: 50,
  },
  {
    book: "Pequeno Príncipe",
    author: "Manuela",
    pages: 100
  },
  {
    book: "Teste",
    author: "Lucas",
    pages: 200
  },
  {
    book: "Grande Guerra",
    author: "Carlos",
    pages: 500
  },
]