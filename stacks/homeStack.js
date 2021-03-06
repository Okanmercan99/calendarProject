import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Calendar from "../scenes/Calendar";
import Graphs from "../scenes/graphs";

import React from "react";


const screens = {
    Calendar:{
        screen: Calendar,
        navigationOptions:{
            title: "Calendar",
       
            
            
        }
    },
    Graphs: {
        screen: Graphs,
        navigationOptions:{
            title: "Graphs"
        }
    }

}

const HomeStack = createStackNavigator(screens, {defaultNavigationOptions:{
    headerShown : false,
}});
export default createAppContainer(HomeStack);