import useSanityImage from "src/hooks/useSanityImage";
import styles from "./about.module.scss";
import Image from "next/image";
import Box from "../UI/Box";

const About = ({ about }) => {
  const { image, title, text, button, url } = about;

  const renderBio = text.map((text) => <p key={text._key}>{text.paragraph}</p>);

  const imageURl = useSanityImage();

  return (
    <section className={styles.about}>
      <div className={styles.image} >
       <Image  src={imageURl(image).url()} fill  alt="ola"/> 
      <div className={styles.box} >
        <Box text="Sobre"/>
      </div>
      </div>
      <div className={styles.content}>
        <h2 className>{title}</h2>
        {renderBio}

        <a href={url} className="btn btn-primary">
          {button}
        </a>
      </div>
    </section>
  );
};

export default About;
