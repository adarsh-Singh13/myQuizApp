import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useTheme, useRoute, useNavigation } from '@react-navigation/native';
/** 
 * ? local imports
*/
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import quizData from "../../DummyData/QuizData/DailyQuiz.json";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../Navigator/AppNavigator/AppNavigator';
import Icon from "react-native-vector-icons/MaterialIcons"
import Buttons from '../../Components/Buttons';
import QuizHeaderContent from './HeaderContent';
import createStyles from "./DailyQuizScreen.styles"
import CustomAlert from '../../Components/MyCustomALert';

interface onboardingProps {
  navigation: StackNavigationProp<RootStackParamsList, 'DailyQuiz'>;
}

export default function DailyQuizScreen() {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showPauseIconAlert, setShowPauseIconAlert] = useState(false);
  const [ textshown, setTextShown ] = useState(false);
  const [ textLength, setTextLength ] = useState(false);
  const [isActive, setIsActive] = useState(false)

  const route = useRoute();
  const { quizId, quizData }: any = route.params ?? {};
  const navigation = useNavigation();
  const currentQuestion = quizData.totalQuestions[currentQuestionIndex];
  const questionOptions = currentQuestion.options;
  const questionsArray = quizData?.totalQuestions || [];
  const numOfQuestions = questionsArray.length;
  // console.log(questionsArray);
  // console.log(currentQuestion);
  // console.log(quizData[0].timing);
  // console.log("quizData[0].timing", quizData.timing);

  const handleCancel = () => {
    setShowAlert(false);
  };

  const handleConfirm = () => {
    // console.log("SUBMITPRESSED");
    navigation.navigate("DailyQuizList");
  };

  const handleOptionClick = (index: any) => {
    setSelectedOption(prevSelected => {
      return prevSelected === index ? null : index;
    });
  };

  const handleSaveAndNextTap = () => {
    if (currentQuestionIndex + 1 < numOfQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowAlert(true)
    }
  };

  const handleSubmitText = () => {
    setShowAlert(true);
    
  }

  const handleShowTextLines = () => {
    setTextShown(!textshown);
  };

  const onTextLengthLayout = useCallback((e: { nativeEvent: { lines: string | any[]; }; }) => {
    setTextLength(e.nativeEvent.lines.length>=4);
    // console.log("e.NATIVE", e.nativeEvent);
    
  }, [])

  const onPressIconSubmitHandler = () => {
    navigation.navigate("DailyQuizList");
  }

  const onPressIconCancelHandler = () => {
    setShowPauseIconAlert(false);
  }

  const handlePauseButtonPress = () => {
    setShowPauseIconAlert(true); // Set showAlert to true to display the CustomAlert
    setIsActive(false)
  };

  const onFilterPressed = () => {
    console.log("FILTER PRESSED");
    
  }

  return (
    <View style={{flex: 1, }}>
      <View style={{flex: 7/8, }}>
      <View style={[styles.containerBar, styles.contShadow]}>
        <QuizHeaderContent 
        OnPressTimeIcon={handlePauseButtonPress}
        QuizTitleTime={quizData.timing}
        QuizTitleText={quizData.title}
        onFilterPressed={onFilterPressed}
        isActive={isActive}        />
        {showPauseIconAlert && (
            <CustomAlert
              visible={showPauseIconAlert}
              message="Are you sure you want to pause this test ?"
              onCancel={onPressIconCancelHandler}
              onConfirm={onPressIconSubmitHandler}
              OnResume={'OK'}
              Submit={'Yes, Pause'}
            />
          )}
      </View>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.scrollInnerViewContent}>
            <View style={styles.questionContainer}>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.questionContainerFirst}>
                  <Text style={styles.positiveMarkstext}
                  >{currentQuestion.id}</Text>
                </View>
                <View style={styles.marksContainer}>
                  <View style={styles.positiveMarkscontainer}>
                    <Text style={styles.positNegaMarksText}>+ {currentQuestion.positiveMarks}</Text>
                  </View>
                  <View style={styles.positiveMarkscontainer}>
                    <Text style={styles.positNegaMarksText}>- {currentQuestion.negativeMarks}</Text>
                  </View>
                  <View style={styles.reviewcontainer}>
                    <Text style={styles.reviewText}>Review</Text>
                    <Icon
                      name={"star-outline"}
                      // name={"star"}
                      size={18}
                      style={styles.reviewIcon}
                      onPress={() => { }}
                      />
                  </View>
                </View>

              </View>
            </View>
            {
              currentQuestion?.instruction ? (
                <View style={{ marginLeft: wp('5%') }}>
              <Text style={styles.questText}>Instructions: </Text>
              <Text
              onTextLayout={onTextLengthLayout}
              numberOfLines={textshown ? undefined: 4} 
              style={styles.instructionsText}>{currentQuestion?.instruction}</Text>
               {
                  textLength ? <Text
                  onPress={handleShowTextLines}
                  style={{  
                    marginTop: hp('0.5%'),
                    marginRight: wp('3.5%'),
                    alignSelf: 'flex-end',
                    color: '#0E28EE' 
                  }}
                  >
                    {textshown ? 'Read less...' : 'Read more...'}
                    </Text>
                  :null
              }
            </View>
              ) : []
            }
            <Text style={styles.questText}>Question</Text>
            <View style={{ marginLeft: wp('2%') }}>
              <Text style={styles.questionText}>{currentQuestion.question}</Text>
            </View>
            <View style={styles.optionsMainContainer}>
              {questionOptions.map((option, index) => (
                <TouchableOpacity
                key={index}
                style={[
                  styles.option,
                ]}
                onPress={() => handleOptionClick(index)}
                >
                  <View style={styles.optionContainer}>
                    <View style={[styles.optionIndexStyle, { backgroundColor: selectedOption === index ? '#26A72F' : '#c6c6c6' }]}>
                      <Text style={styles.optionIndex}>
                        {String.fromCharCode(65 + index)}
                      </Text>
                    </View>
                    <Text style={styles.optionIndexText}>
                      {option}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            </View>
          </ScrollView>
      </View>
      <View style={{flex: 1/8, marginTop: hp('-10%')}}>
        <View style={[styles.btnContainer, styles.contShadow]}>
          <View>
            <CustomAlert
              visible={showAlert}
              message="Once you submit the test, you cannot resume. Are you sure you want to submit ?"
              onCancel={handleCancel}
              onConfirm={handleConfirm}
              OnResume={'RESUME'}
              Submit={'SUBMIT'}
              />
          </View>
          <View style={styles.buttonView}>
            <Buttons
              text={'Submit Test'}
              labelStyle={styles.labelStyle}
              textStyle={styles.textStyle}
              onPress={handleSubmitText}
              />
            <Buttons
              text={'Save & Next  >'}
              labelStyle={styles.labelStyles}
              textStyle={styles.textStyles}
              onPress={handleSaveAndNextTap}
              />
          </View>
        </View>
      </View>
    </View>
  );
};


