import styles from "./input.module.css";

function Input({ placeholder, size = 'large' }) {
  return (
    <label className={styles.label}>
      <input
        className={`${styles.input} ${styles[size]}`}
        placeholder={placeholder}
      />
    </label>
  );
}

export default Input;
