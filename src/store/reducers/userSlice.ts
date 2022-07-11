import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import fakeUserPng from '../../assets/fakeUser.png';
import { IUser } from '../../models';

const fakeUser = {
  name: 'Захар',
  surname: 'Палазник',
  patronymic: 'Геннадьевич',
  avatar: fakeUserPng,
  country: 'Беларусь',
  city: 'Минск',
  login: '3axaar',
  password: '12345',
  notifications: [
    {
      id: 1,
      title:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos blanditiis et facilis architecto sit mollitia hic possimus accusamus id doloremque.',
    },
    {
      id: 2,
      title: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos blanditiis et facilis architecto sit mollitia hic possimus accusamus id doloremque.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos blanditiis et facilis architecto sit mollitia hic possimus accusamus id doloremque.`,
    },
    {
      id: 3,
      title: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos blanditiis et facilis architecto sit mollitia hic possimus accusamus id doloremque.`,
    },
    {
      id: 4,
      title: `Lorem ipsum dolor, sit amet consectetur adipisicing  sit mollitia hic possimus accusamus id doloremque.`,
    },
  ],
  phone: `375 22 111 33 44`,
};

interface InitialState {
  user: IUser;
}

const initialState: InitialState = {
  user: fakeUser,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeNotification: (state, action: PayloadAction<number>) => {
      state.user.notifications = state.user.notifications.filter(
        (n) => n.id !== action.payload
      );
    },
    changeUserInfo: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
  },
});

export const { removeNotification, changeUserInfo } = userSlice.actions;
export default userSlice.reducer;
