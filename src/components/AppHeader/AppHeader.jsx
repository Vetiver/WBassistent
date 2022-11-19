import React from "react";
import Style from "../AppHeader/AppHeader.module.css";
import { ReactComponent as QuestionSvg } from "../../../src/Group.svg";
import { ReactComponent as PersonLogoSvg } from "../../../src/preson1.svg";
import { useDispatch, useSelector } from "react-redux";
import {POPUP_IS_OPEN} from '../../services/reducers/mainReduser.jsx';

function AppHeader(props) {
	const isOpen = useSelector((state) => state.mainReduser.IsOpen)
	const dispanch = useDispatch()
	function open() {
		dispanch({
      type: POPUP_IS_OPEN,
    })
		console.log(isOpen)
	}
  return (
    <header className={`${Style.header}`}>
      <div className={`${Style.first}`}>
        <p className={`${Style.logo}`}>LOGO</p>
        <button className={`${Style.button}`} onClick={open}>
          Навигация
          <span className={`${Style.span}`}>по критериям&#8595;</span>
        </button>
      </div>
      <div className={`${Style.second}`}>
        <button className={`${Style.button}`}>
          <span className={`${Style.marcket}`}>Маркет</span>
        </button>
        <button className={`${Style.button}`}>
          <QuestionSvg />
        </button>
        <button className={`${Style.button}`}>
          <PersonLogoSvg />
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
