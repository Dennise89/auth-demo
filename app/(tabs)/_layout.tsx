import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';
import {Ionicons} from "@expo/vector-icons";
import {useAuth} from "@clerk/clerk-expo";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const {isSignedIn} = useAuth()

    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({size, color}) => <Ionicons size={size} color={color} name="home-outline"/>
            }}/>
            <Tabs.Screen name="two" options={{
                title: "Info",
                tabBarIcon: ({size, color}) => <Ionicons size={size} color={color} name="information-circle-outline"/>
            }}/>
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({size, color}) => <Ionicons size={size} color={color} name="person-circle-outline"/>,
                href: isSignedIn ? 'profile' : '(auth)/SignIn'
            }}/>
        </Tabs>
    );
}
