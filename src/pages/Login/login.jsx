import FunctionalCardsList from "../../components/FunctionalCardsList/FunctionalCardsList";
import Input from "../../components/Input/input";
import SliderCard from "../../components/SliderCard/slider-card";
import SubmitButton from "../../components/SubmitButton/submit-button";
import styles from "./login.module.css";

function Login() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.title}>Вход</h1>
        <div className={styles.gridContainer}>
          <form className={styles.form} action="">
            <Input
              placeholder="Телефон 7xxxxxxxxxx"
              size="medium"
              type="text"
            />
            <Input placeholder="E-mail" size="medium" type="email" />
            <Input placeholder="Пароль" size="medium" type="password" />
            <div className={styles.buttonContainer}>
              <h2 className={styles.subtitle}>Впервые на сайте?</h2>
              <SubmitButton
                type="primary"
                size="medium"
                content="Авторизоваться"
              />
            </div>
          </form>
          <SliderCard />
        </div>
      </div>
    </section>
  );
}

export default Login;
