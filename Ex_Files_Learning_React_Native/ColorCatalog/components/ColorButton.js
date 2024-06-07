import React, {useState} from "react";
import {View, StyleSheet, Text, Dimensions, TouchableHighlight} from "react-native";


export default function ColorButton({backgroundColor, onPress=f=>f}) {
    return (
      <TouchableHighlight style={styles.button} onPress={()=> onPress(backgroundColor)} underlayColor="orange">
        <View style={styles.row}>
          <View style={[styles.sample, {backgroundColor: backgroundColor}]}></View>
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
       </TouchableHighlight>
    );
  }

  const styles = StyleSheet.create({
    button: {
      width: Dimensions.get("screen").width-10,
      margin: 10,
      padding: 10,
      borderWidth: 5,
      borderRadius: 20,
      alignSelf: "center",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    buttonText: {
      textAlign: "center",
      fontSize: 30,
    },
    sample: {
      height: 20,
      width: 20,
      borderRadius: 10,
      backgroundColor: "white",
      margin: 10,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
  })