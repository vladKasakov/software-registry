import { ReactComponent as OfficeWork } from '../../assets/office-work.svg';
import { getRightholderCount, getSoftwareCount } from '../../tools';
import { Container } from '../UI/Container';
import styles from './Information.module.scss';
import { RegistrySearch } from './RegistrySearch';

type Props = {};

export const Information = (props: Props) => {
  return (
    <div className={styles.information}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.info}>
            <h1>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
            <p>
              Единый реестр программ для электронных вычислительных машин и баз
              данных
            </p>
            <p>
              Включено ПО в реестр: <span>{getSoftwareCount()}</span>
              <br /> Правообладателей: <span>{getRightholderCount()}</span>
            </p>
            <RegistrySearch />
          </div>
          <div className={styles['office-icon']}>
            <OfficeWork />
          </div>
        </div>
      </Container>
    </div>
  );
};
