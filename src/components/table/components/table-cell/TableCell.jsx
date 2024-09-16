import styles from "../../styles/table.module.css";

export function TableCell({ children }) {
  return <td className={styles.tableCell}>{children}</td>;
}
