import styles from "./styles/container.module.css";

export function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
