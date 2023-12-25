import { ViewStyle, StyleSheet, TextStyle, ImageStyle } from "react-native";
import { ExtendedTheme }  from "@react-navigation/native";


interface Style {
    page: ViewStyle;
    pageContent: ViewStyle;
    pageFooter: ViewStyle;
    image: ImageStyle;
    title: TextStyle;
    description: TextStyle;
    buttonContainer: ViewStyle;
    buttonText: TextStyle;
    stepCountContainer: ViewStyle;
    stepCountIndicator: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    page: {
        flex : 1,
        justifyContent: 'center',
        backgroundColor: '#15141A',
        // backgroundColor: 'red'
    },
    pageContent: {
        flex: 1,
        padding: 20,
        // backgroundColor: 'red'
    },
    pageFooter: {
        marginTop: 'auto'
    },
    image: {
        alignSelf: 'center',
        margin: 20
    },
    title: {
        color: '#FDFDFD',
        fontSize: 50,
        fontWeight: '600',
        fontFamily: 'FasterOne-Regular',
        letterSpacing: 1.3,
        marginVertical: 10
    },
    description : {
        color: 'gray',
        fontSize: 22,
        fontFamily: 'Inter-Bol',
        lineHeight: wp('6.3%'),
    },
    buttonRow: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 25
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#302E38',
        borderRadius: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FDFDFD',
        fontFamily: 'Cabin-Bold',
        fontSize: 15,
        padding: 12,
        letterSpacing: 1,
        fontWeight: '600'
    },
    stepCountContainer : {
        flexDirection : 'row',
        gap: 8,
        marginHorizontal: 12,
    },
    stepCountIndicator : {
        flex: 1,
        backgroundColor: '#302E38',
        width: '50%',
        height: 3, 
        borderRadius: 10,
        margin: 3,
        marginTop: hp('2%')
    },
  })
};
