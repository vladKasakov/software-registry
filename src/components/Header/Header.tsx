import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Container } from '../UI/Container';
import { CustomSearch } from '../UI/CustomSearch';
import { ActionBar } from '../ActionBar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles['inner-wrapper']}>
          <div className={styles['logo-container']}>
            <Link to="/">
              <Logo />
            </Link>
            <CustomSearch value={value} setValue={setValue} />
          </div>
          <ActionBar />
        </div>
      </Container>
    </div>
  );
};
