import React from "react";
import {View, Alert, Dimensions, Text, StyleSheet } from "react-native";
export default function App() {
  const { height, width } = Dimensions.get('window');

  const onButtonPress = () => {
      Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  }
  return(
    <View style={styles.page}>
      <Text style={styles.text}>Red</Text>
      <Text style={[styles.text, styles.selectedText]}>Green</Text>
      <Text style={styles.text}>Blue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    marginTop: 40, 
    backgroundColor: "#DDD",
  },
  text: {
    fontSize: 22,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5,
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow",
  },
})

// ActiivtyIndicator creates a spinning wheel, loading icon
// ProgressViewAndoid indicates how much has been loaded and passed on
// <ProgressViewAndroid progress={0.3}></ProgressViewAndroid>
// <ActivityIndicator size={"large"} color={"#61DBFB"}></ActivityIndicator>