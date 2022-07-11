import styles from './CustomCheckbox.module.scss';

type Props = {
  label: string;
  isChecked: boolean;
  toggle: () => void;
};

export const CustomCheckbox = ({ label, isChecked, toggle }: Props) => {
  return (
    <div className={styles.checkbox}>
      <input
        checked={isChecked}
        onChange={toggle}
        type="checkbox"
        name="remember"
        id="remember"
      />
      <label htmlFor="remember">{label}</label>
    </div>
  );
};
