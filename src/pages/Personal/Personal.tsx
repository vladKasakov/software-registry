import { Outlet } from 'react-router-dom';
import { Container } from '../../components/UI/Container';
import styles from './Personal.module.scss';
import { PersonalNav } from './PersonalNav';

export const Personal = () => {
  return (
    <div className={styles.personal}>
      <Container>
        <div className={styles.wrapper}>
          <h2>Личный кабинет</h2>
          <div className={styles['inner-wrapper']}>
            <PersonalNav />
            <Outlet />
          </div>
        </div>
      </Container>
    </div>
  );
};
