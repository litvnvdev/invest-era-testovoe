import clsx from "clsx";
import { useFetch } from "../../hooks/useFetch";
import { TableHead, TableRow } from "./components";
import { TableCell } from "./components/table-cell/TableCell";
import styles from "./styles/table.module.css";
import { Loader } from "../loader";
import { API_URL } from "../../consts";

export function Table({ data }) {
  const { isLoading } = useFetch(`${API_URL}model-portfolio-usa/`);

  const renderDataTitle = Object.keys(data.slice(1, 2)[0]);

  let arrOfKeys = [];
  for (let i = 0; i < renderDataTitle.length; i++) {
    arrOfKeys.push(renderDataTitle[i]);
  }

  const renderDataCell = data.slice(1, 30);
  let arrOfValues = [];
  for (let i = 0; i < renderDataCell.length; i++) {
    arrOfValues.push(Object.values(renderDataCell[i]));
  }

  //====== Проверяем длину строки с запятой и убираем лишние цифры после запятой
  const checkForLengthComma = (title) => {
    if (title.includes(",")) {
      return title.slice(0, Number(title.indexOf(",") + 4));
    }
    return title;
  };

  //======= Проверяем строку на позитивное значение
  const checkForPositive = (string) => {
    if (string.includes("+")) {
      return styles.positive;
    } else if (string.includes("-")) {
      return styles.negative;
    }
    return "";
  };
  // ======= Преобразовываем первую букву
  const capitalizeFirstLetter = (title) => {
    const firstLetterCap = title.charAt(0).toUpperCase();
    const remainingLetters = title.slice(1);
    return `${firstLetterCap}${remainingLetters}`;
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={styles.tableWrapper}>
      {/* ======Статичный вариант отрисовки (по ключам объекта)===== */}

      {/* <div className={styles.tableHeadWrapper}>
        <ul className={styles.tableHead}>
          {arrOfKeys.map((title) => (
            <li className={clsx(title === "компания" ? styles.fixed : "")}>
              {capitalizeFirstLetter(title)}
            </li>
          ))}
        </ul>
      </div>
      {data.slice(1, 30).map((obj, i) => (
        <div className={styles.tableRow} key={i}>
          <p className={styles.fixed}>{obj["компания"]}</p>
          <p>{obj["тикер"]}</p>
          <p>{obj["сектор"]}</p>
          <p>{obj["доля"]}</p>
          <p>{obj["Текущая цена"]} ₽</p>
          <p>{obj["Точка входа"]} ₽</p>
          <p>{obj["Потенциал"]}</p>
          <p>{obj["Уровень риска"].slice(0, 3)}</p>
          <p>{obj["Ср-срочн. потенциал"]}</p>
          <p className={clsx(checkForPositive(obj["Дивиденды"]))}>
            {obj["Дивиденды"]}
          </p>
          <p className={clsx(checkForPositive(obj["Потенциал роста"]))}>
            {obj["Потенциал роста"]}
          </p>
          <p
            className={clsx(
              checkForPositive(obj["Долгосрочный потенциал роста"])
            )}
          >
            {obj["Долгосрочный потенциал роста"]}
          </p>
          <p>{obj["FWD P/E"]}</p>
          <p>{obj["Sales 5 past years"]}</p>
        </div>
      ))} */}

      {/* ==========Динамический вариант отображения========== */}

      <div className={styles.tableHeadWrapper}>
        <ul className={styles.tableHead}>
          {arrOfKeys.map((title) => (
            <li>{capitalizeFirstLetter(title)}</li>
          ))}
        </ul>
      </div>

      <div className={styles.tableRowWrapper}>
        {arrOfValues.flat().map((item, id) => (
          <p
            className={clsx(checkForPositive(item), styles.tableCell)}
            key={id}
          >
            {clsx(checkForLengthComma(item))}
          </p>
        ))}
      </div>
    </div>
  );
}
