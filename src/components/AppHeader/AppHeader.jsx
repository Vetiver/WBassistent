import React from "react";
import Style from "../AppHeader/AppHeader.module.css";
import { ReactComponent as ProfileLogo } from "../../images/logos/profile.svg";
import { ReactComponent as QuestionLogo } from "../../images/logos/question.svg";
import { useState, useRef } from "react";
import { useOnHoverOutside } from "../../hooks/useOnHoverOutside";
import Modal from "../Modal/Modal";

function AppHeader() {
  const dropdownRef = useRef(null);
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu);
  return (
    <header className={`${Style.headerContainer}`}>
      <div className={`${Style.header}`}>
        <div className={`${Style.first}`} ref={dropdownRef}>
          <p className={`${Style.logo}`}>LOGO</p>
          <p
            className={`${Style.navbar}`}
            onMouseOver={() => setMenuDropDownOpen(true)}
          >
            Навигация
            <span className={`${Style.span}`}>по критериям &#8595;</span>
          </p>
          {isMenuDropDownOpen && <Modal />}
        </div>
        <div className={`${Style.second}`}>
          <a className={`${Style.market}`} href="./#">
            <span className={`${Style.market}`}>Маркет</span>
          </a>
          <a className={`${Style.link}`} href="./#">
            <QuestionLogo className={`${Style.icon}`} />
          </a>
          <a className={`${Style.link}`} href="./#">
            <ProfileLogo className={`${Style.icon}`} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
