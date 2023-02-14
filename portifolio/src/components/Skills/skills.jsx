import Experience from "./experience";
import styles from "./skills.module.scss";

const Skills = ({ skills }) => {
  const {
    title,
    subtitle,
    skills_title,
    skills_list,
    experience_title,
    experience,
  } = skills;

  const handleSkills = skills_list.map((skill) => {
     return <li key={skill._key} className="h5">
      {skill.skill}
    </li>;
  });


  const renderExperience = experience.map((exp) => {
    return <Experience key={exp._key} experience={exp} />;
  });

  return (
    <section className={styles.section}>
      <div className={styles.skills}>
        <div className={styles.heading}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className={styles.content}>
          <h3>{skills_title}</h3>
          <ul>{handleSkills}</ul>
        </div>
      </div>
      <div className={styles.expirences}>
        <h3>{experience_title}</h3>
        <ul>
        {renderExperience}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
