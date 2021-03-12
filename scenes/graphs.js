import React, {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native'
import {globalStyle} from "../Styles/globalStyle"



export default function Graphs(){
    return(
        <ImageBackground source = {require("../Images/c.jpg")} style= {globalStyle.container}>
                <View style = {styles.container}>
                    <TouchableOpacity style = {styles.touchable}>
                        <Image 
                            style = {styles.image}
                            source = {require("../Images/graphimageweek.png")}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.touchable}>
                        <Image 
                            style = {styles.image}
                            source = {require("../Images/graphimagemonth.png")}
                        />
                    </TouchableOpacity>
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
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: 20,
        
    },
    image:{
        height: 150,
        width: 150,
    },
});