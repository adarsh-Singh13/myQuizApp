/* eslint-disable prettier/prettier */
import { ViewStyle, StyleSheet, TextStyle, ImageStyle, Falsy, RegisteredStyle, RecursiveArray } from "react-native";
import { ExtendedTheme }  from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Style {
    option: ViewStyle;
    container: ViewStyle;
    containerBar: ViewStyle;
    questionContainer: ViewStyle;
    questionContainerFirst: ViewStyle;
    marksContainer: ViewStyle;
    positiveMarkscontainer: ViewStyle;
    positiveMarkstext: TextStyle;
    positNegaMarksText: ViewStyle;
    reviewcontainer: ViewStyle;
    reviewText: TextStyle;
    reviewIcon: ViewStyle;
    questText: TextStyle;
    questionText: TextStyle;
    optionButton: ViewStyle;
    selectedOption: ViewStyle;
    saveAndNextButton: ViewStyle;
    optionIndex: TextStyle;
    optionIndexText: TextStyle;
    optionsMainContainer: ViewStyle;
    optionContainer: ViewStyle;
    optionIndexStyle: ViewStyle;
    labelStyle: ViewStyle;
    labelStyles: ViewStyle;
    textStyle: TextStyle;
    textStyles: TextStyle;
    btnContainer: ViewStyle;
    buttonView: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      // backgroundColor: '#ce1717',
      flex: 1,
    },
    containerBar: {
      //  paddingTop: 5,
      backgroundColor: '#ffffff',
      elevation: 2,
      justifyContent: 'space-evenly',
      alignItems: 'stretch',
    },
    questionContainer: {
      margin: 16,
    },
    questionContainerFirst: {
      backgroundColor: '#ddd8d8',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      width: wp('8%'),
      height: hp('4%'),
    },
    marksContainer: {
      flexDirection: 'row'
    },
    positiveMarkscontainer: {
      marginLeft: wp('4%'),
      marginTop: hp('0.5%')
    },
    positNegaMarksText: {
      marginTop: hp('0.3%'),
      color: '#181818',
      fontFamily: 'Cabin_Condensed-Medium',
    },
    positiveMarkstext: {
      color: '#242424',
      fontFamily: 'Cabin_Condensed-Medium',
      marginTop: hp('-0.4%')
    },
    reviewcontainer: {
      marginTop: hp('0.1%'),
      flexDirection: 'row',
      marginLeft: wp('42%')
    },
    reviewText: {
      fontFamily: 'Cabin_Condensed-Medium',
      fontSize: 15,
      color: '#000000'
    },
    reviewIcon: {
      marginTop: hp('0.4%'),
      marginLeft: wp('2%'),
      color: '#181818',
    },
    questText: {
      fontSize: 18,
      marginBottom: 6,
      marginLeft: wp('2%'),
      fontFamily: 'NotoSansDevanagari_Condensed-SemiBold',
      letterSpacing: .5,
      color: '#000000'
    },
    questionText: {
      fontSize: 18,
      marginBottom: 16,
      marginLeft: 12,
      // fontFamily: 'ShantellSans-SemiBold',
      fontFamily: 'NotoSansDevanagari_Condensed-SemiBold',
      letterSpacing: .5
    },
    optionButton: {
      backgroundColor: '#245d28',
      padding: 10,
      marginBottom: 8,
    },
    selectedOption: {
      backgroundColor: 'lightblue',
    },
    saveAndNextButton: {
      backgroundColor: 'skyblue',
      padding: 10,
      marginTop: 16,
    },
    optionIndex: {
      fontSize: 21,
      fontWeight: '600',
      fontFamily: 'ShantellSans-SemiBold',
    },
    optionIndexText: {
      fontSize: 21,
      fontFamily: 'NotoSansDevanagari_Condensed-SemiBold',
      marginLeft: 10
    },
    optionsMainContainer: {
      flexDirection: 'column',
    },
    optionContainer: {
      flexDirection: 'row',
      margin: 10
    },
    optionIndexStyle: {
      borderRadius: 50,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    labelStyle: {
      borderColor: '#d71d1d',
      borderWidth: 1,
      padding: 10,
      width: wp('30%'),
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    labelStyles: {
      backgroundColor: '#000000',
      borderWidth: 1,
      padding: 10,
      width: wp('32%'),
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle: {
      fontFamily: 'Rubik-SemiBold',
      fontSize: 15,
      color: '#d71d1d',
    },
    textStyles: {
      fontFamily: 'Rubik-SemiBold',
      fontSize: 15,
      color: '#FFFFFF'
    },
    btnContainer: {
      marginTop: hp('30%')
    },
    buttonView: {
      padding: 10,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    option: undefined
  })
};
