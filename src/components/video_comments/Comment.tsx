import React from 'react'
import { View, Text, Image } from 'react-native'
import { Item } from '../../hooks/useVideoComments'

interface IProps {
    item: Item
}
export default function Comment({ item }: IProps) {
    return (
        <View className='bg-white my-2 mx-2 p-1  rounded-md shadow-2xl'>
            <View className='m-1 flex-row'>
                <Image
                    source={{ uri: item?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl }}
                    className='w-6 h-6 rounded-full'
                    resizeMode='cover'
                />
                <Text
                    className=' p-[2px] text-xs text-gray-700 ml-1'
                    numberOfLines={3}
                >
                    {item?.snippet?.topLevelComment?.snippet?.authorDisplayName}
                </Text>
            </View>
            <Text
                className=' p-[2px] text-xs text-gray-500'
                numberOfLines={3}
            >
                {item?.snippet?.topLevelComment?.snippet?.textDisplay}
            </Text>
        </View>
    )
}