import React from 'react';
import {Text, View} from "react-native";
import styles from "@/constants/Styles";
import {useAuth} from "@clerk/clerk-expo";
import {router} from "expo-router";

function Profile() {
    const {isSignedIn} = useAuth()

    if (!isSignedIn) {
        router.navigate('(auth)/SignIn')
    }

    return (
        <View style={styles.container}>
            <Text>Logged in</Text>
        </View>
    );
}

export default Profile;