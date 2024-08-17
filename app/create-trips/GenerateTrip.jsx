import { View, Text, StatusBar, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CreateTripContext } from '../../context/CreateTripContext';
import { Prompt } from '../../constants/Options';
import { chatSession } from '../../configs/AIModal';
import { router } from 'expo-router';
import { auth, db } from '../../configs/FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore';
export default function GenerateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    const [loading, setLoading] = useState(false);
    const generateAiTrip = async () => {
        const FinalPrompt = Prompt.replace('{location}', tripData?.locationInfo?.name)
            .replace('{totalDays}', tripData?.totalDays)
            .replace('{totalNight}', tripData?.totalDays - 1)
            .replace('{TravelerOption}', tripData?.TravelerOption)
            .replace('{budget}', tripData?.budget)
            .replace('{totalDays}', tripData?.totalDays)
            .replace('{totalNight}', tripData?.totalDays - 1);

        setLoading(true);
        const result = await chatSession.sendMessage(FinalPrompt);

        const data = JSON.parse(result.response.text());
        console.log(data);
        const user = auth.currentUser;
        const docid = (Date.now()).toString();
        const submit = await setDoc(doc(db, "UserTrip", docid), {
            userEmail: user.email,
            trip: data
        })

        setLoading(false);


        router.replace("(tabs)/MyTrip");




    }

    useEffect(() => {
        tripData && generateAiTrip();
    }, [tripData])


    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{ paddingVertical: 15, textAlign: 'center', fontFamily: 'outfit-bold', fontSize: 30 }}>
                Please Wait...
            </Text>
            <Text style={{
                fontFamily: 'outfit-medium',
                fontSize: 18,
                color: 'gray',
                textAlign: 'center',
                paddingVertical: 15
            }}>
                We are working to generate your trip
            </Text>
            <View style={{ paddingVertical: 15 }}>

                {loading && <ActivityIndicator size="large" color="black" />}
            </View>
            <Text style={{ fontFamily: 'outfit', color: 'gray' }}>Don't Go Back</Text>
        </View>
    )
}

