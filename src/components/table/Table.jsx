import { useFetch } from "../../hooks/useFetch";
import { TableHead, TableRow } from "./components";
import { TableCell } from "./components/table-cell/TableCell";
import styles from "./styles/table.module.css";

export function Table({ children }) {
  const {
    data: cells,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/api/tables/model-portfolio-usa/");

  if (!cells) {
    return <div>loading...</div>;
  }
  const allowed = [
    "компания",
    "Текущая цена",
    "доля",
    "Потенциал роста",
    "Дивиденды",
  ];

  const newRow = cells.map((obj) =>
    Object.entries(obj)
      .filter(([key]) => allowed.includes(key))
      .map((item) => item.slice(1, 2))
  );
  console.log(newRow.slice(1).map((item) => item));

  return (
    <table>
      <TableHead />
      <tbody className={styles.table}>
        {newRow.slice(1).map((item) =>
          item.map((value) => (
            <TableRow>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))
        )}
      </tbody>
    </table>
  );
}
