import React from 'react'
import { View, Text } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import VideoFrame from '../components/videos/VideoFrame';
import { Item } from '../redux/slices/videos.slice';

export default function Video() {
    //https://www.youtube.com/watch?v=SZcupt0Yqaw

    const route = useRoute()
    const { item } = route.params

    return (
        <SafeAreaView>
            {/* video frame and recomendations */}
            <View className=''>
                <VideoFrame item={item} />
            </View>


        </SafeAreaView>
    )
}