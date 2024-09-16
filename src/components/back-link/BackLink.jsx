import styles from "./styles/back-link.module.css";
import { BackLinkIcon } from "./icons/BackLinkIcon";
import { Link } from "react-router-dom";

export function BackLink({ children, link }) {
  return (
    <div className={styles.backLinkWrapper}>
      <BackLinkIcon />
      <Link to={link}>{children}</Link>
    </div>
  );
}
