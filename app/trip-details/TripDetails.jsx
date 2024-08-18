import { View, Text, StyleSheet, StatusBar, Image, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router';
import moment from 'moment';
import FlightInfo from '../../components/TripDetails/FlightInfo';
import HotelInfo from '../../components/TripDetails/HotelInfo';
import TripPlanningDetails from '../../components/TripDetails/TripPlanningDetails';

export default function TripDetails() {
  const navigation = useNavigation();
  const { tripData, tripPlan } = useLocalSearchParams();

  const [TripData, setTripData] = useState(JSON.parse(tripData));
  const [TripPlan, setTripPlan] = useState(JSON.parse(tripPlan));

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    })


  }, [])


  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

      {TripData?.locationInfo?.photoRef
        ? <Image source={{ uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${TripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_KEY}` }}
          style={{ width: '100%', height: 320, objectFit: 'cover' }}
        /> :

        <Image source={require('../../assets/images/no_image.png')}
          style={{ width: '100%', height: 320, objectFit: 'cover' }}
        />
      }

      <View style={{ padding: 20, backgroundColor: 'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -25 }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={{ fontSize: 25, fontFamily: 'outfit-bold' }}>{TripData?.locationInfo?.name}</Text>
            <Text style={{ fontFamily: 'outfit', color: 'gray', fontSize: 15 }}>
              {moment(TripData?.startDate).format('DD MMM YYYY')} - {moment(TripData?.endDate).format('DD MMM YYYY')}
            </Text>
            <Text style={{ fontFamily: 'outfit', color: 'gray', fontSize: 15 }}>
              {TripData?.budget}
            </Text>
          </View>
          <View>
            <Text style={{ fontFamily: 'outfit', color: 'gray', fontSize: 17 }}>
              🧳{TripData?.TravelerOption}
            </Text>
          </View>
        </View>

        {/* Flight info */}
        <FlightInfo flightData={TripPlan?.flightDetails} />
        {/* Hotel info */}
        <HotelInfo hotelData={TripPlan?.hotelOptions} />
        {/* days plan info */}
        <TripPlanningDetails details={TripPlan?.dailyPlan} />
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',


  }
})