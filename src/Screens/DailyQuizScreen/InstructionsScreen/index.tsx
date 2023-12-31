import React, {useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fetchQuizzes} from '../../../Stores/DailyQuizList/Actions';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
/**
 * ? local Imports
 */
import { HelperService } from '../../../service/util/HelperService';
import DropdownPicker from '../../../Components/CustomDropDown/DropdownPicker';
import ArrowDropdownPicker from '../../../Components/CustomDropDown/ArrowDropdownPicker';



export default function InstructionsCreen() {
    const route = useRoute();
    
    const navigation = useNavigation();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchQuizzes());
    }, [dispatch]);
    
    const quizData = useSelector((state: any) => state.dailyQuizList);
   
    // if (!route || !route.params || !route.quizData.params.topic || !route.params.topic_Exam) {
    //     return null; 
    //   }
      const { topic, topic_Exam } = route.params;

      console.log("qqqq", topic);
    //   console.log("qqq", topic_Exam);

    const handleOnstartPress = () => {
        navigation.navigate('DailyQuiz');
    };

    const options = ["English", "Hindi"]

    return (
        <SafeAreaView style={{flex: 1}}>
          {quizData && quizData.dailyQuizList && quizData.dailyQuizList.length > 0 ? (
              <View style={styles.headerContainer}>
              <Text style={styles.instText}>Instructions</Text>
              <View style={styles.topicContainer}>
                  <Text style={styles.quizTopicTitle}>{quizData.topic}: </Text>
                  <Text style={styles.quizTopicTitle}>{quizData.topic_Exam} l </Text>
                  <Text style={[styles.quizTopicTitle, { letterSpacing: 0.3, }]}>{HelperService.currentDateStringWithDotFormat()}</Text>
              </View>
          </View> 
          ) : []
          }
            <View style={styles.instrctnContainer}>
                <Text style={styles.warngText}>Please read the following instructions very carefully</Text>
                <Text style={styles.warngText2}>
                    1. You have 08 Minutes to complete the test.
                </Text>
                <Text style={styles.warngText2}>
                    2. The test contains a total of 05 questions for 05 marks.
                </Text>
                <Text style={styles.warngText2}>
                    3.There is only one correcy answer to each question. Click on the most appropriate option to mark it as your answer.
                </Text>
                <Text style={styles.warngText2}>
                    4. There is penalty for each wrong answer.
                </Text>
                <Text style={styles.warngText2}>
                    5. You can change your answer by clicking on some other option.
                </Text>
                <Text style={styles.warngText2}>
                    6. You can unmark your answer by clicking on the "clear Response" button.
                </Text>
                <Text style={styles.warngText2}>
                    7. A Number list of all questions appears at the right hand side of the screen . You can access the questions in any order within a section or across sections by clicking on the question number given on the number list.
                </Text>
                <Text style={styles.warngText2}>
                    8. You can use rough sheets while taking the test, Do not use calculators, log tables, distionaries, or
                    any other printed/online refernce material during the test.
                </Text>
                <Text style={styles.warngText2}>
                    9. Don not click the button "Submit Test" before completing the test. A test once submittet cannot be retstarted.
                </Text>
            </View>
            <View style={styles.btnContainer}>
                <View style={styles.btn}>
                    <View>
                        <Text style={styles.btnText}>Select Language</Text>
                    </View>
                    <View style={styles.arrowPicker}>
                        <ArrowDropdownPicker modalStyle={styles.modalStyle} initialValue={0} options={options} />
                    </View>
                </View>
                <TouchableOpacity style={styles.btnstrt} onPress={handleOnstartPress}>
                    <View style={{ flexDirection: "row" }}>
                        <Icon
                            name='access-alarms'
                            size={25}
                            color={"#FFFFFF"}
                            style={styles.icon}
                        />
                        <Text style={styles.btnstrtText}>start Test</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: wp('100%'),
        height: hp('16/%'),
        backgroundColor: "#FFFFFF",
        elevation: 5,
    },
    instText: {
        fontSize: 17,
        fontWeight: "700",
        color: "#000000",
        marginLeft: wp('2.5%'),
        marginTop: wp('4.8%'),
    },
    topicContainer: {
        flexDirection: "row",
        width: wp('100%'),
        height: wp('18%'),
        position: "absolute",
        marginTop: hp('8%'),
        marginLeft: hp('2%'),
        flexWrap: "wrap"
    },
    quizTopicTitle: {
        fontSize: 19,
        color: "#FA0707",
        fontFamily: "Roboto-Black",
    },
    instrctnContainer: {
        marginTop: hp('2%'),
        marginLeft: hp('1%'),
    },
    warngText: {
        fontSize: 17,
        color: "#101010",
        fontFamily: "Inter-Regular",
        fontWeight: 'bold',
        marginBottom: hp('.8%')
    },
    warngText2: {
        fontSize: 15.5,
        color: "#696868",
        fontFamily: "Inter-Regular",
        // fontWeight: 'bold',
        fontWeight: '700',
    },
    btnContainer: {
        flexDirection: "row",
        marginTop: hp('4.5%'),
        backgroundColor: "#FFFFFF",
        width: wp('100%'),
        height: hp('10%'),
        // justifyContent: 'center',

    },
    btn: {
        width: wp('50%'),
        height: hp('10%'),
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: "center",
    },
    btnText: {
        marginTop: hp('5%'),
        marginLeft: hp('-4.5%'),
        fontFamily: "Roboto-Black",
        // position: "relative",
    },
    arrowPicker: {
        // position: "absolute",
        marginTop: hp('-9%'),
    },
    btnstrt: {
        width: wp('50%'),
        height: hp('10%'),
        backgroundColor: "#F30303",
        alignItems: 'center',
        justifyContent: "center",
    },
    btnstrtText: {
        marginTop: hp('-1.3%'),
        marginLeft: hp('0.3%'),
        textTransform: 'uppercase',
        color: "#FFFFFF",
        fontFamily: "Roboto-Black",
    },
    icon: {
        marginTop: hp('-1.6%'),
        marginLeft: hp('-2.3%'),
    },
    modalStyle: {
        width: wp('50%'),
        marginTop: hp('80%'),
    }
})