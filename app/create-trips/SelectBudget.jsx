import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import { BudgetOptions } from '../../constants/Options';
import CreateOptionCard from '../../components/CreateTrip/CreateOptionCard';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';
export default function SelectBudget() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',

        })

    }, [])
    const [selectedBudget, setSelectedBudget] = React.useState(null);
    const { tripData, setTripData } = useContext(CreateTripContext);



    const onCLickContinue = () => {
        if (!selectedBudget) {
            Alert.alert("Warning", "Please select the budget option")
            return;
        }

        setTripData({
            ...tripData,
            budget: selectedBudget,
        })

        router.push('/create-trips/ReviewTrip')
       
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>Budget</Text>
            <Text style={{ marginBottom: 20, fontFamily: 'outfit-medium', fontSize: 18, color: 'gray' }}>
                Choose Spending Habits for your trips
            </Text>

            <FlatList
                data={BudgetOptions}
                keyExtractor={(item) => { item.id }}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedBudget(item.title)} style={{ marginVertical: 12 }} >
                        <CreateOptionCard option={item} selectedOption={selectedBudget} />
                    </TouchableOpacity>
                )}
                ListFooterComponent=
                {
                    <TouchableOpacity onPress={onCLickContinue} style={{ borderRadius: 15, padding: 15, backgroundColor: Colors.PRIMARY,marginTop:15 }}>
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