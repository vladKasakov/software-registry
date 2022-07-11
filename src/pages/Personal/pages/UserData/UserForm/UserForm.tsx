import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { convertPhone } from '../../../../../tools';
import styles from './UserForm.module.scss';
import { PasswordInput } from './PasswordInput';
import { Button } from '../../../../../components/UI/Button';
import { IUser } from '../../../../../models';
import { changeUserInfo } from '../../../../../store/reducers/userSlice';

export const UserForm = () => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { name, surname, patronymic, country, city, phone, password } = user;

  const [nameValue, setNameValue] = useState(name);
  const [surnameValue, setSurnameValue] = useState(surname);
  const [patronymicValue, setPatronymicValue] = useState(patronymic);
  const [countryValue, setCountryValue] = useState(country);
  const [cityValue, setCityValue] = useState(city);
  const [phoneValue, setPhoneValue] = useState(convertPhone(phone));

  const [passwordValue, setPasswordValue] = useState(password);
  const [confirmValue, setConfirmValue] = useState(password);

  const handleSumbit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    saveChanges();
  };

  const saveChanges = () => {
    if (passwordValue === confirmValue) {
      const changedUser: IUser = {
        ...user,
        name: nameValue,
        surname: surnameValue,
        patronymic: patronymicValue,
        country: countryValue,
        city: cityValue,
        phone: phoneValue.slice(1),
      };
      dispatch(changeUserInfo(changedUser));
      alert('Изменения сохранены');
    } else {
      alert('Пароли не совпадают');
    }
  };

  return (
    <form className={styles['user-form']} onSubmit={handleSumbit}>
      <div className={styles.hl}></div>
      <div className={styles.main}>
        <h3>Основные данные</h3>
        <div className={styles['main-form']}>
          <div>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={'Имя'}
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <label htmlFor="name">Имя</label>
          </div>
          <div>
            <input
              type="text"
              name="surname"
              id="surname"
              placeholder={'Фамилия'}
              value={surnameValue}
              onChange={(e) => setSurnameValue(e.target.value)}
            />
            <label htmlFor="surname">Фамилия</label>
          </div>
          <div>
            <input
              type="text"
              name="patronymic"
              id="patronymic"
              placeholder={'Отчество'}
              value={patronymicValue}
              onChange={(e) => setPatronymicValue(e.target.value)}
            />
            <label htmlFor="patronymic">Отчество</label>
          </div>
          <div>
            <input
              type="text"
              name="country"
              id="country"
              placeholder={'Страна'}
              value={countryValue}
              onChange={(e) => setCountryValue(e.target.value)}
            />
            <label htmlFor="country">Страна</label>
          </div>
          <div>
            <input
              type="text"
              name="city"
              id="city"
              placeholder={'Город'}
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
            />
            <label htmlFor="city">Город</label>
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder={'Мобильный телефон'}
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
            />
            <label htmlFor="phone">Мобильный телефон</label>
          </div>
        </div>
      </div>
      <div className={styles.hl}></div>
      <div className={styles.password}>
        <h3>Пароль</h3>
        <div className={styles['password-form']}>
          <PasswordInput
            id={'password'}
            label={'Новый пароль'}
            value={passwordValue}
            setValue={setPasswordValue}
          />
          <PasswordInput
            id={'confirm'}
            label={'Подтверждение пароля'}
            value={confirmValue}
            setValue={setConfirmValue}
          />
        </div>
      </div>
      <div className={styles.hl}></div>
      <Button
        label={'Сохранить'}
        width={270}
        radius={'5px'}
        padding={'17px 0'}
      />
    </form>
  );
};
