import styles from './CustomSearch.module.scss';
import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg';

type Props = {
  value: string;
  setValue: (str: string) => void;
  background?: string;
  placeholder?: string;
};

export const CustomSearch = ({
  background = 'rgba(249, 249, 251, 1)',
  placeholder = 'Поиск',
  value,
  setValue,
}: Props) => {
  return (
    <div
      className={styles['search']}
      style={{
        backgroundColor: background,
      }}
    >
      <SearchIcon />
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder={placeholder}
        style={{ backgroundColor: background }}
      />
    </div>
  );
};
