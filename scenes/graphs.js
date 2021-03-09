import React, {useState} from 'react'
import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import {globalStyle} from "../Styles/globalStyle"


export default function Graphs(){
    return(
        <ImageBackground source = {require("../Images/c.jpg")} style= {globalStyle.container}>
                <View>
                <Text> Graph Screen </Text>
                </View>
        </ImageBackground>
    )
}