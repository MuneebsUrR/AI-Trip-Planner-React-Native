import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { auth } from '../../configs/FirebaseConfig'
import { router } from 'expo-router';

export default function Profile() {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      router.replace('/auth/sign-in')
    }).catch((error) => {
      console.log(error.message)
      Alert.alert('Error', 'Something went wrong. Please try again later.')
    });
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 25 }}>Want to Sign Out!</Text>
      <Text style={{ fontFamily: 'outfit-medium', fontSize: 18, color: 'gray', textAlign: 'center' }}>If you sign out, you will need to log in again to access your account.</Text>
      <TouchableOpacity onPress={handleSignOut} style={{ backgroundColor: '#FF5A5F', padding: 15, borderRadius: 10, marginTop: 20 }}>

        <Text style={{ paddingHorizontal: 15, textAlign: 'center', fontFamily: 'outfit-medium', color: 'white' }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: StatusBar.currentHeight,
    padding: 25
  }
})