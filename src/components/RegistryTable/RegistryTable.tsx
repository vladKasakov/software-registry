import { Container } from '../UI/Container';
import styles from './RegistryTable.module.scss';
import { ReactComponent as ArrowLeftRight } from '../../assets/svg/arrow-left-right.svg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IRow, TableMode } from '../../models';
import { Pagination } from '../UI/Pagination';
import { setCurrentSoftwarePage } from '../../store/reducers/softwareSlice';
import cn from 'classnames';
import { useRef, useState } from 'react';

export const RegistryTable = () => {
  const { registrySearch } = useAppSelector((state) => state.filter);
  const { headers, data, perPage, currentPage } = useAppSelector(
    (state) => state.software
  );

  const [keyOrderMode, setKeyOrderMode] = useState<TableMode>('ascending');
  const [nameOrderMode, setNameOrderMode] = useState<TableMode>('none');

  const toggleKeyOrder = () => {
    setNameOrderMode('none');

    let mode: TableMode =
      keyOrderMode === 'none'
        ? 'ascending'
        : keyOrderMode === 'ascending'
        ? 'descending'
        : 'ascending';

    setKeyOrderMode(mode);
  };

  const toggleNameOrder = () => {
    setKeyOrderMode('none');

    let mode: TableMode =
      nameOrderMode === 'none'
        ? 'ascending'
        : nameOrderMode === 'ascending'
        ? 'descending'
        : 'ascending';

    setNameOrderMode(mode);
  };

  const dispatch = useAppDispatch();
  const tableRef = useRef<HTMLDivElement | null>(null);
  const elementsCount = useRef(data.length);

  const sortSoftware = (software: IRow[]): IRow[] => {
    let softwareCopy = [...software];

    switch (keyOrderMode) {
      case 'none':
        break;
      case 'ascending':
        softwareCopy = softwareCopy.sort((a, b) => a.key - b.key);
        break;
      case 'descending':
        softwareCopy.sort((a, b) => b.key - a.key);
    }

    switch (nameOrderMode) {
      case 'none':
        break;
      case 'ascending':
        softwareCopy.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      case 'descending':
        softwareCopy.sort((a, b) => (a.name < b.name ? 1 : -1));
        break;
    }

    return softwareCopy;
  };

  const getNeededSoftware = (
    software: IRow[],
    filter: string,
    page: number,
    perPage: number
  ): IRow[] => {
    const allNeededSoftware = sortSoftware(software).filter((sf) =>
      sf.name.toLowerCase().includes(filter)
    );
    elementsCount.current = allNeededSoftware.length;

    return allNeededSoftware.slice((page - 1) * perPage, page * perPage);
  };

  const setPage = (num: number): void => {
    dispatch(setCurrentSoftwarePage(num));
  };

  return (
    <div className={styles.registry}>
      <Container>
        <div className={styles.wrapper} id={'registry'} ref={tableRef}>
          <h2>Реестры</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th
                  className={cn(styles.filtered, styles.key)}
                  onClick={toggleKeyOrder}
                >
                  <ArrowLeftRight />
                  {headers.key}
                </th>
                <th
                  className={cn(styles.filtered, styles.name)}
                  onClick={toggleNameOrder}
                >
                  <ArrowLeftRight />
                  {headers.name}
                </th>
                <th>{headers.code}</th>
                <th className={styles.class}>{headers.class}</th>
                <th>{headers.date}</th>
                <th>{headers.link}</th>
              </tr>
            </thead>
            <tbody>
              {getNeededSoftware(
                data,
                registrySearch,
                currentPage,
                perPage
              ).map((c) => {
                return (
                  <tr key={c.key}>
                    <td>#{c.key}</td>
                    <td>{c.name}</td>
                    <td>{c.code}</td>
                    <td>{c.class}</td>
                    <td>{c.date}</td>
                    <td>
                      <a href={c.link}>Cсылка</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            currentPage={currentPage}
            elementsCount={elementsCount.current}
            perPage={perPage}
            setCurrentPage={setPage}
            target={tableRef}
            scrollToTop={true}
          />
        </div>
      </Container>
    </div>
  );
};
