import React, {useState} from "react";
import {View, StyleSheet, Text, Dimensions} from "react-native";

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return(
    <View style={[styles.container, {backgroundColor}]}>
      {/* <Image source={wall} style={styles.image}></Image>
      <Image source={wall1} style={styles.image}></Image> */}
      <Text style={styles.button} onPress={() => setBackgroundColor("green")}>Green</Text>
      <Text style={styles.button} onPress={() => setBackgroundColor("red")}>Red</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: Dimensions.get("screen").width-20,
    textAlign: "center",
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 5,
    borderRadius: 20,
  },
})

// ActiivtyIndicator creates a spinning wheel, loading icon
// ProgressViewAndoid indicates how much has been loaded and passed on
// <ProgressViewAndroid progress={0.3}></ProgressViewAndroid>
// <ActivityIndicator size={"large"} color={"#61DBFB"}></ActivityIndicator>