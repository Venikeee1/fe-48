import styles from './TItle.module.css';

export const Title = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
