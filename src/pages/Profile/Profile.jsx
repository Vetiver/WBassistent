import React, { useCallback, useState, useEffect } from "react";
import styles from "./Profile.module.css";
import Input from "../../components/Input/input";
import SubmitButton from "../../components/SubmitButton/submit-button";
import { useDispatch, useSelector } from "react-redux";
import {deleteCookie} from '../../utils/cookie';
import {LOGOUT_USER} from '../../utils/constants/auth';
import {DELETE_USER_DATA} from '../../utils/constants/user-data';


function Profile() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userDataReducer.userInfo);
  const isLogin = useSelector((state) => state.authReducer.isLogin);
  console.log(isLogin)
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const logoutFromAccount = () => { 
    window.location.reload();
    dispatch({type: DELETE_USER_DATA })
    localStorage.removeItem("refreshToken");
    deleteCookie("token");
  }

  const tryLogout = useCallback((e) => {
    logoutFromAccount();
    e.preventDefault();
  }, []);

  useEffect(() => {
    if(userInfo !== null) {
      setFormState({
        ...formState,
        email: userInfo.email,
        first_name: userInfo.first_name,
      });
    }
  }, [userInfo]);
  
  return (
    !!formState && (
    <section>
      <div className={styles.page}>
        <div className={styles.mainForms}>
          <form className={styles.form} onSubmit={"push"}>
            <h2>Настройки</h2>
            <Input
              placeholder={formState.first_name}
              size="medium"
              type="text"
              name={"first_name"}
              onChange={onInputChange}
            />
            <Input
              placeholder={formState.email}
              size="medium"
              type="email"
              name={"email"}
              onChange={onInputChange}
              required={true}
            />
            <div className={styles.buttons}>
            <SubmitButton content="Сохранить"></SubmitButton>
            <SubmitButton onClick={tryLogout} content="Выход"></SubmitButton>
            </div>
          </form>
          <form className={styles.form} onSubmit={"push"}>
            <h2>Wildberries</h2>
            <p>Как подключиться к WB Maneger?</p>

            <Input
              placeholder="Доступ к API"
              size="medium"
              type="text"
              name={"first_name"}
              onChange={onInputChange}
            />
            <Input
              placeholder="Доступ к новому API"
              size="medium"
              type="text"
              onChange={onInputChange}
              required={true}
            />
            <Input
              placeholder="ваш id"
              size="medium"
              type="password"
              onChange={onInputChange}
              required={true}
            />
            <SubmitButton content="Отправить запрос"></SubmitButton>
          </form>
          
        </div>
        <div className={styles.organization}>
          <form className={styles.page} action="">
            <span className={styles.span}>Поделиться:</span>
            <Input
              placeholder="Cсылка"
              size="medium"
              type="text"
              onChange={onInputChange}
              required={true}
            />
          </form>
          <h3>Организации</h3>
        </div>
      </div>
    </section>
    )
  );
}

export default Profile;
