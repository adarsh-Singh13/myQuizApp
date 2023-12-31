import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
/** 
 * ? local imports
*/
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import quizData from "../../DummyData/QuizData/DailyQuiz.json";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../Navigator/AppNavigator/AppNavigator';
import Icon from "react-native-vector-icons/MaterialIcons"
import Buttons from '../../Components/Buttons';
import QuizHeaderContent from './HeaderContent';
import createStyles from "./DailyQuizScreen.styles"
import CustomAlert from '../../Components/MyCustomALert';

interface onboardingProps {
  navigation: StackNavigationProp<RootStackParamsList, 'DailyQuiz'>;
}

export default function DailyQuizScreen () {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const currentQuestion = quizData[0].totalQuestions[currentQuestionIndex];
  const questionOptions = currentQuestion.options;
  const questionsArray = quizData[0]?.totalQuestions || [];
  const numOfQuestions = questionsArray.length;
  console.log(numOfQuestions);
  // console.log(quizData[0].timing);
  
  const handleCancel = () => {
    setShowAlert(false);
  };

  const handleConfirm = () => {
    setShowAlert(false);
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



  return (
    <View style={styles.container}>
       <View style={styles.containerBar}>
         <QuizHeaderContent/> 
       </View>
      <View>
        <View style={styles.questionContainer}>
              <View style={{flexDirection: 'row'}}>
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
                            onPress={()=> {}}
                        />
                      </View>
                </View>
                
             </View>
         </View>
         <Text style={styles.questText}>Question</Text>
         <ScrollView style={{marginLeft: wp('2%')}}>
            <Text style={styles.questionText}>{currentQuestion.question}</Text>
          </ScrollView>
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
              <View style={[styles.optionIndexStyle,{backgroundColor: selectedOption === index ? '#398e3e' : '#c6c6c6'}]}>
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
      <View style={styles.btnContainer}>
      <View>
            <CustomAlert
            visible={showAlert}
            message="Once you submit the test, you cannot resume. Are you sure you want to submit ?"
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            />
      </View>
        <View style={styles.buttonView}>
              <Buttons
                text={'Submit Test'}
                labelStyle={styles.labelStyle}
                textStyle={styles.textStyle}
                onPress={()=>{}}
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
  );
};


