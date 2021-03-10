<<<<<<< HEAD
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import HomeStack from "./homeStack";
import GraphStack from "./graphStack";


const RootDrawerNavigator = createDrawerNavigator({
    Calendar:{
        screen: HomeStack,
    },
    Graphs:{
        screen: GraphStack,
    }
});
=======
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import HomeStack from "./homeStack";
import GraphStack from "./graphStack";


const RootDrawerNavigator = createDrawerNavigator({
    Calendar:{
        screen: HomeStack,
    },
    Graphs:{
        screen: GraphStack,
    }
});
>>>>>>> 64b346b5af57183f5a1859bff9087d3de7a41d59
export default createAppContainer(RootDrawerNavigator);