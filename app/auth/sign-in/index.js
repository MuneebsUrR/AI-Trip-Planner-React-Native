import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Alert,KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { auth } from '../../../configs/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function index() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigation = useNavigation();


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  const onLogin = () => {
    if (Email === '' || Password === '') {
       Alert.alert('Please fill all the fields')
      return
    }

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage)
      });
  }

  const onLoginWithGoogle = () => {

  }
  return (
    <KeyboardAvoidingView behavior='padding' style={{ padding: StatusBar.currentHeight }}>
      <View>
        <TouchableOpacity onPress={() => router.push('/')} style={{ marginTop: 10 }}>
          <Ionicons name="arrow-back" size={30} color="black" />

        </TouchableOpacity>
      </View>
      <Text style={styles.heading}>Lets Sign You In</Text>
      <Text style={styles.subheading}>Welcome Back!</Text>
      <Text style={{ color: "black", fontSize: 20, marginTop: 50 }}>Email</Text>
      <TextInput onChangeText={(value) => setEmail(value)} placeholder="Enter Email" style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 2 }} />
      <Text style={{ color: "black", fontSize: 20, marginTop: 20 }}>Password</Text>
      <TextInput onChangeText={(value) => setPassword(value)} placeholder="Enter Password" secureTextEntry={true} style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 2 }} />

      <View style={styles.button}>
        <TouchableOpacity onPress={onLogin} style={styles.buttonContent}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.googleButton}>
        <TouchableOpacity onPress={onLoginWithGoogle} style={styles.buttonContent}>
          <View style={styles.iconTextWrapper}>
            <Text style={styles.googleButtonText}>Sign In with Google</Text>
            <Ionicons name="logo-google" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => router.push('/auth/sign-up')} style={styles.buttonContent}>
          <Text style={styles.buttonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'outfit-bold',
    fontSize: 35,
    marginTop: 30
  },
  subheading: {
    fontFamily: 'outfit',
    fontSize: 35,
    marginTop: 30,
    color: 'grey'
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 25,
    marginTop: '15%',
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
  googleButton: {
    borderColor: 'black',
    backgroundColor: 'white',
    color: 'black',
    borderWidth: 2,
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleButtonText: {
    fontSize: 20,
    marginRight: 10,
  },
})
