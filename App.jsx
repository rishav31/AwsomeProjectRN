/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './components/MyDrawer';
import MyNewDrawer from './components/MyCustomExample';
import Section from './components/Section';
import styles from './components/CommonStyle';


const App = ()=> {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <MyDrawer></MyDrawer>
      <SafeAreaView>
        <View>
          <Section title="Hello">
            <Text style={styles.highlight}>App.jsx</Text>
          </Section>
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
