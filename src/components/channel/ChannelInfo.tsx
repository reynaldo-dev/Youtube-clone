import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { ItemC } from '../../redux/thunks/channel.thunk'


interface IProps {
    channel: ItemC
}
export default function ChannelInfo({ channel }: IProps) {
    console.log(channel)
    return (
        <View
            className='bg-red-500 h-1/5'
        >
            <ImageBackground
                className='h-full '
                source={{ uri: channel?.snippet?.thumbnails?.high?.url }}
                resizeMode="cover">

                <Text
                    className='bg-gray-700/60 font-semibold rounded-b-lg text-gray-200 pb-2 text-center'
                    numberOfLines={2}
                >
                    {channel?.snippet?.description}
                </Text>
            </ImageBackground>
        </View>
    )
}
