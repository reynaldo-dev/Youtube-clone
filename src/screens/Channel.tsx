import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import ChannelInfo from '../components/channel/ChannelInfo'
import { VideoThumb } from '../components/videos/VideoThumb'
import { RootState, useAppDispatch } from '../redux/store'
import { getChannelData } from '../redux/thunks/channel.thunk'

export default function Channel() {
    const dispatch = useAppDispatch()
    const navigation = useNavigation()
    const route = useRoute()
    const { channelId } = route.params

    const { items, channel } = useSelector((state: RootState) => state.activeChannel)

    useEffect(() => {
        dispatch(getChannelData({ channelId }))
    }, [])

    return (
        <SafeAreaView>

            <ChannelInfo channel={channel} />

            <FlatList
                data={items}
                renderItem={({ item, index, separators }) => (
                    <VideoThumb recomendation={true} item={item} navigation={navigation} key={new Date()} />
                )}
                contentContainerStyle={{
                    width: '100%',

                }}

            />
        </SafeAreaView>
    )
}