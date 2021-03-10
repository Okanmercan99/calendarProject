<<<<<<< HEAD
import React from "react";
import {StyleSheet,TouchableOpacity,Text,View} from "react-native";

export default function FlatButton({text,onPress}){
    return(
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
                <Text style= {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor:`#ff7f50`,
        

    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center",
    }
=======
import React from "react";
import {StyleSheet,TouchableOpacity,Text,View} from "react-native";

export default function FlatButton({text,onPress}){
    return(
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
                <Text style= {styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor:`#ff7f50`,
        

    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: 16,
        textAlign: "center",
    }
>>>>>>> 64b346b5af57183f5a1859bff9087d3de7a41d59
})