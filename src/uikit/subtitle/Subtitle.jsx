import styles from "./styles/subtitle.module.css";

export function Subtitle({ children }) {
  return <h4 className={styles.subtitle}>{children}</h4>;
}
