import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
/** 
 * ? local imports
*/
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import quizData from "../../DummyData/QuizData/DailyQuiz.json";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../Navigator/AppNavigator';
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Icon from "react-native-vector-icons/MaterialIcons"
import Buttons from '../../Components/Buttons';
import CountDownTimer from '../../Components/countDownTimer';
import QuizHeaderContent from './HeaderContent';
import createStyles from "./DailyQuizScreen.styles"


interface onboardingProps {
  navigation: StackNavigationProp<RootStackParamsList, 'DailyQuiz'>;
}

export default function DailyQuizComponent() {
  const theme = useTheme();
  const {colors} = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = quizData[0].totalQuestions[currentQuestionIndex];
  const questionOptions = currentQuestion.options;
  const questionsArray = quizData[0]?.totalQuestions || [];
  const numOfQuestions = questionsArray.length;
  // console.log(numOfQuestions);
  // console.log(quizData[0].timing);
  
  const handleOptionClick = (index: any) => {
    setSelectedOption(index);
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
                        <Text style={styles.positiveMarksText}>+ {currentQuestion.positiveMarks}</Text>
                      </View>
                      <View style={styles.positiveMarkscontainer}>
                        <Text style={styles.positiveMarksText}>- {currentQuestion.negativeMarks}</Text>
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
      <View style={styles.optionsContainer}>
        {questionOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
            ]}
            onPress={() => handleOptionClick(index)}
          >
            <View style={{flexDirection: 'row', margin: 10}}>
              <View style={{backgroundColor: selectedOption === index ? '#398e3e' : '#c6c6c6', 
                borderRadius: 50, 
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
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
      <View style={{}}>
        <View style={{ marginTop: hp('35%'), padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Buttons
                text={'Submit Test'}
                labelStyle={styles.labelStyle}
                textStyle={styles.textStyle}
              />
              <Buttons
              text={'Save & Next  >'}
              labelStyle={styles.labelStyles}
              textStyle={styles.textStyles}
            />
        </View>
     </View>
    </View>
  );
};


