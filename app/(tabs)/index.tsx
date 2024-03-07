import React from "react";
import {View, Text} from 'react-native';
import {SignedIn, SignedOut} from "@clerk/clerk-expo";
import styles from "@/constants/Styles";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <SignedIn>
                <Text>You are Signed in</Text>
            </SignedIn>
            <SignedOut>
                <Text>You are Signed out</Text>
            </SignedOut>
        </View>
    );
}