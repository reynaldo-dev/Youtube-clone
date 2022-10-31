import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, Pressable } from 'react-native'
import { Item } from '../../redux/slices/videos.slice'
import { RootStackParamList } from '../../routing/type.routing';
import { ItemR } from '../../hooks/useRecomendations';

interface IProps {
    item: Item | ItemR;
    navigation: any;
    recomendation: boolean;

}

export const VideoThumb = ({ item, navigation, recomendation }: IProps) => {

    return (
        <Pressable
            className=' w-full mb-4'
            onPress={() => navigation.navigate('Video',
                {
                    item: !recomendation
                        ? item
                        : { ...item, id: item?.id?.videoId }
                }
            )}
        >
            <View className=' w-full p-2 rounded-lg' >
                <Image
                    source={{ uri: item?.snippet?.thumbnails?.high?.url }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
            </View>

            <View className=' justify-center items-start mx-2' >
                <Text
                    className='text-gray-800 m-1 font-semibold'
                >
                    {item?.snippet?.title}
                </Text>


                <Text
                    className='text-gray-800 m-1 font-light'
                >
                    {item?.snippet?.channelTitle}
                </Text>
                <Text
                    className='text-gray-800 m-1 font-light'
                >
                    {item?.snippet?.publishedAt.toLocaleString()}
                </Text>

            </View>


        </Pressable>
    )
}

