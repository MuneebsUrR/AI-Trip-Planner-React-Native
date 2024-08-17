import { View, Text } from 'react-native'
import React from 'react'

export default function CreateOptionCard({ option,selectedTraveler }) {
    return (
        <View style={[{
            padding: 22,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor:'#F1F3F4',
            borderRadius:10,

        }, selectedTraveler==option.title && {borderWidth:2}]}>
            <View>

                <Text style={{
                    fontSize: 20,
                    fontFamily: 'outfit-bold'
                }}>{option.title}</Text>
                <Text style={{ fontFamily: 'outfit-medium', color: 'gray', fontSize: 17 }}>{option.desc}</Text>
            </View>
            <View>
                <Text style={{ fontSize: 35 }}>{option.icon}</Text>
            </View>
        </View>
    )
}