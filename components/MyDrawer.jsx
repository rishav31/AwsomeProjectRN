import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./Home";
import Notifications from "./Notifications";
import { SafeAreaView } from "react-native-safe-area-context";
import FormExample from "./ReactFormExample";

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
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    
    );
}

export default MyDrawer;