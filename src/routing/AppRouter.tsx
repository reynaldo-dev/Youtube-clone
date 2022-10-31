import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './type.routing';
import Home from '../screens/Home';
import Video from '../screens/Video';
import Channel from '../screens/Channel';

const RootStack = createNativeStackNavigator<RootStackParamList>();
export default function AppRouter() {
    return (
        <RootStack.Navigator initialRouteName='Home'>
            <RootStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Video"
                component={Video}
                options={{ headerShown: false }}
            />
            <RootStack.Screen
                name="Channel"
                component={Channel}
                options={{ headerShown: false }}
            />
        </RootStack.Navigator>
    )
}