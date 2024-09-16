import styles from "./styles/button.module.css";

export function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}
