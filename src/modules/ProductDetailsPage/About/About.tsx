import React from 'react';
import styles from './About.module.scss';
import { Description } from '@models/dto/Description';

interface Props {
  description: Description[];
}

export const About: React.FC<Props> = ({ description }) => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutHead}>
        <h3>About</h3>
        <hr />
      </div>

      {description.map(section => (
        <div key={section.title} className={styles.aboutMain}>
          <h4>{section.title}</h4>

          <div className={styles.aboutMainText}>{section.text}</div>
        </div>
      ))}
    </div>
  );
};
