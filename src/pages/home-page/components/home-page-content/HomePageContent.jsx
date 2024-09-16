import { Link } from "react-router-dom";
import { Subtitle } from "../../../../uikit/subtitle/Subtitle";
import styles from "../../styles/home-page.module.css";

export function HomePageContent({ subtitle, data }) {
  return (
    <div className={styles.homePageContentWrapper}>
      <Subtitle>{subtitle}</Subtitle>
      <ul className={styles.listLinks}>
        {data.map((obj) => (
          <li>
            <Link
              key={obj.id}
              to={obj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {obj.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
