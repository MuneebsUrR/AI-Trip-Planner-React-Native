import { View, Text, Image, TouchableOpacity,Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { getPhotoRef } from '../../services/GooglePlaceApi'

export default function DayPlanningCard({ item }) {
    const [photoRef, setPhotoRef] = useState(null)
    const [mapLink, setMapLink] = useState(null)
    const getGooglePhoto = async () => {
        const result = await getPhotoRef(item?.placeName)

        setPhotoRef(result?.results[0]?.photos[0]?.photo_reference)
        const location = result.results[0]?.geometry?.location;
        const mapLocationLink = `https://www.google.com/maps/search/?api=1&query=${location?.lat}-${location?.lng}&query_place_id=${result?.results[0]?.place_id}`;
        setMapLink(mapLocationLink)
        
        return result?.results[0]?.photos[0]?.photo_reference;
    }
    useEffect(() => {
        getGooglePhoto()
    }, [])

    const handleIconPress = () => {
        Linking.openURL(mapLink)
    }
    return (
        <View style={{ marginTop: 20, borderRadius: 10, borderWidth: 1, padding: 12, borderColor: 'lightblue', backgroundColor: '#E7F4FD' }}>

            <View>

                <Text style={{ fontFamily: 'outfit-bold', fontSize: 16 }}>Day {item?.day}</Text>
                <Text style={{ fontFamily: 'outfit', color: 'gray' }}>⌚ {item?.time}</Text>
            </View>


            <View>
                <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY}` }}
                    style={{ marginTop: 7, width: '100%', height: 130, objectFit: 'cover', borderRadius: 10 }}
                />
                <Text style={{ marginTop: 7, fontFamily: 'outfit-medium', fontSize: 19 }}>{item?.placeName}</Text>
                <Text style={{ fontFamily: 'outfit-medium', color: 'gray' }}>{item?.placeDetails}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'outfit-medium' }}>🎟️ Ticket: $ {item?.ticketPricing}</Text>
                    <TouchableOpacity onPress={handleIconPress} style={{ backgroundColor: 'black', borderRadius: 7, padding: 5 }} >
                        <Text>
                            <Ionicons name="navigate" size={28} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}