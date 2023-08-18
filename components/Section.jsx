import React from 'react';
import { StyleSheet, View, Text, useColorScheme,  } from 'react-native';
import styles from "./CommonStyle";
import { Colors } from 'react-native/Libraries/NewAppScreen';


const Section = ({children, title})=> {

    const isDarkMode = useColorScheme() === 'dark';

    return (
      <View style={styles.sectionContainer}>
        <Text
          style={[
            styles.sectionTitle,
            {
              color: isDarkMode ? Colors.white : Colors.black,
            },
          ]}>
          {title}
        </Text>
        <Text
          style={[
            styles.sectionDescription,
            {
              color: isDarkMode ? Colors.light : Colors.dark,
            },
          ]}>
          {children}
        </Text>
      </View>
    );
  }

export default Section;