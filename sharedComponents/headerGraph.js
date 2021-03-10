<<<<<<< HEAD
import React from "react";
import {Dimensions, StyleSheet, Text, View, } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { Foundation } from '@expo/vector-icons';

export default function Header({navigation, title}){

    const goToGraphs = () => {
        navigation.navigate("Graphs");
    }
    return(
      
        <View style = {styles.header}>
            
            <Foundation name= "graph-bar" onPress = {goToGraphs} size = {36} color = "#ddd" style = {styles.icon}/>
            <View>
                
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
      
    );
}
const styles = StyleSheet.create(
    {
         header:{
            flexDirection: "row",
           
            width: Dimensions.get("window").width,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
           backgroundColor: "#6095CD",
            
            
        },
        headerText:{
            fontWeight: "bold",
            fontSize: 20,
            color: "#333",
            letterSpacing: 1,
           

        },
        icon :{
            position: "absolute",
            left: 16,
        },
        
        
    }
=======
import React from "react";
import {Dimensions, StyleSheet, Text, View, } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { Foundation } from '@expo/vector-icons';

export default function Header({navigation, title}){

    const goToGraphs = () => {
        navigation.navigate("Graphs");
    }
    return(
      
        <View style = {styles.header}>
            
            <Foundation name= "graph-bar" onPress = {goToGraphs} size = {36} color = "#ddd" style = {styles.icon}/>
            <View>
                
                <Text style = {styles.headerText}>{title}</Text>
            </View>
        </View>
      
    );
}
const styles = StyleSheet.create(
    {
         header:{
            flexDirection: "row",
           
            width: Dimensions.get("window").width,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
           backgroundColor: "#6095CD",
            
            
        },
        headerText:{
            fontWeight: "bold",
            fontSize: 20,
            color: "#333",
            letterSpacing: 1,
           

        },
        icon :{
            position: "absolute",
            left: 16,
        },
        
        
    }
>>>>>>> 64b346b5af57183f5a1859bff9087d3de7a41d59
)