import React from "react";
import Style from "../Footer/Footer.module.css";
import { ReactComponent as Sber } from "../../images/logos/sber.svg";
import { ReactComponent as Visa } from "../../images/logos/visa.svg";
import { ReactComponent as Mir } from "../../images/logos/mir.svg";
import { ReactComponent as Maestro } from "../../images/logos/maestro.svg";


function Footer() {
  return (
  <footer className={`${Style.footer}`}>
    <h2 className={`${Style.title}`}>Карта сайта</h2>
    <div className={`${Style.infoContainer}`}>
      <p className={`${Style.infoWB}`}>Все логотипы и товарные знаки Wildberries TM, отображаемые в этом приложении, являются собственностью Wildberries. Поставщик услуг: 125008, Москва, Михалковская 8 к.2 ИНН 550201247998</p>
      <p className={`${Style.userAgreement}`}>Пользовательское соглашение Политика оплаты и возврата</p>
      <div className={`${Style.sberContent}`}>
        <Sber className={`${Style.icon}`}/>
        <p className={`${Style.sberText}`}>Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:</p>
      </div>
      <div className={`${Style.group}`}>
        <Visa className={`${Style.icon}`}/>
        <Mir className={`${Style.icon}`}/>
        <Maestro className={`${Style.icon}`}/>
      </div>
    </div>

  </footer>
  );
}

export default Footer;
