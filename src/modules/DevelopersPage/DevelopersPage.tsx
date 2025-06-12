import React from 'react';
import styles from './DeveloperPage.module.scss';
import { ReactComponent as GitHubIcon } from '@assets/icons/github.svg';
import { ReactComponent as LinkedInIcon } from '@assets/icons/linkedin.svg';
import photoVitalii from '@assets/photoDev/Vitalii.jpg';
import photoNazar from '@assets/photoDev/Nazar.jpg';
import photoRoman from '@assets/photoDev/Roman.jpg';
// import photoMax from '@assets/photoDev/Max.jpg';
import photoVlad from '@assets/photoDev/Vlad.png';

type Developer = {
  name: string;
  photo: string;
  github?: string;
  linkedin?: string;
  hobbies: string[];
};
const developers: Developer[] = [
  {
    name: 'Nazar Ivanchenko',
    photo: photoNazar,
    github: 'https://github.com/Iwantschenko',
    linkedin: 'https://www.linkedin.com/in/nazar-ivanchenko-006b44360/',
    hobbies: ['Fishing, Gaming, Working out'],
  },
  {
    name: 'Roman Ohirok',
    photo: photoRoman,
    github: 'https://github.com/R-Ohirok',
    linkedin: 'https://www.linkedin.com/in/roman-o-b57838360/',
    hobbies: ['Reading, Working out, Traveling'],
  },
  {
    name: 'Vitalii Hutsalo',
    photo: photoVitalii,
    github: 'https://github.com/VitaliiHutsalo',
    linkedin: 'https://www.linkedin.com/in/vitalii-hutsalo-aa379322a/',
    hobbies: ['Cooking, Traveling, Music'],
  },
  {
    name: 'Vladyslav Rozmarytsia',
    photo: photoVlad,
    github: 'https://github.com/VladRoz95',
    linkedin: 'https://www.linkedin.com/in/vladyslav-rozmarytsia-394968360/',
    hobbies: ['Movies, Serials, Games'],
  },
  // {
  //   name: 'Maksym Kostiv',
  //   photo: photoMax,
  //   github: '',
  //   linkedin: '',
  //   hobbies: ['???'],
  // },
];

export const DeveloperPage: React.FC = () => {
  return (
    <section className={styles.developerPage}>
      <div className={styles.developerPageContainer}>
        <h1 className={styles.developerPageTitle}>Creators</h1>

        <div className={styles.developerPageList}>
          {developers.map(dev => (
            <div className={styles.developerPageCard} key={dev.name}>
              <img
                src={dev.photo}
                alt={dev.name}
                className={styles.developerPagePhoto}
              />

              <div className={styles.developerPageInfo}>
                <p className={styles.developerPageName}>{dev.name}</p>

                <hr className={styles.separatorLine} />

                <div className={styles.developerPageLinks}>
                  {dev.github && (
                    <a
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.developerPageLink}
                    >
                      <span className={styles.linkName}>GitHub</span>
                      <GitHubIcon className={styles.developerPageIcon} />
                    </a>
                  )}

                  {dev.linkedin && (
                    <a
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.developerPageLink}
                    >
                      <span className={styles.linkName}>LinkedIn</span>
                      <LinkedInIcon className={styles.developerPageIcon} />
                    </a>
                  )}
                </div>

                <hr className={styles.separatorLine} />

                <div className={styles.developerPageHobbies}>
                  <h3>Hobbies:</h3>
                  <span className={styles.hobbiesText}>{dev.hobbies}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
