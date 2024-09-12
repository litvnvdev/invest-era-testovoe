import { Container } from "../../uikit/container";
import { HEADER_LINKS } from "./consts";
import { Logo } from "./icons/Logo";
import styles from "./styles/header.module.css";

export function Header() {
  return (
    <header>
      <Container>
        <div className={styles.header}>
          <ul className={styles.headerListLinks}>
            <Logo />
            {HEADER_LINKS.map(({ title, id, link }) => (
              <li className={styles.headerLink} key={id}>
                <a href={link}>{title}</a>
              </li>
            ))}
          </ul>
          <button className={styles.button}>Авторизация</button>
        </div>
      </Container>
    </header>
  );
}
