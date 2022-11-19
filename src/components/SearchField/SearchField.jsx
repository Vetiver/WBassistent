import styles from "./SearchField.module.css";
import MagnifyingGlass from "../../images/logos/magnifying-glass.svg";

function SearchField() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Поиск товара по артикулу</h1>
      <form className={styles.form} action="submit">
        <label className={styles.label} for="search-input">
          <img className={styles.logo} src={MagnifyingGlass} alt="Лупа" />
          <input
            className={styles.input}
            type="text"
            placeholder="Введите артикул товара"
          />
        </label>
        <button className={styles.submitButton} type="submit">
          Проверить
        </button>
      </form>
    </div>
  );
}

export default SearchField;
