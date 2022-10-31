import { createAsyncThunk } from "@reduxjs/toolkit";
import { youtube } from "../../api/youtubeAPI";

export const videosToHome = createAsyncThunk(
    'videos/videosToHome',
    async () => {

        const response = await youtube.get('/videos?part=snippet&chart=mostPopular&maxResults=100')
        return response.data ? response.data : {}


    }
)