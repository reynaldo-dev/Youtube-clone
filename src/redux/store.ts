import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from 'react-redux'
import videosReducer from "./slices/videos.slice"
import activeChannelReducer from './slices/activeChannel.slice'

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        activeChannel: activeChannelReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector