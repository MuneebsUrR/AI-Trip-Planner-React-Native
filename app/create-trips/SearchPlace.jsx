import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React, { useContext, useLayoutEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SearchPlace() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search',
        })

    }, [])
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search Place'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data.description);
                    console.log(details?.geometry.location);
                    console.log(details?.photos[0]?.photo_reference);
                    console.log(details?.url);
                    setTripData({
                        locationInfo:{
                            name:data.description,
                            coordinates:details?.geometry.location,
                            photoRef:details?.photos[0]?.photo_reference,
                            url:details?.url
                        }
                    })

                    router.push('/create-trips/SelectTraveler')
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY,
                    language: 'en',
                }}
                styles={{textInputContainer:{
                    borderWidth:1,
                    borderRadius:5,
                    marginTop:25,
                }}}
            />

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