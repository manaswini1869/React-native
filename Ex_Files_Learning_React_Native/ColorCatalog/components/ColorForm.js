import React, {useState, useRef} from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function ColorForm({onNewColor=f=>f}) {
    const [inputValue, setValue] = useState("");
    const input = useRef();
    return (
        <View style={styles.container}>
            <TextInput 
            ref={input}
            style={styles.textInput} 
            autoCapitalize="none"
            value={inputValue}
            onChangeText={setValue}
            placeholder="Enter a color..."></TextInput>  
            <Button title="add" onPress={() => {
                input.current.blur();
                console.log(`${inputValue}`)
                onNewColor(inputValue)
                setValue("");
            }}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
    },
    textInput: {
        flex: 1,
        borderWidth: 5,
        fontSize: 20, 
        borderRadius: 5,
        padding: 5,
    },
});