import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({ flightData }) {
    return (
        <View style={{borderWidth:1,borderColor:'#F1F3F4',padding:10,borderRadius:10 ,marginVertical: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View>
                <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>✈️ Flights</Text>
                <Text style={{ fontFamily: 'outfit', fontSize: 17,marginTop:7 }}>Airline: {flightData?.airline }</Text>
                <Text style={{ fontFamily: 'outfit', fontSize: 17,marginTop:7 }}>Price: {flightData?.price}$</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: Colors.PRIMARY, padding: 6, width: 100, borderRadius: 10 }}>
                <Text style={{ textAlign: 'center', fontFamily: 'outfit-medium', color: 'white' }}>
                    Book Here
                </Text>
            </TouchableOpacity>
        </View>
    )
}