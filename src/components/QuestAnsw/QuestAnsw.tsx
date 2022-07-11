import { IAccordion } from '../../models';
import { Accordion } from '../Accordion/Accordion';
import { Container } from '../UI/Container';
import styles from './QuestAnsw.module.scss';

const mockData: IAccordion[] = [
  {
    title: 'Для подачи заявления необходимо подготовить',
    content:
      '<ol><li>Данные для авторизации в личном кабинете</li><li>Квалифицированный сертификат ключа проверки электронной подписи.</li><li>Сведения, документы и материалы в соответствии с Методическими рекомендациями</li><li>Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</li></ol>',
  },

  {
    title: 'Связь с оператором реестра',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia unde quibusdam ex distinctio expedita omnis velit tempora consectetur alias amet veniam cupiditate commodi quasi?',
  },
  {
    title:
      'Как подать заявление на включение программного обеспечения в реестр',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia unde quibusdam ex distinctio expedita omnis velit tempora consectetur alias amet veniam cupiditate commodi quasi?',
  },
  {
    title: 'Где можно подать заявление',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia unde quibusdam ex distinctio expedita omnis velit tempora consectetur alias amet veniam cupiditate commodi quasi?',
  },
  {
    title: 'Как узнать мне причину отказа',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia unde quibusdam ex distinctio expedita omnis velit tempora consectetur alias amet veniam cupiditate commodi quasi?',
  },
  {
    title: 'Что делать, если Вам отказали',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia unde quibusdam ex distinctio expedita omnis velit tempora consectetur alias amet veniam cupiditate commodi quasi?',
  },
  {
    title: 'Изменение реестревой записи',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, officia unde quibusdam ex distinctio expedita omnis velit tempora consectetur alias amet veniam cupiditate commodi quasi?',
  },
];

export const QuestAnsw = () => {
  return (
    <div className={styles['question-answer']}>
      <Container>
        <div className={styles.wrapper} id={'quest-answ'}>
          <h2>Вопрос-ответ</h2>
          <div className={styles['accordion-container']}>
            {mockData.map((q) => (
              <Accordion key={q.title} title={q.title} content={q.content} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
