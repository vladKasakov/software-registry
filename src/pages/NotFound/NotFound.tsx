import styles from './NotFound.module.scss';
import { Container } from '../../components/UI/Container';
import { Link } from 'react-router-dom';
import { Button } from '../../components/UI/Button';

type Props = {};

export const NotFound = (props: Props) => {
  return (
    <div className={styles['not-found']}>
      <Container>
        <div className={styles.wrapper}>
          <span>404</span>
          <h1>Page Not Found</h1>
          <p>The page you're looking for does not exist or is unavailable</p>
          <Link to="/">
            <Button label='Back to home page' width={180} radius={'5px'} padding={'10px 10px'}/> 
          </Link>
        </div>
      </Container>
    </div>
  );
};
