import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import UserTripCard from './UserTripCard';
import { router } from 'expo-router';
export default function UserTripList({ userTrips }) {
    //reversing the user trips to show the latest trip first
    userTrips = userTrips.reverse();
    const TripDetails = JSON.parse(userTrips[0]?.tripData);

    return (
        <View style={{ height: '100%' }}>
            <View style={{ marginTop: 20 }}>
                {TripDetails?.locationInfo?.photoRef
                    ? <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${TripDetails?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY}` }}
                        style={{ width: '100%', height: 230, borderRadius: 10, objectFit: 'cover' }}
                    /> :

                    <Image source={require('../../assets/images/no_image.png')}
                        style={{ width: '100%', height: 230, borderRadius: 10, objectFit: 'cover' }}
                    />
                }
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <View>
                    <Text
                        style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>
                        {TripDetails?.locationInfo?.name}
                    </Text>
                    <Text style={{ fontFamily: 'outfit', color: 'gray', fontSize: 15 }}>
                        {moment(TripDetails?.startDate).format('DD MMM YYYY')} - {moment(TripDetails?.endDate).format('DD MMM YYYY')}
                    </Text>
                </View>
                <Text style={{ fontFamily: 'outfit', color: 'gray', fontSize: 17 }}>
                    ✈️{TripDetails?.TravelerOption}
                </Text>

            </View>
            <TouchableOpacity onPress={() => router.push({
                pathname: '/trip-details/TripDetails', params: {
                    tripData: JSON.stringify(TripDetails), tripPlan: JSON.stringify(userTrips[0]?.tripPlan)
                }
            })} style={{ marginVertical: 10, backgroundColor: Colors.PRIMARY, padding: 14, borderRadius: 10 }}>
                <Text style={{ color: 'white', fontFamily: 'outfit-medium', textAlign: 'center' }}>
                    See your plan
                </Text>
            </TouchableOpacity>


            {
                <FlatList
                    data={userTrips} // Assuming userTrips is an array
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (

                        <TouchableOpacity onPress={() => router.push({
                            pathname: '/trip-details/TripDetails', params: {
                                tripData: item?.tripData, tripPlan: JSON.stringify(item?.tripPlan)
                            }
                        })}>
                            <UserTripCard data={item} />
                        </TouchableOpacity>
                    )}

                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}

                />
            }

        </View>
    )
}