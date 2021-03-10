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
export default createAppContainer(RootDrawerNavigator);