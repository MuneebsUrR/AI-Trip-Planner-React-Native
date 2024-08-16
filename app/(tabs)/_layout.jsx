import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import {Colors}from '../../constants/Colors'
export default function TabLayout() {
    return (
        <View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>

            <Tabs screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.PRIMARY,
            }}>
                <Tabs.Screen name='MyTrip' options={{
                    tabBarIcon:({color})=><Ionicons name="paper-plane-outline" size={24} color={color} />,
                    tabBarLabel:'My Trips',
                }} />
                <Tabs.Screen name='Discover' options={{
                    tabBarIcon:({color})=><Ionicons name="paper-plane-outline" size={24} color={color} />
                }}  />
                <Tabs.Screen name='Profile' options={{
                    tabBarIcon:({color})=><Ionicons name="paper-plane-outline" size={24} color={color} />
                }} />
            </Tabs>
        </View>
    )
}