import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import generalDetailsReducer from '../store/generalDetailsSlice';
import imagesReducer from '../store/imagesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    generalDetails: generalDetailsReducer,
    images: imagesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
