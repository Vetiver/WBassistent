import Style from "../DropDownMenu/DropDownMenu.module.css";
import Menu from "../Menu/Menu";

function DropDownMenu() {
  return (
    <div className={`${Style.DropDownMenu}`}>
      <Menu />
    </div>
  );
}

export default DropDownMenu;
