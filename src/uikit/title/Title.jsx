import styles from "./styles/title.module.css";
export function Title({ children }) {
  return <h3 className={styles.title}>{children}</h3>;
}
