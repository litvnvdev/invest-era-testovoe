import styles from "./styles/back-link.module.css";
import { BackLinkIcon } from "./icons/BackLinkIcon";

export function BackLink({ children, link }) {
  return (
    <div className={styles.backLinkWrapper}>
      <BackLinkIcon />
      <a href={link}>{children}</a>
    </div>
  );
}
