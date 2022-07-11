import styles from './Pagination.module.scss';
import { ReactComponent as Arrow } from '../../../assets/svg/upper-arrow.svg';
import cn from 'classnames';

type Props = {
  currentPage: number;
  perPage: number;
  elementsCount: number;
  target?: React.MutableRefObject<HTMLElement | null>;
  scrollToTop?: boolean;
  setCurrentPage: (num: number) => void;
};

export const Pagination = (props: Props) => {
  const {
    currentPage,
    scrollToTop = false,
    elementsCount,
    perPage,
    setCurrentPage,
    target,
  } = props;

  const pagesCount = Math.ceil(elementsCount / perPage);

  if (pagesCount <= 1) return null;

  const createPages = (pagesCount: number, currentPage: number) => {
    const pages = [];

    if (pagesCount > 10) {
      if (currentPage > 5) {
        for (let i = currentPage - 4; i <= currentPage + 5; i++) {
          pages.push(i);
          if (i === pagesCount) break;
        }
      } else {
        for (let i = 1; i <= 10; i++) {
          pages.push(i);
          if (i === pagesCount) break;
        }
      }
    } else {
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const isDisabled = (
    direction: 'left' | 'right',
    pagesCount: number,
    currentPage: number
  ) => {
    if (direction === 'left') {
      return currentPage <= 1;
    } else if (direction === 'right') {
      return currentPage >= pagesCount;
    }
  };

  const scrollToTopElement = () => {
    if (target && scrollToTop) {
      target.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    scrollToTopElement();
  };
  const nextPage = () => {
    if (currentPage < pagesCount) setCurrentPage(currentPage + 1);
    scrollToTopElement();
  };
  const firstPage = () => {
    setCurrentPage(1);
    scrollToTopElement();
  };
  const lastPage = () => {
    setCurrentPage(pagesCount);
    scrollToTopElement();
  };

  const setPage = (page: number) => {
    setCurrentPage(page);
    scrollToTopElement();
  };

  return (
    <div className={styles.pagination}>
      <div
        className={cn(styles.arrow, styles['dubbled-left-arrow'], {
          [styles.disable]: isDisabled('left', pagesCount, currentPage),
        })}
        onClick={firstPage}
      >
        <Arrow />
        <Arrow />
      </div>
      <div
        className={cn(styles.arrow, styles['left-arrow'], {
          [styles.disable]: isDisabled('left', pagesCount, currentPage),
        })}
        onClick={prevPage}
      >
        <Arrow />
      </div>
      <div className={styles.pages}>
        {createPages(pagesCount, currentPage).map((page) => (
          <div
            key={page}
            className={
              page === currentPage ? styles['current-page'] : styles.page
            }
            onClick={() => setPage(page)}
          >
            {page}
          </div>
        ))}
      </div>
      <div
        className={cn(styles.arrow, styles['right-arrow'], {
          [styles.disable]: isDisabled('right', pagesCount, currentPage),
        })}
        onClick={nextPage}
      >
        <Arrow />
      </div>
      <div
        className={cn(styles.arrow, styles['dubbled-right-arrow'], {
          [styles.disable]: isDisabled('right', pagesCount, currentPage),
        })}
        onClick={lastPage}
      >
        <Arrow />
        <Arrow />
      </div>
    </div>
  );
};
