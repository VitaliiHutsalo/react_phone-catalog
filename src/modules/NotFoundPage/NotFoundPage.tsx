import styles from './NotFoundPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { DefaultButton } from 'modules/_shared/components/atoms/DefaultButton';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <video
          src="/img/pageNotFound/vecteezy.mp4"
          autoPlay
          muted
          loop
          playsInline
          className={styles.video}
        />

        <h1 className={styles.title}>
          Looks like you’ve <br /> wandered off the map.
        </h1>

        <div className={styles.backButton}>
          <DefaultButton click={() => navigate(-1)}>← Back</DefaultButton>
        </div>
      </div>
    </div>
  );
};
