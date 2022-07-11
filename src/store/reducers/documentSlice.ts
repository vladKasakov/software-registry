import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDocument, IDocumentHeader } from '../../models';
import link from '../../assets/svg/download.svg';

interface InitialState {
  columns: IDocumentHeader;
  data: IDocument[];
  perPage: number;
  currentPage: number;
}

const initialState: InitialState = {
  columns: {
    category: 'Категория',
    name: 'Наименование',
    date: 'Дата',
    number: 'Номер',
    address: 'Содержание',
  },
  data: [
    {
      id: 1,
      category: 'Общие документы',
      name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
      date: '20.07.2021',
      number: 1226,
      link,
      size: 469,
    },
    {
      id: 2,
      category: 'Общие документы',
      name: 'Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных',
      date: '22.09.2020',
      number: 468,
      link,
      size: 11069.44,
    },

    {
      id: 3,
      category: 'Общие документы',
      name: 'Административный регламент ПРИКАЗ от 21 февраля 2019 года N62',
      date: '21.02.2019',
      number: 468,
      link,
      size: 11069.44,
    },
    {
      id: 4,
      category: 'Общие документы',
      name: 'Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
      date: '20.12.2017',
      number: 1594,
      link,
      size: 2119.68,
    },
    {
      id: 5,
      category: 'Общие документы',
      name: 'Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных',
      date: '31.12.2005',
      number: 6232,
      link,
      size: 5002.56,
    },
    {
      id: 6,
      category: 'Общие документы',
      name: 'Постановление Правительства Российской Федерации от 20.03.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
      date: '20.07.2021',
      number: 1226,
      link,
      size: 4069,
    },
    {
      id: 7,
      category: 'Общие документы',
      name: 'Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных',
      date: '22.09.2020',
      number: 48,
      link,
      size: 1169.44,
    },

    {
      id: 8,
      category: 'Общие документы',
      name: 'Административный регламент ПРИКАЗ от 01 февраля 2012 года N62',
      date: '21.02.2019',
      number: 468,
      link,
      size: 11069.44,
    },
    {
      id: 9,
      category: 'Общие документы',
      name: 'Постановление Правительства РФ от 08.06.2022 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"',
      date: '20.12.2022',
      number: 1594,
      link,
      size: 2119.68,
    },
    {
      id: 10,
      category: 'Общие документы',
      name: 'Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных',
      date: '31.12.2015',
      number: 622,
      link,
      size: 4902.56,
    },
  ],
  perPage: 5,
  currentPage: 1,
};

const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setCurrentDocumentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentDocumentPage } = documentSlice.actions;

export default documentSlice.reducer;
