/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import type {StatusBarStyle} from 'react-native';

/**
 * ? Local Imports
 */

import AppNavigator from './src/Navigator/AppNavigator';


const STYLES = ['default', 'dark-content','light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);
  
  return (
    <>
    <StatusBar  
        animated={true}
        backgroundColor="#f3f3f3"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
    />
      <AppNavigator/> 
    </> 
  );
}

export default App;

const styles = StyleSheet.create({
  sectionContainer: {
   flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


