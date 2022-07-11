import styles from './Container.module.scss';

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};
