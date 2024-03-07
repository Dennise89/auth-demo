import React from "react";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {useSignIn} from "@clerk/clerk-expo";
import styles from "@/constants/Styles";
import SignInWithOAuth from "@/components/SignInWithOAuth";

export default function SignInScreen() {
    const {signIn, setActive, isLoaded} = useSignIn();

    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress,
                password,
            });
            // This is an important step,
            // This indicates the user is signed in
            await setActive({session: completeSignIn.createdSessionId});
        } catch (err: any) {
            console.log(err);
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textField}
                autoCapitalize="none"
                value={emailAddress}
                placeholder="Email..."
                onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            />
            <TextInput
                style={styles.textField}
                value={password}
                placeholder="Password..."
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
            />

            <TouchableOpacity onPress={onSignInPress}>
                <Text style={styles.button}>Sign in</Text>
            </TouchableOpacity>

            <SignInWithOAuth/>
        </View>
    );
}