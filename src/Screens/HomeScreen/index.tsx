import { View, Text, TextInput, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../Navigator/AppNavigator/AppNavigator';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


/**
 *  ? Local Imports
 */

import StudyMaterial from '../StudyMaterial';
import { useState } from 'react';
import React from 'react';


interface HomeScreenProps{
  navigation : StackNavigationProp<RootStackParamsList, "HomeStack">
}
const Tab = createMaterialTopTabNavigator();


export default function HomeScreen ({navigation}: HomeScreenProps) {
  let counter = 0;
  const callApi = () => {
    console.log("Number of times this Api Called :", counter++) ;
  }

  /**
   * 
   * DEBOUNCING = It is technique to optimise the execution of a function after a certain delay in order to prevent
   * the function being triggered frequently. 
   * .
   */
  
  const debouncing = function (func: () => void, delay: number) {
    let apiCallTimer: NodeJS.Timeout;
    return function () {
      let context = this,
      args = arguments;
      clearTimeout(apiCallTimer);
       apiCallTimer = setTimeout(() => {
        return callApi.apply(context, arguments);
      }, delay)
    }
  }
  
  const debouncingMagic = debouncing(callApi, 300)

  return (
   <View style={{padding: 12}}>
    <View style={{
      width: '60%',
      borderColor: '#A8A8A8',
      borderRadius: 12,
      borderWidth: 1,
      }}>
    <TextInput
    style={{
      marginLeft: 6,
    }}
    placeholder='Debouncing '
    onChangeText={debouncingMagic}
    />
    </View>
    <View style={{margin: 12}}>
    <Button
      onPress={()=>{navigation.navigate("FreePdf")}}
      title='To Next Screen'
      />
    </View>
   </View>
  )
}
