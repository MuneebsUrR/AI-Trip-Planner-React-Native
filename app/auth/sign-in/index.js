import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'

import { useNavigation } from 'expo-router'
import { Colors } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import { auth } from '../../../configs/FirebaseConfig';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function index() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: '125804255437-mg26jdvk93goabtpnrjk6mg057ah6ep6.apps.googleusercontent.com',
    androidClientId: '125804255437-v2g1dlbmj3t5mnpe3bujg2b558vduc5u.apps.googleusercontent.com',
  });
  const navigation = useNavigation();



  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          // User signed in
          const user = userCredential.user;
          console.log('User signed in:', user);
          router.replace('/MyTrip');
        })
        .catch((error) => {
          console.error('Error signing in with Google:', error);
          Alert.alert('Error', 'Failed to sign in with Google');
        });
    }
  }, [response]);


  const googleSignIn = async () => {
    try {
      await promptAsync();
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
      Alert.alert('Error', 'An error occurred during Google Sign-In');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])
  const onLogin = () => {
    if (Email === '' || Password === '') {
      Alert.alert('Error', 'Please fill all the fields');
      return
    }

    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.replace('/MyTrip')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("Error", errorMessage);
      });
  }


  return (
    <View style={{ padding: StatusBar.currentHeight }}>
      <View>
        <TouchableOpacity onPress={() => router.replace('/')} style={{ marginTop: 10 }}>
          <Ionicons name="arrow-back" size={30} color="black" />

        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView behavior='position'>
        <Text style={styles.heading}>Lets Sign You In</Text>
        <Text style={styles.subheading}>Welcome Back!</Text>
        <Text style={{ color: "black", fontSize: 20, marginTop: 50 }}>Email</Text>
        <TextInput autoCapitalize={'none'} onChangeText={(value) => setEmail(value)} placeholder="Enter Email" style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 2 }} />
        <Text style={{ color: "black", fontSize: 20, marginTop: 20 }}>Password</Text>
        <TextInput autoCapitalize={'none'} onChangeText={(value) => setPassword(value)} placeholder="Enter Password" secureTextEntry={true} style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, borderColor: 'black', borderWidth: 2 }} />
      </KeyboardAvoidingView>
      <View style={styles.button}>
        <TouchableOpacity onPress={onLogin} style={styles.buttonContent}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.googleButton}>
        <TouchableOpacity onPress={googleSignIn} style={styles.buttonContent}>
          <View style={styles.iconTextWrapper}>
            <Text style={styles.googleButtonText}>Sign In with Google</Text>
           <Image source={require('../../../assets/images/googleicon.png')} style={{ width: 30, height: 30 }} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => router.replace('/auth/sign-up')} style={styles.buttonContent}>
          <Text style={styles.buttonText}>Create New Account</Text>
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
    padding: 12,
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
