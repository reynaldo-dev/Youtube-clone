import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Header() {
    return (
        <View
            className=' bg-white flex-row justify-between items-center shadow-2xl'
        >
            <Image
                className='w-24 h-12'
                resizeMode='cover'
                source={require('../../../assets/yt_logo.png')}
            />

            <Image
                className='w-10 h-10 rounded-full mr-1'
                resizeMode='cover'
                source={require('../../../assets/avatar.jpg')}
            />

        </View>
    )
}