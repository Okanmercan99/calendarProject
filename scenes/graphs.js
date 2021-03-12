import React, {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native'
import {globalStyle} from "../Styles/globalStyle"



export default function Graphs(){
    return(
        <ImageBackground source = {require("../Images/c.jpg")} style= {globalStyle.container}>
                <View style = {styles.container}>
                    <View style = {styles.button}>
                        <Text style = {{fontSize: 18,color: "black"}}> WEEKLY WORKLOAD </Text>
                        <TouchableOpacity style = {styles.touchable}>
                            <Image 
                                style = {styles.image}
                                source = {require("../Images/bargraphicon3.png")}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.button}>
                        <Text style = {{fontSize: 18,color: "black"}}> MONTHLY WORKLOAD </Text>
                        <TouchableOpacity style = {styles.touchable}>
                            <Image 
                                style = {styles.image}
                                source = {require("../Images/bargraphmonthly.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection : "column",
        alignItems: "center",
        justifyContent: "center",
        
    },
    touchable:{
       
        margin: 20,
        
    },
    button:{
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
        backgroundColor: "#1ED3A4",
    },
    image:{
        resizeMode:'contain',
        height: 150,
        width: 150,
    },
  
});