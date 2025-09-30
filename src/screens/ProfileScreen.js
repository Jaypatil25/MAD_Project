import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Card } from "react-native-paper";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={{ alignItems: "center" }}>
          <Image source={{ uri: "https://img.freepik.com/free-photo/close-up-portrait-beautiful-cat_23-2149214419.jpg" }} style={styles.profileImage} />
          <Text style={styles.name}>Cat</Text>
          <Text style={styles.email}>cat@example.com</Text>
          <View style={styles.buttonContainer}>
            <Button mode="contained" icon="cog"  style={styles.button}>Settings</Button>
            <Button mode="contained" buttonColor="#d32f2f" icon="logout" style={styles.button}>Logout</Button>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    padding: 20, 
    backgroundColor: "#fff" 
  },
  profileImage: { 
    width: 120, 
    height: 120, 
    borderRadius: 60, 
    marginBottom: 20, 
    borderWidth: 2, 
    borderColor: "#4a90e2" 
  },
  name: { fontSize: 22, fontWeight: "bold", marginBottom: 5 },
  email: { fontSize: 16, color: "gray", marginBottom: 30 },
  buttonContainer: { flexDirection: "row", gap: 15 },
  button: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#4a90e2", 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 10, 
    gap: 8 
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
