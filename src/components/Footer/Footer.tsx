import { Container } from '../../components/UI/Container';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { SmoothAnchor } from '../UI/SmoothAnchor';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles['inner-wrapper']}>
          <div className={styles.content}>
            <div className={styles['company-info']}>
              <Logo />
              <p>
                Открытое акционерное общество «Реестр ПО» начало практическую
                деятельность с 1 марта 2014 г
              </p>
              <div className={styles.developer}>
                <h4>Разработчик</h4>
                <span>ОАО «Агентство сервисизации и реинжиниринга»</span>
                <address>Минск, улица Клары Цеткин, 24</address>
              </div>
            </div>
            <div className={styles.info}>
              <h3>Информация</h3>
              <div className={styles['anchor-links']}>
                <SmoothAnchor where="/" targetId="registry">
                  Реестры
                </SmoothAnchor>
                <SmoothAnchor where="/" targetId="news">
                  Новости
                </SmoothAnchor>
                <SmoothAnchor where="/" targetId="documents">
                  Документы
                </SmoothAnchor>
                <SmoothAnchor where="/" targetId="quest-answ">
                  Вопросы
                </SmoothAnchor>
              </div>
            </div>
            <div className={styles.support}>
              <h3>Техническая поддержка</h3>
              <div className={styles['support-content']}>
                <p>
                  Ежедневно с 8.00 до 19.00, за исключением выходных (суббота,
                  воскресенье) и праздничных дней.
                </p>
                <div className={styles.hl}></div>
                <span>+375 25 111 22 33 </span>
                <span>+375 29 222 44 55</span>
                <span>ReestrPOsupport@mail.ru</span>
              </div>
            </div>
            <div className={styles.contacts}>
              <h3>Контакты</h3>
              <div className={styles.communications}>
                <span>+375 33 112 22 45</span>
                <span>+375 29 222 44 88</span>
                <span>ReesrtPO@mail.ru</span>
                <address>220004 г. Минск, ул. Карла Маркса, 38</address>
                <a href="mailto:reestrposupport@mail.ru">
                  Связаться с поддержкой
                </a>
              </div>
            </div>
          </div>
          <div className={styles.hl}></div>
          <div className={styles.copyright}>
            © Copyright 2022 — ОАО «РеестрПО». Все права защищены.
          </div>
        </div>
      </Container>
    </footer>
  );
};
