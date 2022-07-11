import styles from './PasswordInput.module.scss';
import { ReactComponent as EyeSlash } from '../../../../../../assets/svg/eye-slash.svg';
import { useState } from 'react';

type Props = {
  value: string;
  setValue: (str: string) => void;
  label: string;
  id: string;
};

export const PasswordInput = ({ value, label, id, setValue }: Props) => {
  const [isShow, setIsShow] = useState(false);

  const toggle = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <div className={styles['password-input']}>
      <div>
        <input
          type={isShow ? 'text' : 'password'}
          name={id}
          id={id}
          placeholder={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className={styles['svg-container']} onClick={toggle}>
          <EyeSlash />
        </div>
      </div>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
