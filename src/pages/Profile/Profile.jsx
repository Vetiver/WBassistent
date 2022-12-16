import styles from "./Profile.module.css";
import { useState } from "react";
import Input from "../../components/Input/input";
import SubmitButton from "../../components/SubmitButton/submit-button";

function Profile() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const onInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <div className={styles.page}>
        <div>
          <form className={styles.form} onSubmit={"push"}>
            <h2>Настройки</h2>
            <Input
              placeholder="Название"
              size="medium"
              type="text"
              name={"first_name"}
              onChange={onInputChange}
            />
            <Input
              placeholder="E-mail"
              size="medium"
              type="email"
              name={"email"}
              onChange={onInputChange}
              required={true}
            />
            <SubmitButton content="Сохранить"></SubmitButton>
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
            <span>Поделиться:</span>
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
  );
}

export default Profile;
