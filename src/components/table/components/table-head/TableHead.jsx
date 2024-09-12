import { useFetch } from "../../../../hooks/useFetch";
import styles from "../../styles/table-head.module.css";

export function TableHead() {
  const { data: tableHeadCells } = useFetch(
    "http://localhost:8000/api/tables/model-portfolio-usa/"
  );

  const raw = {
    item1: { key: "sdfd", value: "sdfd" },
    item2: { key: "sdfd", value: "sdfd" },
    item3: { key: "sdfd", value: "sdfd" },
  };

  const allowed = [
    "компания",
    "Текущая цена",
    "доля",
    "Потенциал роста",
    "Дивиденды",
  ];

  if (!tableHeadCells) {
    return "Loading...";
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
