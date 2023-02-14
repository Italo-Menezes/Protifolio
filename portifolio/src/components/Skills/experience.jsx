import styles from "./experience.module.scss"


const Experience = ({experience}) => {
  const {experience:title, company, period} = experience
  return (
    <>
      <li className={styles.expirence}>
        <div className={styles.period}>{period}</div>
        <div className={styles.descripiton}>
          <h4>{title}</h4>
          <h5>{company}</h5>
        </div>
      </li>
    </>
  );
};

export default Experience;
