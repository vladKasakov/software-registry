import styles from './ActionBar.module.scss';
import cn from 'classnames';
import { ReactComponent as Calendar } from '../../assets/svg/calendar.svg';
import { ReactComponent as Bell } from '../../assets/svg/bell.svg';
import { Profile } from './Profile';
import { useAppSelector, useLoggedIn } from '../../hooks';
import { useNavigate } from 'react-router-dom';

export const ActionBar = () => {
  const { user } = useAppSelector((state) => state.user);

  const { notifications } = user;
  const hasNotifications = notifications && notifications.length > 0;

  const isLoggedIn = useLoggedIn();

  const navigate = useNavigate();

  const goToNotificationPage = () => {
    navigate('/personal/notifications');
  };

  return (
    <div className={styles.actions}>
      {isLoggedIn && (
        <>
          <div className={styles['svg-container']}>
            <Calendar />
          </div>
          <div
            className={styles['svg-container']}
            onClick={goToNotificationPage}
          >
            <Bell
              className={cn({
                [styles['has-notifications']]: hasNotifications,
              })}
            />
            {hasNotifications && (
              <div className={styles['notif-count']}>
                <span>{user.notifications.length}</span>
              </div>
            )}
          </div>
          <div className={styles.vl} />
        </>
      )}
      <Profile />
    </div>
  );
};
