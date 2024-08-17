import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from 'expo-router';
import { SelectTravelerOptions } from '../../constants/Options';
import CreateOptionCard from '../../components/CreateTrip/CreateOptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SelectTraveler() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',

    })

  }, [])

  const [selectedTraveler, setSelectedTraveler] = React.useState('')
  const { tripData, setTripData } = useContext(CreateTripContext);

  useEffect(() => {
    setTripData({
      ...tripData,
      TravelerOption: selectedTraveler
    })
  }, [selectedTraveler])

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>Who's Going?</Text>

      <View>
        <Text style={{ fontFamily: 'outfit-medium', color: 'gray', fontSize: 18, marginTop: 10 }}>Choose your traveles</Text>
      </View>
      <FlatList
        data={SelectTravelerOptions}
        keyExtractor={(item) => { item.id.toString() }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedTraveler(item.title)} style={{ marginVertical: 15 }} >
            <CreateOptionCard option={item} selectedTraveler={selectedTraveler} />
          </TouchableOpacity>
        )}
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