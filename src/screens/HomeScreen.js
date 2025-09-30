import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import LinearGradient from 'react-native-linear-gradient'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎟️ Welcome to BB-Tickets</Text>
      <Text style={styles.subtitle}>Book Your Show, Anytime, Anywhere</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "gray" },
});
