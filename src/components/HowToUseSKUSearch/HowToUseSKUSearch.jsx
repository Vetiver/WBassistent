import styles from "./HowToUseSKUSearch.module.css";
import ListLogoFirst from "../../images/logos/list-first.svg";
import ListLogoSecond from "../../images/logos/list-second.svg";
import ListLogoThird from "../../images/logos/list-third.svg";
import HowToSearchImage from "../../images/search-SKU.png";

function HowToUseSKUSearch() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.span}>Как пользоваться</span> <br /> бесплатной
        проверкой позиций WB?
      </h2>
      <p className={styles.subtitle}>
        Бесплатный трекер позиций в поиске Wildberries покажет все ключевые
        слова и их позиции на момент запроса
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <img className={styles.listLogo} src={ListLogoFirst} alt="Пункт 1" />
          <p className={styles.listContent}>
            <span className={styles.listSpan}>
              Укажите артикул товара, или ссылку на товар
            </span>
            на Wildberries для отслеживания его позиций по ключевым запросам
          </p>
        </li>
        <img
          className={styles.listImage}
          src={HowToSearchImage}
          alt="Изображение поисковой строки"
        />
        <li className={styles.listItem}>
          <img className={styles.listLogo} src={ListLogoSecond} alt="Пункт 2" />
          <p className={styles.listContent}>
            Подождите пока {""}
            <span className={`${styles.span} ${styles.spanUnderlined}`}>
              wbassistent
            </span>{" "}
            {""}
            соберет все ключевые слова по товару и его позиции в поиске
          </p>
        </li>

        <li className={styles.listItem}>
          <img className={styles.listLogo} src={ListLogoThird} alt="Пункт 3" />
          <p className={styles.listContent}>
            Чтобы отслеживать результаты и их изменения ежедневно и только по
            нужным вам запросам воспользуйтесь полной версией {""}
            <span className={`${styles.listSpan} ${styles.span}`}>
              wbassistent
            </span>
          </p>
        </li>
        <a className={styles.getFullAccessLink} href="/#">
          Получить полный доступ
        </a>
      </ul>
    </div>
  );
}

export default HowToUseSKUSearch;
