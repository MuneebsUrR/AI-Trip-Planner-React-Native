import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TripPlanningDetails({ details }) {
    const uniqueDays = new Set(details.map(item => item.day));
    console.log(uniqueDays)
    return (
        <View>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>📝 Plan Details</Text>

            {
                details.map((item, index) => (
                    <View style={{ marginTop: 20, borderRadius: 10, borderWidth: 1, padding: 12, borderColor: 'lightblue', backgroundColor: '#E7F4FD' }}>

                        <View>

                            <Text style={{ fontFamily: 'outfit-bold', fontSize: 16 }}>Day {item?.day}</Text>
                            <Text style={{ fontFamily: 'outfit', color: 'gray' }}>⌚ {item?.time}</Text>
                        </View>


                        <View>
                            <Image source={require('../../assets/images/login.jpeg')}
                                style={{ marginTop: 7, width: '100%', height: 130, objectFit: 'cover', borderRadius: 10 }}
                            />
                            <Text style={{ marginTop: 7, fontFamily: 'outfit-medium', fontSize: 19 }}>{item?.placeName}</Text>
                            <Text style={{ fontFamily: 'outfit-medium', color: 'gray' }}>{item?.placeDetails}</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontFamily: 'outfit-medium' }}>🎟️ Ticket: $ {item?.ticketPricing}</Text>
                                <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 7, padding: 5 }} >
                                    <Text>
                                        <Ionicons name="navigate" size={28} color="white" />
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))
            }

        </View>
    )
}   