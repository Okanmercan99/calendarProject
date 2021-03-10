<<<<<<< HEAD
import {createStackNavigator} from "react-navigation-stack";

import Calendar from "../scenes/Calendar";
import Graphs from "../scenes/graphs";
import Header from "../sharedComponents/headerMenu"
import React from "react";


const screens = {
   Graphs:{
        screen: Graphs,
        navigationOptions:({navigation}) => {
            return {

                headerTitle: () => <Header title = "Graphs" navigation = {navigation}/>,
                headerTitleAlign: "center",
            }

        }
   }

}

const GraphStack = createStackNavigator(screens, {defaultNavigationOptions:{
   
    headerTintColor: "#444",
    headerStyle: {backgroundColor: "#333", height: 70,},
    

    
}}
);
=======
import {createStackNavigator} from "react-navigation-stack";

import Calendar from "../scenes/Calendar";
import Graphs from "../scenes/graphs";
import Header from "../sharedComponents/headerMenu"
import React from "react";


const screens = {
   Graphs:{
        screen: Graphs,
        navigationOptions:({navigation}) => {
            return {

                headerTitle: () => <Header title = "Graphs" navigation = {navigation}/>,
                headerTitleAlign: "center",
            }

        }
   }

}

const GraphStack = createStackNavigator(screens, {defaultNavigationOptions:{
   
    headerTintColor: "#444",
    headerStyle: {backgroundColor: "#333", height: 70,},
    

    
}}
);
>>>>>>> 64b346b5af57183f5a1859bff9087d3de7a41d59
export default GraphStack;