import { StatusBar } from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import moment from 'moment'
import buildCalendar from "../Calendar/build"
import buildDays from  "../Calendar/buildDays"
import {globalStyle} from "../Styles/globalStyle"
import FlatButton from "../sharedComponents/button"


export default function Calendar({navigation}) {
    const [weekDays,setWeekDays] = useState([])
    const [calendar,setCalendar] = useState([])
    const [value, setValue] = useState(moment())
    const goToGraphs = () => {
        navigation.navigate("Graphs");
    }
    const monthIncrease = () => {
        setValue(value.clone().add(1, "month"));
    }
    const monthDecrease = () => {
        setValue(value.clone().subtract(1, "month"));
    }
    
    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])
    useEffect(() => {
        setWeekDays(buildDays(value))
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
   <ImageBackground source = {require("../Images/turkuaz.jpg")} style= {globalStyle.container}>     
   
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
        <View style = {styles.daysOfWeek} >
            {weekDays.map((week) => (
                
                <View style={ styles.weekDaysContainer}>
                {week.map((day) => (
                    <TouchableOpacity style={styles.weekDays}>
                    
                    <Text style={[styles.text, {color:`#ffefd5`,fontWeight: "bold"}]}>{day.format("ddd").toString()}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            ))}
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
    
        <View style = {styles.graphButton}>
                <FlatButton  text = "Workload Graphs" onPress = {goToGraphs}/>

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
    weekDaysContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    not_selected: {
        backgroundColor: `#ffdab9`,
    },
    selected: {
        backgroundColor: `#00ffff`,
    },
    text: {
        fontSize: 20,
        justifyContent: "center",
        color : "#333"
    },
    
    days: {
        
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width / 7.5,
        height: 55,
        margin: 1,
        marginHorizontal: 4,
        
    },
    weekDays: {
        
        
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get("window").width / 7.5,
        height: 35,
        margin: 1,
        marginHorizontal: 4,
       
        
    },
    daysOfWeek:{
       flexDirection: "row",
    
        marginHorizontal: 5,
        
        paddingHorizontal: 5,
       
    },
    
    button:{
        textAlign: "center",
        
        padding: 10,
        justifyContent: "center",
      
    },
    graphButton:{
      justifyContent: "center",
      alignItems: "center",
     
    }
})