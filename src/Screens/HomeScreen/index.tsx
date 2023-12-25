import { View, Text, Pressable } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../Navigator/AppNavigator';


interface HomeScreenProps{
  navigation : StackNavigationProp<RootStackParamsList, 'Home'>
}

export default function ({navigation}: HomeScreenProps) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable onPress={()=> {
        navigation.navigate('Onboard')
      }}>
        <Text>Go Back to Onboarding</Text>
      </Pressable>
    </View>
  )
}
