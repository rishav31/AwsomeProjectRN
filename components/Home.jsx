import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./CommonStyle";


const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.defaultStyle}>
        <Text>Home Screen</Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }

  export default HomeScreen;