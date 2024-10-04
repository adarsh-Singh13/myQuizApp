import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function FreePdfScreen() {
  const name1 = {
    firstName: 'Adarsh',
    lastName: 'Singh',
    printFullname: function (homeTown: string) {
      return this.firstName + " " + this.lastName + " from  " + homeTown;
    }
  }
  const name2 = {
    firstName: 'Sumit',
    lastName: 'Singh',
  }

  let myName = name1.printFullname("Delhi");
  let myName2 = name1.printFullname.call(name2, "Bangalore");

  /**
   * CALL= Call Method allows to borrow a function from one object and use it with another object, 
   * setting the value of "this" explicitly.
   * 
   * this = It is a special keyword that is used inside a functions to refer to the objects
   * which the functions belongs.
   * 
   * 
   */



  return (
    <View style={{ padding: 8, alignSelf: 'center' }}>
      <View style={styles.card}>
        <View style={{
          width: wp('95%'),
          height: wp('45%'),
        }}>
          <View style={{marginHorizontal: 12,}}>
          <Text style={{ marginTop: 15,fontWeight: '900' }}>CALL Method</Text>
          <Text>Without Call Method : </Text>
          <Text>{myName}</Text>
          <Text style={{ marginTop: 15 }}>With Call Method : </Text>
          <Text>{myName2}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={{
          width: wp('95%'),
          height: wp('45%'),
        }}>
          <View style={{marginHorizontal: 12,}}>
          <Text style={{ marginTop: 15, fontWeight: '900' }}>Bind Method</Text>
          <Text>Without Bind Method : </Text>
          {/* <Text>{myName}</Text> */}
          <Text style={{ marginTop: 15 }}>With Bind Method : </Text>
          {/* <Text>{myName2}</Text> */}
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 6, 
    elevation: 5, 
    backgroundColor: '#FFFFFF',
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#2B2929',
    shadowOpacity: 0.6,
    shadowRadius: 5,
    marginHorizontal: 6, 
    marginVertical: 6, 
  },
})