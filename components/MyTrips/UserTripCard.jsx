import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'

export default function UserTripCard({ data }) {
    const tripData = JSON.parse(data.tripData)
    return (
        <View style={{ marginVertical: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${tripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY}` }} style={{ width: 100, height: 100, borderRadius: 10, objectFit: 'cover' }} />
            <View>
                <Text style={{ fontFamily: 'outfit-medium', fontSize: 18 }}>{tripData?.locationInfo?.name}</Text>
                <Text style={{ fontFamily: 'outfit', color: 'gray' }}>

                    {moment(tripData?.startDate).format('DD MMM')} - {moment(tripData?.endDate).format('DD MMM')}
                </Text>
                <Text style={{ fontFamily: 'outfit', color: 'gray' }}>
                    {tripData?.TravelerOption}
                </Text>
            </View>
        </View>
    )
}