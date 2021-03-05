import { StatusBar } from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native'
import moment from 'moment'
import buildCalendar from "./build"
import {globalStyle} from "../Styles/globalStyle"

export default function Calendar() {
    const [calendar,setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])
    
    function isSelected(day) {return value.isSame(day, "day");}
    function beforeToday(day){return day.isBefore(new Date(), "day ")}
    function isToday(day) {return day.isSame(new Date(), "day");}

    function dayStyles(day){
        if(beforeToday(day)) {return "before"}
        if(isSelected(day)) {return "selected"}
        if(isToday(day)) {return "today"}
        return ""
    }

    function CurrMonth(){return value.format("MMMM")}
    function CurrYear(){return value.format("YYYY")}

    return(   
    <View style = {globalStyle.container}>
        <View style={styles.header}>
            <View style = {styles.button}>

                <Button
                    color= "#8b4513"
                    title={"Prev"}
                    onPress={() => {setValue(value.clone().subtract(1, "month"))}}
                />
            </View>
            <Text style={styles.headerText}> {CurrMonth()} {CurrYear()}</Text>
            <View style = {styles.button}>
                <Button
                  
                    color= "#8b4513"
                    title={"Next"}
                    onPress={() => {setValue(value.clone().add(1, "month"))}}

                />
            </View>
        </View>
        <View style= {styles.table}>
            {calendar.map((week) => (
                
                <View style={styles.week}>
                {week.map((day) => (
                <TouchableOpacity
                onPress={()=>{setValue(day)}}
                style={[styles.days, isSelected(day) ? styles.selected : styles.not_selected]}>
                <Text style={styles.text}>{day.format("D").toString()}</Text>
                </TouchableOpacity>
                ))}
                </View>
            ))}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        backgroundColor: "#888",
    },
    headerText:{
        fontSize: 40,
        color: "#555",
    },
    table:{
       
        marginTop: 20,
        marginHorizontal: 5,
        
        padding: 5,
    },
    week: {
        borderTopWidth: 1,
        paddingTop: 10,
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-evenly",
        
    },
    not_selected: {
        backgroundColor: "grey",
    },
    selected: {
        backgroundColor: 'red',
    },
    text: {
        fontSize: 20,
        justifyContent: "center",
    },
    days: {
       
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width / 7.5,
        height: 70,
        margin: 1,
        
        
    },
    button:{
        textAlign: "center",
        
        padding: 10,
        justifyContent: "center",
      
    }
})