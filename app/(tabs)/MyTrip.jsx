import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
export default function MyTrip() {

  const [userTrips, setUserTrips] = React.useState([])

  return (
    <View style={styles.container}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>My Trips</Text>
        <Ionicons name="add-circle" size={45} color="black" />

      </View>

      {
        userTrips?.length==0
        ? <StartNewTripCard />
        :null
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