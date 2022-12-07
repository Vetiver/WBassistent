import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../../components/Input/input";
import SliderCard from "../../components/SliderCard/slider-card";
import SubmitButton from "../../components/SubmitButton/submit-button";
import { authenticateUser } from "../../services/actions.js/auth";
import styles from "./login.module.css";

function Login() {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const registerUser = (form) => {
    dispatch(authenticateUser(form));
  };

  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const push = useCallback(
    (e) => {
      e.preventDefault();
      registerUser(formState);
      console.log(formState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formState]
  );

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.title}>Вход</h1>
        <div className={styles.gridContainer}>
          <form className={styles.form} onSubmit={push}>
            {/* <Input
              placeholder="Телефон 7xxxxxxxxxx"
              size="medium"
              type="text"
              name='number'
            /> */}
            <Input
              placeholder="E-mail"
              size="medium"
              type="email"
              name='email'
              onChange={onInputChange}
            />
            <Input
              placeholder="Пароль"
              size="medium"
              type="password"
              name='password'
              onChange={onInputChange}
            />
            <div className={styles.isRegister}>
              <h2 className={styles.subtitle}>Впервые на сайте?</h2>
              <Link to="/register" className={styles.linkComponent}>
                Зарегистрироваться
              </Link>
            </div>
            <SubmitButton
              type="primary"
              size="medium"
              content="Авторизоваться"
            />
          </form>
          <SliderCard />
        </div>
      </div>
    </section>
  );
}

export default Login;
