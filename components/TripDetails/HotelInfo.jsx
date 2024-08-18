import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function HotelInfo({ hotelData }) {
    return (
        <View style={{ marginTop: 15 }}>
           <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>🛏️ Hotel Recommendation</Text>
            <FlatList
                data={hotelData}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={{ marginRight: 15, width: 180 }}>
                        <Image source={require('../../assets/images/login.jpeg')} style={{
                            width: 180,
                            height: 120,
                            borderRadius: 10,
                        }} />
                        <View>
                            <Text style={{ marginTop: 7, fontFamily: 'outfit-medium' }}>{item?.name}</Text>
                        </View>
                        <View style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={{ fontFamily: 'outfit', color: 'gray' }}>⭐ {item?.ratings}</Text>
                            <Text style={{ fontFamily: 'outfit' }}>${item?.price}</Text>
                        </View>
                    </View>
                )}
                horizontal={true}
                style={{ marginVertical: 10 }}

            />
        </View>
    )
}