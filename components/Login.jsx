import { View, Text, Image, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

export default function Login() {
    const height = useWindowDimensions().height;
    //40% of the height 
    const imageHeight = height * 0.6;
    return (
        <View>
            <Image source={require('../assets/images/login.jpeg')} style={{
                width: '100%',
                height: imageHeight
            }} />
            <View style={styles.container}>
                <Text style={styles.heading}>AI Travel Planner</Text>
                <Text style={styles.subHeading}>Discover your next adventure effortlessly. Personalized itineraries at your fingertips. Travel smarter with AI-driven insights.</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => router.push('/auth/sign-in')} style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Get Started</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        fontFamily: 'outfit-bold',
        fontSize: 34,
        textAlign: 'center',
        marginTop: 30
    },
    subHeading: {
        fontFamily: 'outfit',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        marginHorizontal: 20,
        color: 'grey'
    },
    container: {
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -30,
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 20,
        marginHorizontal: 22,
        borderRadius: 25,
        marginTop: 20,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        marginRight: 10,
    },
});
