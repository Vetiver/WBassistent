import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, Redirect, useHistory } from "react-router-dom";
import Input from "../../components/Input/input";
import SliderCard from "../../components/SliderCard/slider-card";
import SubmitButton from "../../components/SubmitButton/submit-button";
import { getData, setRegister } from "../../services/actions/auth";
import styles from "./register-page.module.css";

function RegisterPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  const hasError = useSelector((state) => state.authReducer.hasError);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const registerUser = (form) => {
    dispatch(setRegister(form));
  };

  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const push = useCallback(
    (e) => {
      e.preventDefault();
      registerUser(formState);
      setTimeout(() => {if (hasError === false) {
        history.push("/profile");
      }}, (1000))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formState]
  );

  return (
    <section className={styles.section}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.title}>Регистрация</h1>
        <div className={styles.gridContainer}>
          <form className={styles.form} onSubmit={push}>
            <Input
              placeholder="E-mail"
              size="medium"
              type="email"
              name={"email"}
              onChange={onInputChange}
              required={true}
            />
            <Input
              placeholder="Пароль"
              size="medium"
              type="password"
              name={"password"}
              onChange={onInputChange}
              minLength="8"
            />
            <Input
              placeholder="Имя"
              size="medium"
              type="text"
              name={"first_name"}
              onChange={onInputChange}
            />
            <Input
              placeholder="Фамилия"
              size="medium"
              type="text"
              name={"last_name"}
              onChange={onInputChange}
            />
            <div className={styles.isRegister}>
              <h2 className={styles.subtitle}>Уже зарегистрированы?</h2>
              <Link to="/login" className={styles.linkComponent}>
                Авторизоваться
              </Link>
            </div>
            {hasError ?
            <SubmitButton
              type="primary"
              size="medium"
              content="Ошибка при регистрации"
            />
            :
            <SubmitButton
            type="primary"
            size="medium"
            content="Зарегистрироваться"
          />}
           
          </form>
          <SliderCard className={styles.splide} />
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
