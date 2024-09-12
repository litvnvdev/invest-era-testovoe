import styles from "./styles/main-content-layout.module.css";
export function MainContentLayout({ children }) {
  return <main className={styles.main}>{children}</main>;
}
