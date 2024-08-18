import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPhotoRef } from '../../services/GooglePlaceApi'

export default function HotelCard({ item }) {
    const [photoRef, setPhotoRef] = useState(null)
    const getGooglePhoto = async () => {
        const result = await getPhotoRef(item?.name)
        setPhotoRef(result?.results[0]?.photos[0]?.photo_reference)
        return result?.results[0]?.photos[0]?.photo_reference;
    }
    useEffect(() => {
        getGooglePhoto()
    }, [])

    return (
        <View style={{ marginRight: 15, width: 180 }}>
            <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY}` }} style={{
                width: 180,
                height: 120,
                borderRadius: 10,
            }} />
            <View>
                <Text style={{ marginTop: 7, fontFamily: 'outfit-medium' }}>{item?.name}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontFamily: 'outfit', color: 'gray' }}>⭐ {item?.ratings}</Text>
                <Text style={{ fontFamily: 'outfit' }}>${item?.price}</Text>
            </View>
        </View>
    )
}