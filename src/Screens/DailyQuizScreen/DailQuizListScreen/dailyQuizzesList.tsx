import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../../Navigator/AppNavigator/AppNavigator';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon  from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
interface DailyQuizzesListProps {
    navigation: StackNavigationProp<RootStackParamsList, 'DailyQuizList'>;
  }

export default function DailyQuizzesList() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainCont}>
        <View style={styles.headerTop}>
           <View style={styles.itemCont}>
           <Icon
                name='arrow-back'
                size={28}
                style={styles.icon1}
                onPress={()=>{ navigation.navigate("Home")}}
                />
                <Text style={styles.headerText}>Daily Quizzes</Text>
            <Icon
                name='filter-list'
                size={28}
                style={styles.icon2}
                onPress={()=>{}}
            />
           </View>
        </View>
        <View style={styles.dateContainer}>

        </View>
      <Text style={styles.text}>DailyQuizzesList</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainCont: {
        flex : 1
    },
    headerTop :{
        width: wp('100%'),
        height: hp('6.8%'),
        backgroundColor: '#F0F0F0',
        elevation: 10,
    },
    itemCont: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    headerText: {
        fontSize: 20,
        fontFamily: "Inter-SemiBold",
        color: '#000000',
        marginLeft: wp('5%'),
        marginTop: hp('1.8%'),
    },
    icon1: {
        color: '#F60505',
        marginLeft: wp('2.5%'),
        marginTop: hp('1.8%'),
    },
    icon2: {
        color: '#060404',
        marginLeft: wp('40%'),
        marginTop: hp('1.7%'),
    },
    dateContainer:{
        width: wp('100%'),
        height: hp('4.5%'),
        backgroundColor: '#DADADA'
    },
    text: {
        marginTop: 10,
        padding: 20
    },
})