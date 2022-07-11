import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../UI/Container';
import styles from './LoginForm.module.scss';
import { ReactComponent as ArrowLeft } from '../../assets/svg/arrow-left.svg';
import { CustomCheckbox } from '../UI/CustomCheckbox';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';

export const LoginForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  const toggleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };

  const sendRequestToServer = () => {
    //имитируем отправку данных на сервер и проверку введенных данных
    if (nameValue === user.login && passwordValue === user.password) {
      if (isChecked) {
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
      } else {
        sessionStorage.setItem('isLoggedIn', JSON.stringify(true));
      }
      window.dispatchEvent(
        new StorageEvent('storage', {
          key: '',
          newValue: '',
        })
      );
      navigate('/');
    } else {
      alert(
        'неправильный логин или пароль (аккаунт для тестирования 3axaar 12345)'
      );
    }
  };

  const handleSumbit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    sendRequestToServer();
  };

  const forgotPassword: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    alert('Аккаунт для тестирования 3axaar 12345');
  };

  return (
    <div className={styles.auth}>
      <Container>
        <div className={styles.wrapper}>
          <Link to={'/'} className={styles['to-home']}>
            <ArrowLeft />
            <span>Главная</span>
          </Link>
          <div className={styles['inner-wrapper']}>
            <h2>Авторизация</h2>
            <form onSubmit={handleSumbit}>
              <div className={styles['form-row']}>
                <input
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Введите имя"
                  autoComplete={'off'}
                />
                <label htmlFor="name">Имя</label>
              </div>
              <div className={styles['form-row']}>
                <input
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Введите пароль"
                  autoComplete={'off'}
                />
                <label htmlFor="password">Пароль</label>
              </div>
              <CustomCheckbox
                isChecked={isChecked}
                toggle={toggleCheckbox}
                label="Запомнить меня на этом компьютере"
              />
              <input type="submit" value="Вход" />
            </form>
            <a href="" className={styles.forgot} onClick={forgotPassword}>
              Забыли свой пароль?
            </a>
            <div className={styles['additional-auth']}>
              <button>Авторизация с использованием ЕС ИФЮЛ</button>
              <button>Авторизация с использованием МСИ</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
