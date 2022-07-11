import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { Button } from '../UI/Button';
import { Container } from '../UI/Container';
import styles from './News.module.scss';
import { NewsItem } from './NewsItem';

export const News = () => {
  const news = useAppSelector((state) => state.news);
  const [count, setCount] = useState(6);

  const currentNews = news.slice(0, count);

  const loadMore = () => {
    setCount((prev) => prev + 4);
  };

  return (
    <div className={styles.news}>
      <Container>
        <div className={styles.wrapper} id={'news'}>
          <h2>Новости реестра</h2>
          <div className={styles['news-wrapper']}>
            <>
              {currentNews.map((n) => (
                <NewsItem key={n.id} news={n} />
              ))}
            </>
          </div>
          {count < news.length && (
            <Button
              label={'Показать еще'}
              color={'rgba(255, 255, 255, 1)'}
              background={'rgba(0, 156, 180, 1)'}
              width={270}
              height={56}
              radius={'5px'}
              onClick={loadMore}
            ></Button>
          )}
        </div>
      </Container>
    </div>
  );
};
