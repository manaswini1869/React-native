import React, {useState} from "react";
import {View, StyleSheet, FlatList} from "react-native";
import ColorButton from "./ColorButton";
import ColorForm  from "./ColorForm";
import { useColors } from "./../hooks";

export default function ColorList({navigation}) {
  const [backgroundColor, setBackgroundColor] = useState("salmon");
  const {colors, addColor} = useColors();
  return(
    <> 
    <ColorForm onNewColor= {addColor}></ColorForm>
    <FlatList style={[styles.container]}
      data={colors}
      renderItem={({item}) => {
        return (
          <ColorButton key={item.id} backgroundColor={item.color}
          onPress={() => navigation.navigate("Details", {color: item.color})}></ColorButton>
        );
      }}
    ></FlatList>
    </>
    // <View style={[styles.container, {backgroundColor}]}>
    //   <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>     
    //   <ColorButton backgroundColor="green" onPress={setBackgroundColor}/> 
    //   <ColorButton backgroundColor="blue" onPress={setBackgroundColor}/> 
    //   <ColorButton backgroundColor="yellow" onPress={setBackgroundColor}/> 
    //   <ColorButton backgroundColor="purple" onPress={setBackgroundColor}/> 
    // </View>
  );
}

// <> </> this can send multiple components without any problem


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
})

// ActiivtyIndicator creates a spinning wheel, loading icon
// ProgressViewAndoid indicates how much has been loaded and passed on
// <ProgressViewAndroid progress={0.3}></ProgressViewAndroid>
// <ActivityIndicator size={"large"} color={"#61DBFB"}></ActivityIndicator>