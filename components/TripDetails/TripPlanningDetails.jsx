import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import DayPlanningCard from './DayPlanningCard';
export default function TripPlanningDetails({ details }) {
   
    return (
        <View>
            <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>📝 Plan Details</Text>

            {
                details.map((item, index) => (
                   <View key={index}>
                       <DayPlanningCard item={item} />
                   </View>
                ))
            }

        </View>
    )
}   