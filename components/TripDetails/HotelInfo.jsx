import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import HotelCard from './HotelCard'

export default function HotelInfo({ hotelData }) {
    return (
        <View style={{ marginTop: 15 }}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>🛏️ Hotel Recommendation</Text>
            <FlatList
                data={hotelData}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                   <HotelCard item={item} />
                )}
                horizontal={true}
                style={{ marginVertical: 10 }}

            />
        </View>
    )
}