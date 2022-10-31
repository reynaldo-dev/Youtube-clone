import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { View, Text, FlatList, Animated } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { VideoThumb } from './VideoThumb'

export default function VideoList() {
    const { items } = useSelector((state: RootState) => state.videos)
    const navigation = useNavigation()

    return (
        <Animated.FlatList
            data={items}
            renderItem={({ item, index, separators }) => (
                <VideoThumb recomendation={false} item={item} navigation={navigation} key={new Date()} />
            )}
            contentContainerStyle={{
                width: '100%',
            }}
        />
    )
}