import { StatusBar } from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import moment from 'moment'
import buildCalendar from "./build"
import {globalStyle} from "../Styles/globalStyle"
import FlatButton from "../sharedComponents/button"


export default function Calendar() {
    const [calendar,setCalendar] = useState([])
    const [value, setValue] = useState(moment())
    const monthIncrease = () => {
        setValue(value.clone().add(1, "month"));
    }
    const monthDecrease = () => {
        setValue(value.clone().subtract(1, "month"));
    }
    
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
   <ImageBackground source = {require("../Images/woodimage.jpg")} style= {globalStyle.container}>     
   
        <View style={styles.header}>
            <View style = {styles.button}>
                    <FlatButton text = "prev" onPress = {monthDecrease}/>

            </View>
            <View style = {styles.headerTextContainer}>
                  <Text style = {styles.headerTextMonth}> {CurrMonth()}</Text>
                  <Text style = {styles.headerTextYear}> {CurrYear()}</Text>

            </View>
            <View style = {styles.button}>
            <FlatButton text = "next"  onPress = {monthIncrease}/>

            </View>
        </View>
        <View style = {styles.daysOfWeek}>

            <Text style ={styles.daysOfWeekText}>Mon</Text>
            <Text style ={styles.daysOfWeekText}>Tue</Text>
            <Text style ={styles.daysOfWeekText}>Wed</Text>
            <Text style ={styles.daysOfWeekText}>Thu</Text>
            <Text style ={styles.daysOfWeekText}>Fri</Text>
            <Text style ={styles.daysOfWeekText}>Sat</Text>
            <Text style = {styles.daysOfWeekText}> Sun</Text>


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
    
    </ImageBackground>
    )

    
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        height: 80,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
       
    },
    headerTextContainer:{
       flexDirection: "row",
      
        width: 220,
       
        height: 50,
        padding: 10,
        textAlign: "center",
        justifyContent: "center",
        
        color: "#555",
    },
    headerTextMonth:{
        alignSelf: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: `#ffefd5`,
    
    },
    headerTextYear:{
        fontSize: 30,
        alignSelf: "center",
        fontWeight: "bold",
        color: `#ffefd5`,

        
    },
    
    table:{
       
        marginTop: 3,
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
        backgroundColor: `#ffdab9`,
    },
    selected: {
        backgroundColor: `#8b4513`,
    },
    text: {
        fontSize: 20,
        justifyContent: "center",
    },
    days: {
        
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width / 7.5,
        height: 70,
        margin: 2,
        
    },
    daysOfWeek:{
        flexDirection: "row",
        paddingHorizontal: 4,
    },
    daysOfWeekText:{
        marginLeft: Dimensions.get("window").width / 30,
        fontSize : 25,
        color: "white",
    },
    button:{
        textAlign: "center",
        
        padding: 10,
        justifyContent: "center",
      
    }
})