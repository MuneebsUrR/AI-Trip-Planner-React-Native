import { View, Text, StyleSheet, StatusBar, ActivityIndicator, useWindowDimensions, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { db, auth } from '../../configs/FirebaseConfig'
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripList from '../../components/MyTrips/UserTripList';
import { router } from 'expo-router';

export default function MyTrip() {

  const [userTrips, setUserTrips] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const user = auth.currentUser;

  const getMyTrips = async () => {
    setLoading(true);
    const q = query(collection(db, "UserTrip"), where("userEmail", "==", user?.email));
    const querySnapshot = await getDocs(q);

    // Accumulate all trips in an array
    const trips = [];
    querySnapshot.forEach((doc) => {
      trips.push(doc.data());
    });

    // Update state with all the accumulated trips
    setUserTrips(trips);
    setLoading(false);
  };


  useEffect(() => {
    user && getMyTrips();
  }, []);

  const height = useWindowDimensions().height

  return (
    <View style={styles.container}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>

        <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>My Trips</Text>
        <TouchableOpacity onPress={() => router.push('/create-trips/SearchPlace')}>

          <Ionicons name="add-circle" size={45} color="black" />
        </TouchableOpacity>

      </View>


      {loading ? <ActivityIndicator style={{ marginTop: height * 0.4 }} size="large" color={Colors.PRIMARY} />

        :
        userTrips?.length == 0
          ? <StartNewTripCard />
          : <UserTripList userTrips={userTrips} />
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    padding: 25
  }
})