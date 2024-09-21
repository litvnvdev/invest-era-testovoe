import { Link, useParams } from "react-router-dom";
import { BackLink } from "../../components/back-link/BackLink";
import { Table } from "../../components/table/Table";
import { Container } from "../../uikit/container";
import { MainContentLayout } from "../../uikit/main-content";
import { Title } from "../../uikit/title";
import { HOME_PAGE_DATA } from "../home-page/consts";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../../components/loader";
import { Error } from "../../components/error";
import { API_URL } from "../../consts";

export default function TablePage() {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: cells,
  } = useFetch(`${API_URL}model-portfolio-usa/`);
  const data = Object.values(HOME_PAGE_DATA).map((data) => Object.values(data));
  const filteredData = data
    .map((item) => Object.values(item))
    .map((obj) => obj.filter((data) => data.link.slice(6) === id))
    .filter((arr) => arr.length);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error error={error} />;
  }

  return (
    <Container>
      <MainContentLayout>
        <div style={{ display: "flex", gap: "10px", marginTop: "40px" }}>
          <BackLink link="/">Главная</BackLink>
          <BackLink link="/">Портфели</BackLink>
        </div>
        <div>
          {filteredData[0].map(({ title, id }) => (
            <Title key={id + title}>{title}</Title>
          ))}
        </div>
        <Table data={cells} />
      </MainContentLayout>
    </Container>
  );
}
