import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { router, useNavigation } from 'expo-router';
import { SelectTravelerOptions } from '../../constants/Options';
import CreateOptionCard from '../../components/CreateTrip/CreateOptionCard';
import { CreateTripContext } from '../../context/CreateTripContext';
import { Colors } from '../../constants/Colors';
export default function SelectTraveler() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',

    })

  }, [])

  const [selectedTraveler, setSelectedTraveler] = React.useState(null);
  const { tripData, setTripData } = useContext(CreateTripContext);

  const onCLickContinue = () => {
    if (!selectedBudget) {
        Alert.alert("Warning", "Please select the budget option")
        return;
    }

    setTripData({
      ...tripData,
      TravelerOption: selectedTraveler
    })

}

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
          <TouchableOpacity onPress={() => setSelectedTraveler(item.title)} style={{ marginVertical: 12 }} >
            <CreateOptionCard option={item} selectedOption={selectedTraveler} />
          </TouchableOpacity>
        )}
        ListFooterComponent=
        {
          <TouchableOpacity onPress={onCLickContinue} style={{ borderRadius: 15, padding: 15, backgroundColor: Colors.PRIMARY }}>
            <Text style={{ fontFamily: 'outfit-medium', color: 'white', textAlign: 'center', fontSize: 20 }}>Continue</Text>
          </TouchableOpacity>
        }
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