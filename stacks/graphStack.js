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
export default GraphStack;