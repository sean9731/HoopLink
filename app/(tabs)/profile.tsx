import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconSymbol } from "@/components/ui/icon-symbol";

export const options = {
  title: "Profile",
  tabBarIcon: ({ color }: { color: string }) => (
    <IconSymbol size={28} name="person.fill" color={color} />
  ),
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>This is your profile tab.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 32, fontWeight: "bold" },
  subtitle: { fontSize: 18, color: "#666", marginTop: 6 },
});
