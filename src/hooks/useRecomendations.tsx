import React, { useEffect, useState } from 'react'
import { youtube } from '../api/youtubeAPI';

interface IProps {
    id: string;
}
export interface RootObject {
    etag: string;
    items: ItemR[];
    kind: string;
    nextPageToken: string;
    pageInfo: PageInfo;
    regionCode: string;
}

export interface ItemR {
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

export const useRecomendations = (id: string) => {
    const [recomendations, setRecomendations] = useState<ItemR[]>()
    const [isError, setIsError] = useState<boolean>(false)

    const getRecomendations = async () => {
        const res = await youtube.get(`/search?type=video&relatedToVideoId=${id}&maxResults=50&part=snippet`)
        setRecomendations(res?.data?.items)
    }
    useEffect(() => {
        getRecomendations()
    }, [])

    return {
        recomendations,
        isError
    }
}
