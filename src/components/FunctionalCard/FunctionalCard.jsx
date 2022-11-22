import Styles from "./FunctionalCard.module.css";
import ArrowRight from "../../images/logos/arrow-right-black.svg";
import PlayIcon from "../../images/logos/play-icon.svg";

function FunctionalCard({ data }) {
  return (
    <li className={Styles.container}>
      <h3 className={Styles.title}>{data.title}</h3>
      <p className={Styles.content}>{data.content}</p>
      <div className={Styles.linksContainer}>
        <div className={Styles.linkContainer}>
          <img
            className={Styles.linksImg}
            src={ArrowRight}
            alt="Указатель на ссылку справа"
          />
          <p className={Styles.linksContent}>
            {data.function}:{" "}
            <a className={Styles.link} href={data.functionLink}>
              {data.title}
            </a>
          </p>
        </div>
        <div className={Styles.linkContainer}>
          <img
            className={Styles.linksImg}
            src={PlayIcon}
            alt="Значок запустить видео"
          />
          <a className={Styles.link} href={data.howToUseLink}>
            Видео, как работает {data.title}
          </a>
        </div>
      </div>
    </li>
  );
}

export default FunctionalCard;
