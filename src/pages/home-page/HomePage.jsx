import { BackLink } from "../../components/back-link/BackLink";
import { Table } from "../../components/table/Table";
import { Container } from "../../uikit/container";
import { MainContentLayout } from "../../uikit/main-content";
import { Title } from "../../uikit/title";

export default function HomePage() {
  return (
    <Container>
      <MainContentLayout>
        <div style={{ display: "flex", gap: "10px", marginTop: "40px" }}>
          <BackLink>Главная</BackLink> <BackLink>Портфели</BackLink>
        </div>
        <div>
          <Title>Российские компании с наибольшим числом работников</Title>
        </div>

        <Table />
      </MainContentLayout>
    </Container>
  );
}
