import React from 'react'
import { View, Text, FlatList, Animated } from 'react-native'
import { useVideoComments } from '../../hooks/useVideoComments'
import Comment from './Comment';

interface IProps {
    id: string;
}
export default function CommentList({ id }: IProps) {
    const { comments, isError } = useVideoComments(id)

    return (
        <View className='h-1/2 justify-center mx-2'>
            <Animated.FlatList
                data={comments}
                renderItem={({ item, index, separators }) => (
                    <Comment item={item} key={new Date()} />
                )}
                contentContainerStyle={{
                    width: '100%',
                }}
            />
        </View>
    )
}