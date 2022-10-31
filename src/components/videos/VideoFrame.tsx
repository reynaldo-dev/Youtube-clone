import React, { useState, useCallback } from 'react'
import { View, Text, FlatList } from 'react-native'
import YoutubePlayer from "react-native-youtube-iframe";
import { Item } from '../../redux/slices/videos.slice';
import CommentList from '../video_comments/CommentList';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useRecomendations } from '../../hooks/useRecomendations';
import { VideoThumb } from './VideoThumb';
import { useNavigation } from '@react-navigation/native';

interface IProps {
    item: Item;
}
export default function VideoFrame({ item }: IProps) {

    const navigation = useNavigation()
    const [playing, setPlaying] = useState(true);
    const [showComments, setshowComments] = useState<boolean>(false)
    const { recomendations, isError } = useRecomendations(item?.id)

    return (
        <View className=''>
            {/* frame view */}
            <View className=''>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={item?.id}
                />
                <View className=''>
                    <Text className='text-gray-600 m-1 font-semibold'>{item?.snippet?.title}</Text>

                    <View className='flex-row justify-between mx-1'>
                        <Text
                            className='text-gray-400 m-1 bg-gray-400/20 py-1 px-2 rounded-full text-center'
                            onPress={() => navigation.navigate('Channel', { channelId: item?.snippet?.channelId })}
                        >
                            <Ionicons name='checkmark-circle' color='#4f46e5' size={18} />
                            {item?.snippet?.channelTitle}
                        </Text>
                        {
                            showComments ?
                                <Ionicons
                                    name='eye-off'
                                    size={22}
                                    color='gray'
                                    onPress={() => setshowComments(!showComments)}
                                />
                                :
                                <Ionicons
                                    name='eye-sharp'
                                    size={22}
                                    color='gray'
                                    onPress={() => setshowComments(!showComments)}
                                />
                        }
                    </View>
                </View>
            </View>


            {/* comments */}
            {
                showComments ?
                    <CommentList id={item?.id} />
                    :
                    <FlatList
                        data={recomendations}
                        renderItem={({ item, index, separators }) => (
                            <VideoThumb recomendation={true} item={item} navigation={navigation} key={new Date()} />
                        )}
                        contentContainerStyle={{
                            width: '100%',
                        }}

                    />
            }

        </View>
    )
}

