import { configureStore } from '@reduxjs/toolkit';
import { PackEditorApi } from './PackEditor/PackEditorApi';

export const store = configureStore({
  reducer: {
    [PackEditorApi.reducerPath]: PackEditorApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    PackEditorApi.middleware
  )
});