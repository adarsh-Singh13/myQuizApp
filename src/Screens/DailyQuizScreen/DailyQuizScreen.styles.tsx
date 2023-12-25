/* eslint-disable prettier/prettier */
import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme }  from "@react-navigation/native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Style {
    container: ViewStyle;
    containerBar: ViewStyle;
    questionContainer: ViewStyle;
    questionContainerFirst: ViewStyle;
    marksContainer: ViewStyle;
    positiveMarkscontainer: ViewStyle;
    positiveMarkstext: TextStyle;
    reviewcontainer: ViewStyle;
    reviewText: TextStyle;
    reviewIcon: ViewStyle;
    questText: TextStyle;
    optionButton: ViewStyle;
    selectedOption: ViewStyle;
    saveAndNextButton: ViewStyle;
    optionIndex: TextStyle;
    optionIndexText: TextStyle;
    labelStyle: ViewStyle;
    labelStyles: ViewStyle;
    textStyle: TextStyle;
    textStyles: TextStyle;
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
        height: hp('3.5%'), 
      },
      marksContainer: {
        flexDirection: 'row'
      },
      positiveMarkscontainer: {
        marginLeft: wp('4%'),
        marginTop: hp('0.5%')
      },
      positiveMarkstext: {
        color: '#242424',
        fontFamily: 'NotoSansDevanagari_Condensed-SemiBold',
        marginTop: hp('-0.4%')
      },
      reviewcontainer: {
        marginTop: hp('0.5%'),
        flexDirection: 'row', 
        marginLeft: wp('42%')
      },
      reviewText: {
        fontFamily: 'NotoSansDevanagari_Condensed-SemiBold',
        fontSize: 15,
      },
      reviewIcon: {
        marginTop: hp('0.7%'),
        marginLeft: wp('2%')
      },
      questText: {
        fontSize: 18,
        marginBottom: 6,
        marginLeft: wp('2%'),
        fontFamily: 'NotoSansDevanagari_Condensed-SemiBold',
        letterSpacing: .5,
        color: '#000000'
      },
      // questionText: {
      //   fontSize: 18,
      //   marginBottom: 16,
      //   // fontFamily: 'ShantellSans-SemiBold',
      //   fontFamily: 'NotoSansDevanagari_Condensed-SemiBold',
      //   letterSpacing: .5
      // },
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
  })
};
