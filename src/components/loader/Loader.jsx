import styles from "./styles/loader.module.css";

export function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.circle}></div>
      <p>Загрузка данных...</p>
    </div>
  );
}
