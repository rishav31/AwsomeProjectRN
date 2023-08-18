import React from "react";
import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./CommonStyle";


const Notifications = ({ navigation }) => {
    return (
        <View style={styles.defaultStyle}>
          <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
      );
  }

  export default Notifications;