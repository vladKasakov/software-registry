import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { removeNotification } from '../../../../store/reducers/userSlice';
import styles from './Notifications.module.scss';

export const Notifications = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { notifications } = user;

  const deleteNotification = (id: number) => {
    dispatch(removeNotification(id));
  };

  return (
    <div className={styles.notifications}>
      {notifications.map((n) => (
        <div
          className={styles.notification}
          key={n.id}
          onClick={() => deleteNotification(n.id)}
        >
          {n.title}
        </div>
      ))}
    </div>
  );
};
