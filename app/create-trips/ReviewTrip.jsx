import { View, Text, StatusBar, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Colors } from '../../constants/Colors';
export default function ReviewTrip() {
    const navigation = useNavigation();
    const { tripData, setTripData } = useContext(CreateTripContext);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',

        })

    }, [])
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>Review Your Trip</Text>
            <Text style={{ marginBottom: 20, fontFamily: 'outfit-medium', fontSize: 18, color: 'gray' }}>
                Before generating your trip please review the details.
            </Text>
            {/* Destination */}
            <View style={{
                marginTop: 35,
                display: 'flex',
                flexDirection: 'row',
                width: '90%'


            }}>
                <Text style={{ fontSize: 30, marginRight: 15 }}>📍</Text>
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 20,
                        color: 'gray',

                    }}>Destination</Text>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 18 }}>{tripData?.locationInfo?.name}</Text>
                </View>

            </View>
            {/* Dates */}
            <View style={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'row',

            }}>
                <Text style={{ fontSize: 30, marginRight: 15 }}>🗓️</Text>
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 20,
                        color: 'gray'
                    }}>Travel Date</Text>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 18 }}>{moment(tripData?.startDate).format('DD MMM')}
                        {' to'} {moment(tripData?.endDate).format('DD MMM')}
                        ({tripData?.totalDays} days)
                    </Text>
                </View>

            </View>
            {/* Traveler */}
            <View style={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'row',

            }}>
                <Text style={{ fontSize: 30, marginRight: 15 }}>🧳</Text>
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 20,
                        color: 'gray'
                    }}>Who is Traveling</Text>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 18 }}>
                        {tripData?.TravelerOption}
                    </Text>
                </View>

            </View>
            {/* Budget */}
            <View style={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'row',

            }}>
                <Text style={{ fontSize: 30, marginRight: 15 }}>💲</Text>
                <View>
                    <Text style={{
                        fontFamily: 'outfit',
                        fontSize: 20,
                        color: 'gray'
                    }}>Budget</Text>
                    <Text style={{ fontFamily: 'outfit-medium', fontSize: 18 }}>
                        {tripData?.budget}
                    </Text>
                </View>

            </View>

            <TouchableOpacity style={{ borderRadius: 15, padding: 15, backgroundColor: Colors.PRIMARY, marginTop: 35 }}>
                <Text style={{ fontFamily: 'outfit-medium', color: 'white', textAlign: 'center', fontSize: 20 }}>Build My Trip</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: StatusBar.currentHeight + 60,
        padding: 25,

    }
})