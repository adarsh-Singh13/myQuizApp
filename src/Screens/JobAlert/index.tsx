import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { RootStackParamsList } from '../../Navigator/AppNavigator/AppNavigator'
import { StackNavigationProp } from '@react-navigation/stack'

interface LoadingScreenProps{
  navigation : StackNavigationProp<RootStackParamsList, 'JobAlert'>
}

export default function JobAlertScreen({navigation}: LoadingScreenProps) {
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text>JobAlert</Text>
      <View style={{}}>
      <Button
      onPress={()=>{navigation.navigate("LoadingScreen")}}
      title='To Next Screen'
      />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})