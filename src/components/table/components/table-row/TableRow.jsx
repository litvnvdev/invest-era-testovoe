import styles from "../../styles/table.module.css";
export function TableRow({ children }) {
  return <tr className={styles.tableRow}>{children}</tr>;
}
