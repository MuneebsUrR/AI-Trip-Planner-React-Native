import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { CreateTripContext } from '../../context/CreateTripContext';

export default function GenerateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ paddingVertical: 15, textAlign: 'center', fontFamily: 'outfit-bold', fontSize: 30 }}>
                Please Wait...
            </Text>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 18,
                color: 'gray',
                textAlign: 'center',
                paddingVertical: 15
            }}>
                We are working to generate your trip
            </Text>
            <View style={{ paddingVertical: 15 }}>

                <ActivityIndicator size="large" color="black" />
            </View>
            <Text style={{ fontFamily: 'outfit', color: 'gray' }}>Don't Go Back</Text>
        </View>
    )
}