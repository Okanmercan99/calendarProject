import { StatusBar } from 'expo-status-bar'
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import moment from 'moment'
import buildCalendar from "./build"

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
    <View>
        <View style={styles.header}>
            <Button
                title={"Prev"}
                onPress={() => {setValue(value.clone().subtract(1, "month"))}}
            />
            <Text style={{fontSize: 48, marginLeft: 60, marginRight: 70}}> {CurrMonth()} {CurrYear()}</Text>
            <Button
                title={"Next"}
                onPress={() => {setValue(value.clone().add(1, "month"))}}
            />
        </View>
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
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 30,
    },
    week: {
        flexDirection: "row",
        textAlign: 'center',
        
    },
    not_selected: {
        backgroundColor: "grey",
    },
    selected: {
        backgroundColor: 'red',
    },
    text: {
        fontSize: 48,
    },
    days: {
        justifyContent: "center",
        width: 70,
        height: 70,
        margin: 1,
        flexWrap: 'wrap',
        display: 'flex',
        position: 'relative',
    },
    text: {
        fontSize: 16,
        justifyContent: "center",
    }
})