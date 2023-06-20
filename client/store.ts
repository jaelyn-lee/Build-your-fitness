import { configureStore } from '@reduxjs/toolkit'
import type { ThunkAction as BaseThunkAction } from '@reduxjs/toolkit'
import type { AnyAction } from '@reduxjs/toolkit'

import { rootReducer } from './slices'

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type ThunkAction<T = void> = BaseThunkAction<
  Promise<T>,
  RootState,
  void,
  AnyAction
>

const store = configureStore({
  reducer: rootReducer,
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
