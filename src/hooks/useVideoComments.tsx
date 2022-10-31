import React, { useEffect, useState } from 'react'
import { youtube } from '../api/youtubeAPI';

interface IProps {
    id: string;
}
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
    kind: ItemKind;
    snippet: ItemSnippet;
}

export enum ItemKind {
    YoutubeCommentThread = "youtube#commentThread",
}

export interface ItemSnippet {
    canReply: boolean;
    isPublic: boolean;
    topLevelComment: TopLevelComment;
    totalReplyCount: number;
    videoId: VideoID;
}

export interface TopLevelComment {
    etag: string;
    id: string;
    kind: TopLevelCommentKind;
    snippet: TopLevelCommentSnippet;
}

export enum TopLevelCommentKind {
    YoutubeComment = "youtube#comment",
}

export interface TopLevelCommentSnippet {
    authorChannelId: AuthorChannelID;
    authorChannelUrl: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    canRate: boolean;
    likeCount: number;
    publishedAt: Date;
    textDisplay: string;
    textOriginal: string;
    updatedAt: Date;
    videoId: VideoID;
    viewerRating: ViewerRating;
}

export interface AuthorChannelID {
    value: string;
}

export enum VideoID {
    OIgCD4ODzI = "oIgCd-4oDzI",
}

export enum ViewerRating {
    None = "none",
}

export interface PageInfo {
    resultsPerPage: number;
    totalResults: number;
}

export const useVideoComments = (id: string) => {
    const [comments, setComments] = useState<Item[]>()
    const [isError, setIsError] = useState<boolean>(false)

    const getVideoComments = async () => {
        const res = await youtube.get(`/commentThreads?videoId=${id}&part=snippet`)
        setComments(res?.data?.items)
    }
    useEffect(() => {
        getVideoComments()
    }, [])

    return {
        comments,
        isError
    }

}
