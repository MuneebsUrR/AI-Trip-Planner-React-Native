import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { auth } from '../../../configs/FirebaseConfig';

export default function index() {
  const navigation = useNavigation();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [FullName, setFullName] = useState('');
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  const onCreateAccount = () => {
    if (Email === '' || Password === '' || FullName === '') {
      Alert.alert('Error', 'Please fill all the fields');
      return
    }

    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        Alert.alert(
          "Account Created",
          "Your account has been created successfully",
          [
            {
              text: "OK",
              onPress: () => router.push('/auth/sign-in')
            }
          ]
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
      })
  }

  return (
    <View style={{ padding: StatusBar.currentHeight }}>
      <View>
        <TouchableOpacity onPress={() => router.push('/')} style={{ marginTop: 10 }}>
          <Ionicons name="arrow-back" size={30} color="black" />

        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView behavior='position'>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={{ color: "black", fontSize: 20, marginTop: 50 }}>Full Name</Text>
        <TextInput onChangeText={(value) => setFullName(value)} placeholder="Enter Email" style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 2 }} />
        <Text style={{ color: "black", fontSize: 20, marginTop: 20 }}>Email</Text>
        <TextInput onChangeText={(value) => setEmail(value)} placeholder="Enter Email" style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 2 }} />
        <Text style={{ color: "black", fontSize: 20, marginTop: 20 }}>Password</Text>
        <TextInput onChangeText={(value) => setPassword(value)} placeholder="Enter Password" secureTextEntry={true} style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 2 }} />
      </KeyboardAvoidingView>
      <View style={styles.button}>
        <TouchableOpacity onPress={onCreateAccount} style={styles.buttonContent}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>




      <View style={{
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 25,
        marginTop: 30,
        borderColor: 'black',
        borderWidth: 2
      }}>
        <TouchableOpacity onPress={() => router.push('/auth/sign-in')} style={styles.buttonContent}>
          <Text style={{
            fontSize: 18,
            color: 'black',
            marginRight: 10,
          }}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'outfit-bold',
    fontSize: 35,
    marginTop: 30
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


})
