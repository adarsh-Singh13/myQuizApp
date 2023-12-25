import { View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../Navigator/AppNavigator';


interface BioMetricsProps{
  navigation : StackNavigationProp<RootStackParamsList, 'BioMetrics'>
}

export default function BioMetrics  ({navigation}: BioMetricsProps) {
  return (
    <View>
      <Text>BioMetrics</Text>
    </View>
  )
}
