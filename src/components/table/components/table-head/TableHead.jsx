import { useFetch } from "../../../../hooks/useFetch";
import styles from "../../styles/table.module.css";

export function TableHead() {
  const { data: tableHeadCells } = useFetch(
    "http://localhost:8000/api/tables/model-portfolio-usa/"
  );

  const allowed = [
    "компания",
    "Текущая цена",
    "доля",
    "Потенциал роста",
    "Дивиденды",
    "ceктор",
  ];

  if (!tableHeadCells) {
    return <thead>loading..</thead>;
  }
  const newHead = tableHeadCells.map((obj) =>
    Object.keys(obj).filter((key) => allowed.includes(key))
  );

  return (
    <thead className={styles.tableHeader}>
      <tr className={styles.tableHeaderRow}>
        {newHead[1].map((item) => (
          <th>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
