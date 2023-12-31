import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../../Navigator/AppNavigator/AppNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { HelperService } from "../../../service/util/HelperService";
import CustomdailyQuiz from './customdailyQuiz';
import DailyQuizListItem from './dailyQuizListItem';

interface DailyQuizzesListProps {
    navigation: StackNavigationProp<RootStackParamsList, 'DailyQuizList'>;
}

export default function DailyQuizzesList() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainCont}>
            <StatusBar barStyle={"dark-content"} />
            <View style={styles.headerTop}>
                <View style={styles.itemCont}>
                    <Icon
                        name='arrow-back'
                        size={28}
                        style={styles.icon1}
                        onPress={() => { navigation.navigate("HomeStack") }}
                    />
                    <Text style={styles.headerText}>Daily Quizzes</Text>
                    <Icon
                        name='filter-list'
                        size={28}
                        style={styles.icon2}
                        onPress={() => { }}
                    />
                </View>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.dayText}>{HelperService.getTodaysDayOfWeek()},{ }</Text>
                <Text style={styles.dateText}>{HelperService.currentDateStringNumFormat()}</Text>
            </View>
            <View style={{backgroundColor: "#FFFFFF", flex: 1}}>
                <DailyQuizListItem />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    headerTop: {
        width: wp('100%'),
        // height: hp('7%'),
        elevation: 2,
        backgroundColor: "#FFFFFF"
    },
    itemCont: {
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        // backgroundColor: 'red',
        width: wp('120%'),
        height: hp('7.8%'),
        backgroundColor: "#FFFFFF"
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
    dateContainer: {
        width: wp('100%'),
        height: hp('4.5%'),
        backgroundColor: '#E6E6E6',
        // justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        elevation: -10
    },
    dayText: {
        marginLeft: wp('4.5%'),
        marginTop: wp('1.4%'),
        fontSize: 15,
        fontFamily: "Cabin-Regular",
        color: '#5A5A5A',
    },
    dateText: {
        marginLeft: wp('2%'),
        marginTop: wp('2.2%'),
        fontFamily: "Inter-Medium",
        fontSize: 13,
        color: '#5A5A5A',

    },
    text: {
        marginTop: 10,
        padding: 20
    },
})