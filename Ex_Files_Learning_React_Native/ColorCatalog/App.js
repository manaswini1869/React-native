import React from "react";
import wall from "./assets/wall.jpg"; 
import wall1 from "./assets/wall1.jpg";
import {View, StyleSheet, Image, Dimensions } from "react-native";
export default function App() {
 
  return(
    <View style={styles.page}>
      <Image source={wall} style={styles.image}></Image>
      <Image source={wall1} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    borderRadius: 50,
    margin: 10,
    width: Dimensions.get("window").width - 10,
  },
})

// ActiivtyIndicator creates a spinning wheel, loading icon
// ProgressViewAndoid indicates how much has been loaded and passed on
// <ProgressViewAndroid progress={0.3}></ProgressViewAndroid>
// <ActivityIndicator size={"large"} color={"#61DBFB"}></ActivityIndicator>