export interface IUser {
  name: string;
  surname: string;
  patronymic: string;
  avatar: string;
  country: string;
  city: string;
  phone: string;
  login: string;
  password: string;
  notifications: INotification[];
}

export interface ISoftware {
  headers: IHeaders;
  data: IRow[];
  perPage: number;
  currentPage: number;
}

export interface IRow {
  key: number;
  name: string;
  code: string;
  class: string;
  date: string;
  link: string;
}

export interface IHeaders {
  key: string;
  name: string;
  code: string;
  class: string;
  date: string;
  link: string;
}

export interface INews {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
}

export interface INotification {
  id: number;
  title: string;
}

export interface IDocument {
  id: number;
  category: string;
  name: string;
  date: string;
  number: number;
  link: string;
  size: number;
}

export interface IDocumentHeader {
  category: string;
  name: string;
  date: string;
  number: string;
  address: string;
}

export interface IAccordion {
  title: string;
  content: string;
}

export type TableMode = 'none' | 'ascending' | 'descending';
