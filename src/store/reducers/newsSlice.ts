import { createSlice } from '@reduxjs/toolkit';

import alertImg from '../../assets/news-photo/alert.png';
import cartImg from '../../assets/news-photo/cart.png';
import manImg from '../../assets/news-photo/man-works.png';
import updateImg from '../../assets/news-photo/update.png';
import workImg from '../../assets/news-photo/work.png';
import { INews } from '../../models';

const initialState: INews[] = [
  {
    id: 1,
    image: workImg,
    title: 'Технические работы 30.05.2022',
    date: '30.05.2022',
    description:
      'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перебои Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 2,
    image: alertImg,
    title: 'Изменение справочника',
    date: '28.05.2022',
    description:
      'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Действий Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 3,
    image: workImg,
    title: 'Технические работы 26.05.2022',
    date: '26.05.2022',
    description:
      'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться перебои Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },

  {
    id: 4,
    image: manImg,
    title: 'Лицензирование в Беларуси',
    date: '25.05.2022',
    description:
      'Лицензирование затрагивает отдельные виды деятельности в Республике Беларусь Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 5,
    image: cartImg,
    title: 'Тестирование системы новостей Ед...',
    date: '20.05.2022',
    description:
      'Тестирование системы новостей ЕРЛИКА Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 6,
    image: updateImg,
    title: 'Обновление версии реестра ПО',
    date: '18.05.2022',
    description:
      'В новой версии доступны новые функции, которые упрощают использование сервис Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 7,
    image: workImg,
    title: 'Технические работы 30.05.2022',
    date: '30.05.2022',
    description:
      'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться перебои Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 8,
    image: alertImg,
    title: 'Изменение справочника',
    date: '28.05.2022',
    description:
      'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Действий Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 9,
    image: workImg,
    title: 'Технические работы 26.05.2022',
    date: '26.05.2022',
    description:
      'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться перебои Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },

  {
    id: 10,
    image: manImg,
    title: 'Лицензирование в Беларуси',
    date: '25.05.2022',
    description:
      'Лицензирование затрагивает отдельные виды деятельности в Республике Беларусь Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 11,
    image: cartImg,
    title: 'Тестирование системы новостей Ед...',
    date: '20.05.2022',
    description:
      'Тестирование системы новостей ЕРЛИКА Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
  {
    id: 12,
    image: updateImg,
    title: 'Обновление версии реестра ПО',
    date: '18.05.2022',
    description:
      'В новой версии доступны новые функции, которые упрощают использование сервис Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum rerum ab, provident porro maiores! Qui dicta culpa ab repellat.',
  },
];

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
});

export default newsSlice.reducer;
