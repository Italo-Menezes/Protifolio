import styles from "./Header.module.scss";
import { RiLinkedinFill, RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram, AiOutlineArrowDown } from "react-icons/ai";
import useSanityImage from "../../hooks/useSanityImage";
import Image from "next/image";

const Header = ({ header }) => {
  const { image, name, ocupation, summary } = header;

  const imageURl = useSanityImage();

  return (
    <>
      <header className={styles["header-wrapper"]}>
        <div className={styles.header}>
          <div className={styles.image}><Image  src={imageURl(image).url()} fill  alt="eae"/></div>
          <div className={styles.content}>
            <span>Olá &#x270B; meu nome é {name}. Sou um...</span>
            <h1>{ocupation}</h1>
            <p>
             {summary}
            </p>
          </div>
          <div className={styles.social}>
            <a href="#">
              <RiLinkedinFill className={styles.icon} />
            </a>
            <a href="#">
              <AiFillInstagram className={styles.icon} />
            </a>
            <a href="#">
              <RiWhatsappFill className={styles.icon} />
            </a>
          </div>
          <a href="#" className={styles.arrow}>
            <AiOutlineArrowDown className={styles.icon} />
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
