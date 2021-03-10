<<<<<<< HEAD
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Calendar from "../scenes/Calendar";
import Graphs from "../scenes/graphs";
import Header from "../sharedComponents/headerGraph"

import React from "react";


const screens = {
    Calendar:{
        screen: Calendar,
        navigationOptions:({navigation}) => {
            return {

                headerTitle: () => <Header title = "Calendar" navigation = {navigation}/>,
                headerTitleAlign: "center",
            }

        }
    },
    

}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: "#444",
        headerStyle: {backgroundColor: "#333", height: 70,},
        headerTitleStyle: {alignSelf:"center"}
    }
});
=======
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Calendar from "../scenes/Calendar";
import Graphs from "../scenes/graphs";
import Header from "../sharedComponents/headerGraph"

import React from "react";


const screens = {
    Calendar:{
        screen: Calendar,
        navigationOptions:({navigation}) => {
            return {

                headerTitle: () => <Header title = "Calendar" navigation = {navigation}/>,
                headerTitleAlign: "center",
            }

        }
    },
    

}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerTintColor: "#444",
        headerStyle: {backgroundColor: "#333", height: 70,},
        headerTitleStyle: {alignSelf:"center"}
    }
});
>>>>>>> 64b346b5af57183f5a1859bff9087d3de7a41d59
export default HomeStack;