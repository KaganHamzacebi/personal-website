import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import languageConfigReducer from '../features/langConfig/LangConfigSlice';
import notificationCenterReducer from '../features/notificationCenter/NotificationCenterSlice';
import scrollCenterReducer from '../features/scrollController/ScrollController';

export const store = configureStore({
    reducer: {
        languageConfig: languageConfigReducer,
        notificationCenter: notificationCenterReducer,
        scrollController: scrollCenterReducer
    },
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
