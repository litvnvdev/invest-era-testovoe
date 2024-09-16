import { Link } from "react-router-dom";
import { Button } from "../../uikit/button/Button";

import styles from "./styles/not-found.module.css";

export function NotFound() {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.errorMessage}>
        <p>Ошибка 404</p>
        <p>Страница не найдена</p>
      </div>
      <Link to="/">
        <Button>Назад на главную</Button>
      </Link>
    </div>
  );
}
