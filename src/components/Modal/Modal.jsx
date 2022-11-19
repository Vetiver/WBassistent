import React from "react";
import ReactDOM from "react-dom";
import Style from "../Modal/Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
const modalRoot = document.getElementById("modal-root");

function Modal() {
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div className={`${Style.modal}`}>
      <div className={`${Style.group}`}>
        <h3 className={`${Style.title}`}>Управление товарами</h3>
        <p className={`${Style.chapter}`}>Изменить данные одного товара</p>
        <p className={`${Style.chapter}`}>Контроль работы с карточкой</p>
        <p className={`${Style.chapter}`}>Выгрузить все данные товаров</p>
      </div>
      <div className={`${Style.group}`}>
        <h3 className={`${Style.title}`}>Работа с клиентами</h3>
        <p className={`${Style.chapter}`}>Автоответы на отзывы</p>
        <p className={`${Style.chapter}`}>Работа с вопросами</p>
        <p className={`${Style.chapter}`}>Контроль возвратов FBS</p>
      </div>
      <div className={`${Style.group}`}>
        <h3 className={`${Style.title}`}>Любые отчеты</h3>
        <p className={`${Style.chapter}`}>Получить габариты товаров</p>
        <p className={`${Style.chapter}`}>Статистика продаж</p>
        <p className={`${Style.chapter}`}>Выгрузка заказов</p>
      </div>
      <div className={`${Style.group}`}>
        <h3 className={`${Style.title}`}>Рост продаж</h3>
        <p className={`${Style.chapter}`}>Все товары без продаж</p>
        <p className={`${Style.chapter}`}>Рост продаж по артикулу</p>
        <p className={`${Style.chapter}`}>Сравнить себя с конкурентами</p>
        <p className={`${Style.chapter}`}>География продаж</p>
        <p className={`${Style.chapter}`}>Видимость товара</p>
        <p className={`${Style.chapter}`}>Подбор ключевых слов</p>
        <p className={`${Style.chapter}`}>Проверка карточки SEO</p>
      </div>
      <div className={`${Style.group}`}>
        <h3 className={`${Style.title}`}>Работа с поставками</h3>
        <p className={`${Style.chapter}`}>Поиск поставки по ШК</p>
        <p className={`${Style.chapter}`}>План поставок (автозаказы)</p>
        <p className={`${Style.chapter}`}>Контроль остатков</p>
        <p className={`${Style.chapter}`}>Массовое обсудение остатков</p>
      </div>
      <div className={`${Style.group}`}>
        <h3 className={`${Style.title}`}>Финансы маркетплейса</h3>
        <p className={`${Style.chapter}`}>Расшифровка отчета детализации</p>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
