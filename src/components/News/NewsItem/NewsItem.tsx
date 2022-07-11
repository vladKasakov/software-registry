import { INews } from '../../../models';
import styles from './NewsItem.module.scss';
import { ReactComponent as Calendar } from '../../../assets/svg/calendar.svg';

type Props = {
  news: INews;
};

export const NewsItem = ({ news }: Props) => {
  const { date, description, image, title } = news;
  return (
    <div className={styles['news-item']}>
      <div className={styles['img-container']}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <h3>{title}</h3>
        <time className={styles.date}>
          <Calendar />
          <span>{date}</span>
        </time>
        <p>{description}</p>
      </div>
    </div>
  );
};
