import styles from "../../styles/table-cell.module.css";

export function TableCell({ children }) {
  return <td className={styles.tableCell}>{children}</td>;
}
