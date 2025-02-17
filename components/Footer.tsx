import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Footer() {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => router.push("/")} style={styles.iconContainer}>
        <Ionicons name="home" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/memories")} style={styles.iconContainer}>
        <MaterialCommunityIcons name="hexagon-slice-1" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/explore")} style={styles.iconContainer}>
        <AntDesign name="profile" size={24} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/content")} style={styles.iconContainer}>
        <MaterialCommunityIcons name="face-man-profile" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#6A1B9A",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  iconContainer: {
    alignItems: "center",
  },
  iconText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },
});
