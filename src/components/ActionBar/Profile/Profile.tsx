import styles from './Profile.module.scss';
import { ReactComponent as UpperArrow } from '../../../assets/svg/upper-arrow.svg';
import { ReactComponent as UserIcon } from '../../../assets/svg/user.svg';
import { useAppSelector, useLoggedIn } from '../../../hooks';
import { useState } from 'react';
import cn from 'classnames';
import { Link, useNavigate } from 'react-router-dom';

export const Profile = () => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const { avatar, name } = user;

  const isLoggedIn = useLoggedIn();

  const [isShowDropDown, setIsShowDropDown] = useState(false);

  const handleClick = () => {
    if (isLoggedIn) {
      toggleDropDown();
    } else {
      navigate('login');
    }
  };

  const toggleDropDown = () => {
    setIsShowDropDown((prev) => !prev);
  };

  const signOut = () => {
    setIsShowDropDown(false);
    sessionStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isLoggedIn');
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: '',
        newValue: '',
      })
    );
    navigate('/');
  };

  const goToPersonalArea = () => {
    toggleDropDown();
    navigate('/personal/data');
  };

  return (
    <div
      className={cn({
        [styles.dropdown]: true,
        [styles.showed]: isShowDropDown,
      })}
    >
      <div className={styles.person} onClick={handleClick}>
        {isLoggedIn ? (
          <div className={styles['avatar-container']}>
            <img src={avatar} alt={`${name}'s avatar`} />
          </div>
        ) : (
          <div className={styles['avatar-container']}>
            <UserIcon />
          </div>
        )}

        {isLoggedIn ? (
          <span>{`${user.name} ${user.surname}`}</span>
        ) : (
          <span>Вход в аккаунт</span>
        )}

        <div className={styles['arrow-container']}>
          {isLoggedIn && <UpperArrow className={styles.arrow} />}
        </div>
      </div>
      <div className={styles['dropdown-menu']}>
        <Link to="/personal"></Link>
        <button onClick={goToPersonalArea}>Личный кабинет</button>
        <button onClick={signOut}>Выход</button>
      </div>
    </div>
  );
};
