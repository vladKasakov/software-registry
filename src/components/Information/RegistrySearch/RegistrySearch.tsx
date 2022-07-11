import { useState } from 'react';
import { useAppDispatch } from '../../../hooks';
import { setFilter } from '../../../store/reducers/filterSlice';
import { setCurrentSoftwarePage } from '../../../store/reducers/softwareSlice';
import { Button } from '../../UI/Button';
import { CustomSearch } from '../../UI/CustomSearch';
import styles from './RegistrySearch.module.scss';

type Props = {};

export const RegistrySearch = (props: Props) => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(setFilter(value.toLowerCase()));
    dispatch(setCurrentSoftwarePage(1));
  };

  const handleClick = () => {
    dispatch(setFilter(value.toLowerCase()));
    dispatch(setCurrentSoftwarePage(1));
  };

  return (
    <form className={styles['registry-search']} onSubmit={handleSubmit}>
      <CustomSearch
        value={value}
        setValue={setValue}
        background="rgba(255, 255, 255, 1)"
        placeholder="Искать реестр..."
      />
      <Button
        label={'Искать'}
        color={'rgba(255, 255, 255, 1)'}
        background={'rgba(0, 156, 180, 1)'}
        width={120}
        height={56}
        onClick={handleClick}
      />
    </form>
  );
};
