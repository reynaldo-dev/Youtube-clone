import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { videosToHome } from "../thunks/videos.thunk";

export interface RootObject {
    etag: string;
    items: Item[];
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfo;
}

export interface Item {
    etag: string;
    id: string;
    kind: Kind;
    snippet: Snippet;
}

export enum Kind {
    YoutubeVideo = "youtube#video",
}

export interface Snippet {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage?: DefaultLanguage;
    defaultLanguage?: DefaultLanguage;
    description: string;
    liveBroadcastContent: LiveBroadcastContent;
    localized: Localized;
    publishedAt: Date;
    tags?: string[];
    thumbnails: Thumbnails;
    title: string;
}

export enum DefaultLanguage {
    En = "en",
    EnGB = "en-GB",
    EnUS = "en-US",
    Es = "es",
    Es419 = "es-419",
}

export enum LiveBroadcastContent {
    None = "none",
}

export interface Localized {
    description: string;
    title: string;
}

export interface Thumbnails {
    default: Default;
    high: Default;
    maxres?: Default;
    medium: Default;
    standard?: Default;
}

export interface Default {
    height: number;
    url: string;
    width: number;
}

export interface PageInfo {
    resultsPerPage: number;
    totalResults: number;
}


const initialState: RootObject = {
    etag: '',
    items: [],
    kind: '',
    nextPageToken: '',
    pageInfo: {
        resultsPerPage: 0,
        totalResults: 0,
    }

}
export const videoSlice = createSlice({
    name: 'videos',

    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(videosToHome.fulfilled, (state, action: PayloadAction<RootObject>) => {
            state.etag = action.payload.etag
            state.items = action.payload.items
            state.kind = action.payload.kind
            state.nextPageToken = action.payload.nextPageToken
            state.pageInfo = action.payload.pageInfo
        })
    }
})


export default videoSlice.reducer