import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getChannelData, resPayload, RootObjectResponse } from "../thunks/channel.thunk";

export interface RootObject {
    // etag: string;
    videos: Item[];
    //kind: string;
    //nextPageToken: string;
    //pageInfo: PageInfo;
    //regionCode: string;
}

export interface Item {
    etag: string;
    id: ID;
    kind: string;
    snippet: Snippet;
}

export interface ID {
    kind: string;
    videoId: string;
}

export interface Snippet {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: Date;
    publishedAt: Date;
    thumbnails: Thumbnails;
    title: string;
}

export interface Thumbnails {
    default: Default;
    high: Default;
    medium: Default;
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

const initialState: resPayload = {
    items: [],
    channel: {}

}

export const activeChannelSlice = createSlice({
    name: 'activeChannelSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getChannelData.fulfilled, (state, action) => {
            state.items = action.payload.items
            state.channel = action.payload.channel
        })
    }
})

export default activeChannelSlice.reducer