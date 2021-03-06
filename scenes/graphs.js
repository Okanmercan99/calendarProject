import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import {globalStyle} from "../Styles/globalStyle"

export default function Graphs(){
    return(
        <View style = {[globalStyle.container, {margin: 30}]}>
            <Text> Graph Screen </Text>
        </View>
    )
}