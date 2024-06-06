import React from "react";
import {ActivityIndicator, View, Button } from "react-native";
export default function App() {
  const onButtonPress = () => {
      console.log(`${new Date().toLocaleTimeString()} button press`);
  }
  return(
    <View style={{padding: 50}}>
      <ActivityIndicator size={"large"} color={"#61DBFB"}></ActivityIndicator>
      <Button title="Click Me" onPress={onButtonPress}></Button>
    </View>
  );
}

// ActiivtyIndicator creates a spinning wheel, loading icon
// ProgressViewAndoid indicates how much has been loaded and passed on
// <ProgressViewAndroid progress={0.3}></ProgressViewAndroid>
// <ActivityIndicator size={"large"} color={"#61DBFB"}></ActivityIndicator>