import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
import { Satisfy_400Regular, useFonts } from "@expo-google-fonts/satisfy";
import React, { useEffect } from "react";
import { useNavigation, SplashScreen } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Example icon library

SplashScreen.preventAutoHideAsync();
const Header = ({ title, showBackButton = true}) => {
    const navigation = useNavigation();

    const [fontsLoaded, error] = useFonts({
        Satisfy_400Regular
    });

    console.log(fontsLoaded);

    useEffect(() => {
        if(error) throw error;
        if(fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if(!fontsLoaded && !error){
        SplashScreen.preventAutoHideAsync();
        return null;
    }

    const iosSpecificClass = Platform.OS === 'ios' ? 'pt-4' : 'pt-2'; 

    return (
        <View className="flex-row items-center justify-between py-3 bg-secondary p-header pb-4 px-7">
        {showBackButton && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#FF4C4C" />
            </TouchableOpacity>
        )}
        <Text className={`font-satisfy text-3xl text-primary ${iosSpecificClass}`}>{title}</Text>
            <Image
            className="w-profilepic h-profilepic rounded-full"
            source={require('..\\assets\\test_images\\stockMan.jpg')}
        />
        </View>
    );
};

export default Header;
