import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { router } from 'expo-router';

export default function StartNewTripCard() {
    return (
        <View style={{
            padding: 20,
            marginTop: 50,
            display: 'flex',
            alignItems: 'center',
            gap: 25
        }}>

            <Ionicons name="location" size={40} color="black" />
            <Text style={{
                fontFamily: 'outfit-bold',
                textAlign: 'center',
                fontSize: 25,
                marginTop: 5
            }}>No Trips Planned Yet</Text>
            <Text style={{
                fontFamily: 'outfit',
                fontSize: 20,
                textAlign: 'center',
                color: 'gray'
            }}>
                Looks like its time to plan a new travel experinece! Get Started below

            </Text>

            <TouchableOpacity onPress={() => router.push('/create-trips/SearchPlace')} style={{
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
                padding: 10,
                paddingHorizontal: 20,

            }} >
                <Text style={{
                    color: "white",
                    fontFamily: 'outfit-medium',
                    fontSize: 17,
                }}>
                    Start a new trip
                </Text>
            </TouchableOpacity>
        </View>
    )
}