import { Link } from "react-router-dom";
import styles from "./styles/error.module.css";
import { Button } from "../../uikit/button/Button";

export function Error({ error }) {
  console.log("Error:", error);
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorMessage}>
        <p>Произошла ошибка получения данных 😓</p>
        <Link to="/">
          <Button>Вернуться на главную</Button>
        </Link>
      </div>
    </div>
  );
}
