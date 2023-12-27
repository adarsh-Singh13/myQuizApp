import React from 'react'
import { StyleSheet, TouchableOpacity, View, FlatList, SafeAreaView, Text} from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import  Icons  from 'react-native-vector-icons/MaterialCommunityIcons'
import  Iconss  from 'react-native-vector-icons/MaterialIcons'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function StudyMaterial({name, size, isShow, iconStyle, tabName}: any) {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.itemContainer}>
            {
              isShow === "true" ?
              <Icon
            name={name}
            size={size}
            style={iconStyle}
            /> :
            <Icons
            name={name}
            size={size}
            style={iconStyle}
            />
            }
        </View>
        <View style={styles.tabNameStyle}>
            <Text style={styles.tabTextStyle}>{tabName}</Text>
        </View>
        <View>
          <Iconss
            name='arrow-forward-ios'
            size={16}
            style={styles.arrowIcon}
          />
        </View>
      </View>
      <View style={styles.bottomSeperator}>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  innerContainer: {
    flexDirection: 'row',
    marginLeft: 10, 
    marginTop: hp('2.2%'), 
},
  itemContainer: {
    width: wp('10%'),
    height: hp('5%'),
    backgroundColor: '#E1DDDD',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('1%'),
  },
  tabNameStyle: {
    width: wp('70%'),
    height: hp('5%'),
    marginLeft: wp('4%'),
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  tabTextStyle : {
    fontSize: 15,
    fontFamily: 'Rubik-SemiBold',
},
arrowIcon: {
  marginTop: hp('1.3%'),
  marginLeft: wp('1%')
},
bottomSeperator:{
  marginTop: hp('1.5%'), 
  marginLeft: wp('5%'), 
  borderBottomColor: '#D2D2D2',
  borderBottomWidth: wp('0.4%')
},
})