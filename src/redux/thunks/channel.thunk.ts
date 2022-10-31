import { createAsyncThunk } from "@reduxjs/toolkit";
import { youtube } from "../../api/youtubeAPI";

interface IPayload {
    channelId: string;
}
export interface RootObjectResponse {
    etag: string;
    items: Item[];
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfo;
    regionCode: string;
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
export interface resPayload {
    items: Item[];
    channel: ItemC
}



export interface ItemC {
    etag: string;
    id: string;
    kind: string;
    snippet: Snippet;
}

export interface SnippetC {
    customUrl: string;
    description: string;
    localized: LocalizedC;
    publishedAt: Date;
    thumbnails: ThumbnailsC;
    title: string;
}

export interface LocalizedC {
    description: string;
    title: string;
}

export interface ThumbnailsC {
    default: Default;
    high: Default;
    medium: Default;
}

export interface DefaultC {
    height: number;
    url: string;
    width: number;
}

export interface PageInfoC {
    resultsPerPage: number;
    totalResults: number;
}

export const getChannelData = createAsyncThunk(
    'channel/channelData',
    async (payload: IPayload) => {
        // channel videos
        const response = await youtube.get(`/search?part=snippet&channelId=${payload.channelId}&maxResults=50`)
        const channelData = await youtube.get(`/channels?part=snippet&id=${payload.channelId}`)

        const resPayload: resPayload = {
            items: response?.data?.items,
            channel: channelData?.data?.items[0]
        }
        return resPayload ? resPayload : {}
    }
)