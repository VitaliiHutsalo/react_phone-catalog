import style from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.overlay}>
      <span className={style.loader}></span>
    </div>
  );
};
