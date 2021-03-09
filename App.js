import { StatusBar } from 'expo-status-bar'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Calendar from './scenes/Calendar'
import {AppLoading} from "expo"
import Navigator from "./stacks/drawer"

export default function App(){
  
  return(
    <Navigator />
  );
}