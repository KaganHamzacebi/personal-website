import type {
  Action,
  ThunkAction
} from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import cookieAlertControllerReducer from '../features/cookieAlertController/CookieAlertControllerSlice';
import headerControllerReducer from '../features/headerController/HeaderControllerSlice';
import languageControllerReducer from '../features/languageController/LanguageControllerSlice';
import loadingControllerReducer from '../features/loadingController/LoadingControllerSlice';
import scrollCenterReducer from '../features/scrollController/ScrollControllerSlice';
import themeControllerReducer from '../features/themeController/ThemeControllerSlice';

export const store = configureStore({
  reducer: {
    languageController: languageControllerReducer,
    scrollController: scrollCenterReducer,
    themeController: themeControllerReducer,
    headerController: headerControllerReducer,
    loadingController: loadingControllerReducer,
    cookieAlertController: cookieAlertControllerReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
