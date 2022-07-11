import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IDocument } from '../../models';
import { setCurrentDocumentPage } from '../../store/reducers/documentSlice';
import { ConvertSizeToMb } from '../../tools';
import { Container } from '../UI/Container';
import { Pagination } from '../UI/Pagination';
import styles from './Documents.module.scss';
import { ReactComponent as DownloadIcon } from '../../assets/svg/download.svg';
import { ReactComponent as PaperIcon } from '../../assets/svg/paper.svg';

export const Documents = () => {
  const { data, columns, currentPage, perPage } = useAppSelector(
    (state) => state.document
  );
  const dispatch = useAppDispatch();

  const documentsRef = useRef<HTMLDivElement>(null);
  const elementsCount = useRef(data.length);

  function getNeededDocuments(
    documents: IDocument[],
    page: number,
    perPage: number
  ): IDocument[] {
    elementsCount.current = documents.length;
    const allNeededDocuments = documents.slice(
      (page - 1) * perPage,
      page * perPage
    );

    return allNeededDocuments;
  }

  const setPage = (num: number): void => {
    dispatch(setCurrentDocumentPage(num));
  };

  return (
    <div className={styles.documents}>
      <Container>
        <div className={styles.wrapper} id={'documents'} ref={documentsRef}>
          <h2>Документы</h2>
          <span>
            Всего документов: <span>{data.length}</span>
          </span>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.filtered}>{columns.category}</th>
                <th className={styles.filtered}>{columns.name}</th>
                <th>{columns.date}</th>
                <th>{columns.number}</th>
                <th className={styles.download}>
                  <PaperIcon />
                  {columns.address}
                </th>
              </tr>
            </thead>
            <tbody>
              {getNeededDocuments(data, currentPage, perPage).map((d) => {
                return (
                  <tr key={d.id}>
                    <td>{d.category}</td>
                    <td>{d.name}</td>
                    <td>{d.date}</td>
                    <td>{d.number}</td>
                    <td className={styles.download}>
                      <a href={d.link} download="">
                        <DownloadIcon />
                        Скачать
                        <br />({ConvertSizeToMb(d.size)})
                      </a>
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
            target={documentsRef}
            scrollToTop={true}
          />
        </div>
      </Container>
    </div>
  );
};
