import { useAppSelector } from '../../../../hooks';
import styles from './UserData.module.scss';
import { UserForm } from './UserForm';

export const UserData = () => {
  const { user } = useAppSelector((state) => state.user);
  const { avatar, name } = user;

  return (
    <div className={styles['user-data']}>
      <div className={styles.greeting}>
        <div className={styles['avatar-container']}>
          <img src={avatar} alt={`${name}'s avatar`} />
        </div>
        <span>{`Здравствуй, ${name}!`}</span>
      </div>
      <UserForm />
    </div>
  );
};
