import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import languageConfigReducer from '../features/langConfig/LangConfigSlice'

export const store = configureStore({
  reducer: {
    languageConfig: languageConfigReducer
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
