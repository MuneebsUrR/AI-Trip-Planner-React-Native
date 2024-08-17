import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { router, useNavigation } from 'expo-router'
import { CreateTripContext } from '../../context/CreateTripContext';
import CalendarPicker from "react-native-calendar-picker";
import { Colors } from '../../constants/Colors';
import moment from 'moment';
export default function SelectDate() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: '',

        })

    }, [])
    const onDateSelectionContinue = () => {
        if (!startDate || !endDate) {
            Alert.alert("Warning", "Please select start and end date");
            return;
        }
        const totalDays = endDate.diff(startDate, 'days') + 1;
        setTripData({
            ...tripData,
            startDate: startDate.format('YYYY-MM-DD'),
            endDate: endDate.format('YYYY-MM-DD'),
            totalDays: totalDays
        })

        router.push('/create-trips/SelectBudget')

    }



    const onDateChange = (date, type) => {
        if (type === 'START_DATE') {
            setStartDate(moment(date))
        }
        if (type === 'END_DATE') {
            setEndDate(moment(date))
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 30 }}>Travel Dates?</Text>
            <View style={{ marginTop: 25 }}>
                <CalendarPicker selectedDayTextStyle={{ color: 'white' }} selectedRangeStyle={{ backgroundColor: Colors.PRIMARY }} minDate={new Date()} allowRangeSelection={true} onDateChange={onDateChange} />
            </View>
            <Text style={{ fontFamily: 'outfit', color: 'gray', textAlign: 'center', marginTop: 10 }}>Select trip start and end dates.</Text>

            <TouchableOpacity onPress={onDateSelectionContinue} style={{ marginTop: 25, borderRadius: 15, padding: 15, backgroundColor: Colors.PRIMARY }}>
                <Text style={{ fontFamily: 'outfit-medium', color: 'white', textAlign: 'center', fontSize: 20 }}>Continue</Text>
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