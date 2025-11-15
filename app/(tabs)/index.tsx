import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HoopLink 🏀</Text>
      <Text style={styles.subtitle}>Connect. Play. Compete.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Find Games</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
        <Text style={styles.secondaryButtonText}>Create Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#000000ff",
    marginBottom: 40,
  },
  button: {
    width: "80%",
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#ff4d4d",
  },
  secondaryButtonText: {
    color: "#ff4d4d",
    fontSize: 18,
    fontWeight: "600",
  },
});