import { Text, View,StatusBar} from "react-native";
import React from "react";
import Login from "../components/Login";
import { auth } from '../configs/FirebaseConfig'
import { Redirect } from "expo-router";

export default function Index() {
  const user = auth.currentUser;
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={'/MyTrip'} /> :

        <Login />
      }
    </View>
  );
}
