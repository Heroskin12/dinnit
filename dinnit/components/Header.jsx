import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Example icon library

const sz = 45;

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
  },
  tinyLogo: {
    width: sz,
    height: sz,
    borderRadius: sz/2
  },
});


const Header = ({ title, showBackButton = true}) => {
  const navigation = useNavigation();

  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-slate-600" style={{ paddingTop: 62 }}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FF4C4C" />
        </TouchableOpacity>
      )}
      <Text style={{ color: '#FF4C4C' }} className="text-4xl pt-4 font-satisfy font-bold">{title}</Text>
          <Image
        style={styles.tinyLogo}
        source={require('C:\\Users\\samir\\dinnit\\dinnit\\dinnit\\assets\\test_images\\stockMan.jpg')}
      />
    </View>
  );
};

export default Header;
