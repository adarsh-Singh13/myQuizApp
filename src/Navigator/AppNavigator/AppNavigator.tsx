import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

/**
 * ? Local Imports
 */
import { Provider } from 'react-redux';
import store from '../../Stores/Stores/store';
import BioMetrics from '../../Screens/BioMetrics';
import Onboarding from '../../Screens/Onboarding';
import DailyQuizScreen from '../../Screens/DailyQuizScreen';
import HomeStack from '../HomeStack';
import PremiumStudyMaterialScreen from '../../Screens/PremiumStudyMaterial';
import FreePdfScreen from '../../Screens/FreePdf';
import JobAlertScreen from '../../Screens/JobAlert';
import CurrentAffairsScreen from '../../Screens/CurrentAffairs';
import DailyQuizzesList from '../../Screens/DailyQuizScreen/DailQuizListScreen/dailyQuizzesList';
import InstructionsCreen from '../../Screens/DailyQuizScreen/InstructionsScreen';
import DrawerStack from '../DrawerStack';

export type RootStackParamsList = {
  Tab: undefined;
  BioMetrics: undefined;
  Onboard: undefined;
  DailyQuiz: undefined;
  HomeStack: undefined;
  PremiumStdyMat: undefined;
  FreePdf: undefined;
  JobAlert: undefined;
  CurrentAffairs: undefined;
  DailyQuizList: undefined;
  Instructions: undefined;
  DrawerStack: undefined;
};

const Stack = createStackNavigator<RootStackParamsList>();

export default function AppNavigator() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'HomeStack'} component={HomeStack} />
          <Stack.Screen name={'Onboard'} component={Onboarding} />
          <Stack.Screen name={'BioMetrics'} component={BioMetrics} />
          <Stack.Screen name={'PremiumStdyMat'} component={PremiumStudyMaterialScreen} />
          <Stack.Screen name={'FreePdf'} component={FreePdfScreen} />
          <Stack.Screen name={'JobAlert'} component={JobAlertScreen} />
          <Stack.Screen name={'CurrentAffairs'} component={CurrentAffairsScreen} />
          <Stack.Screen name={'Instructions'} component={InstructionsCreen} />
          <Stack.Screen name={'DrawerStack'} component={DrawerStack} />
          <Stack.Screen name={'DailyQuiz'} component={DailyQuizScreen} />
          <Stack.Screen name={'DailyQuizList'} component={DailyQuizzesList} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
