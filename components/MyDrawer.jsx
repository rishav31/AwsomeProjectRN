import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./Home";
import Notifications from "./Notifications";
import { SafeAreaView } from "react-native-safe-area-context";
import FormExample from "./ReactFormExample";
import CountDown from "./CountDown";
import MyFrom from "./FormEx";

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
    const data = "logs";
    console.log('my drawer')
    return(
        <>
            <NavigationContainer>
                <Drawer.Navigator 
                    useLegacyImplementation={false}
                    initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Notifications" component={Notifications} />
                    <Drawer.Screen name="FormExample" component={FormExample} />
                    <Drawer.Screen name="Count Down" component={CountDown} />
                    <Drawer.Screen name="MyForm" component={MyFrom} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    
    );
}

export default MyDrawer;