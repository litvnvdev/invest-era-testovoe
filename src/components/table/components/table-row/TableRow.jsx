import { useFetch } from "../../../../hooks/useFetch";
import { TABLE_CELL_DATA } from "../../consts";
import styles from "../../styles/table-row.module.css";
import { TableCell } from "../table-cell/TableCell";

export function TableRow({ children }) {
  return <tr className={styles.tableRow}>{children}</tr>;
}
