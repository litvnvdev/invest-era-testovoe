import { useState } from "react";
import { Container } from "../../uikit/container";
import { MainContentLayout } from "../../uikit/main-content";
import { Title } from "../../uikit/title";
import { HomePageContent } from "./components/home-page-content/HomePageContent";
import { HOME_PAGE_DATA } from "./consts";

import styles from "./styles/home-page.module.css";
import { LockIcon } from "./icons/LockIcon";

export default function HomePage() {
  const content = Object.entries(HOME_PAGE_DATA);

  return (
    <div className={styles.homePageWrapper}>
      <Container>
        <MainContentLayout>
          <Title>Портфели</Title>
          <ul className={styles.selectBag}>
            <li className={styles.activeBtn}>
              <button>Unity</button>
            </li>
            <li>
              <button className={styles.disabledBtn}>
                Ideas
                <LockIcon width={20} height={20} />
              </button>
            </li>
          </ul>
          {content.map(([key, value]) => (
            <HomePageContent subtitle={key} data={value} />
          ))}
        </MainContentLayout>
      </Container>
    </div>
  );
}
