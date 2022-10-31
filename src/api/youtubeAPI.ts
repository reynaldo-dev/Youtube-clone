import axios from "axios";

export const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: 'AIzaSyDSTj7Q8BoivzVWVKw5LSH2p4bIzBdiYI8'
    }
})