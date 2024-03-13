import React from 'react';
import { Text, View } from 'react-native';
import styles from '@/constants/Styles';
import { useAuth } from '@clerk/clerk-expo';
import { Redirect, router, useFocusEffect } from 'expo-router';

function Profile() {
  const { isSignedIn } = useAuth();

  //   if (!isSignedIn) {
  //     console.log('I FIRE');
  //     return <Redirect href={'(auth)/SignIn'} />;
  //   }

  return (
    <View style={styles.container}>
      <Text>Logged in</Text>
    </View>
  );
}

export default Profile;
