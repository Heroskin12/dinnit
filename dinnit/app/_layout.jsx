import { StyleSheet, Text, View } from "react-native";
import { Satisfy_400Regular, useFonts } from "@expo-google-fonts/satisfy";
import React, { useEffect } from "react";
// Component that displays the current child route.
import { Slot, SplashScreen, Stack } from 'expo-router';

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        Satisfy_400Regular
    });

    console.log(fontsLoaded);

    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack>
  );
};

export default RootLayout;
