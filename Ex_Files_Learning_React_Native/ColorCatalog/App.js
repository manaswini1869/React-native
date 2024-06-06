import React from "react";
import {ActivityIndicator, View, Button, Alert, Dimensions, Text, Platform, ProgressBarAndroidBase } from "react-native";
export default function App() {
  const { height, width } = Dimensions.get('window');

  const onButtonPress = () => {
      Alert.alert(`${new Date().toLocaleTimeString()} button press`);
  }
  return(
    <View style={{padding: 50}}>
      <ActivityIndicator size={"large"} color={"#61DBFB"}></ActivityIndicator>
      {Platform.OS === "android" && <Text>Hello !</Text>}
      {Platform.OS === "ios" && <Text>Bye !</Text>}
      <Button title="Click Me" onPress={onButtonPress}></Button>
      <Text>height: {height}</Text>
      <Text>width: {width}</Text>
      <Text>Platform: {Platform.OS}</Text>
    </View>
  );
}

// ActiivtyIndicator creates a spinning wheel, loading icon
// ProgressViewAndoid indicates how much has been loaded and passed on
// <ProgressViewAndroid progress={0.3}></ProgressViewAndroid>
// <ActivityIndicator size={"large"} color={"#61DBFB"}></ActivityIndicator>