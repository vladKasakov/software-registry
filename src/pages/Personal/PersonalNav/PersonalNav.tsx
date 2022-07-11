import { NavLink, useNavigate } from 'react-router-dom';
import styles from './PersonalNav.module.scss';
import { ReactComponent as UserIcon } from '../../../assets/svg/user.svg';
import { ReactComponent as BellIcon } from '../../../assets/svg/bell.svg';
import { ReactComponent as NoteIcon } from '../../../assets/svg/note-bookmark.svg';
import { ReactComponent as PaperIcon } from '../../../assets/svg/paper.svg';
import { ReactComponent as LockIcon } from '../../../assets/svg/lock-closed.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/svg/download.svg';
import { ReactComponent as LogoutIcon } from '../../../assets/svg/logout.svg';

export const PersonalNav = () => {
  const navigate = useNavigate();

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.active : undefined;

  const signOut = () => {
    sessionStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isLoggedIn');
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: '',
        newValue: '',
      })
    );
    navigate('/')
  };

  return (
    <nav className={styles['personal-navigation']}>
      <NavLink to={'data'} className={setActive}>
        <UserIcon />
        <span>Мои данные</span>
      </NavLink>
      <NavLink to={'notifications'} className={setActive}>
        <BellIcon />
        <span>Уведомления</span>
      </NavLink>
      <NavLink to={'registry'} className={setActive}>
        <NoteIcon />
        <span>Реестры</span>
      </NavLink>
      <NavLink to={'metadata'} className={setActive}>
        <PaperIcon />
        <span>Метаданные</span>
      </NavLink>
      <NavLink to={'security'} className={setActive}>
        <LockIcon />
        <span>Безопасность</span>
      </NavLink>
      <NavLink to={'downloads'} className={setActive}>
        <DownloadIcon />
        <span>Мои загрузки</span>
      </NavLink>
      <button onClick={signOut}>
        <LogoutIcon />
        <span>Выход</span>
      </button>
    </nav>
  );
};
