import React, { useEffect } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header/Header';
import { useAppDispatch } from '../redux/store';
import VideoList from '../components/videos/VideoList';
import { videosToHome } from '../redux/thunks/videos.thunk';

export default function Home() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(videosToHome())
    }, [])

    return (
        <SafeAreaView>
            <Header />

            <View className=''>
                <VideoList />
            </View>
        </SafeAreaView>
    )
}