import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function CustomAlert ({ visible, message, onCancel, onConfirm, OnResume, Submit }: any) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{message}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={onCancel}>
              <Text style={styles.resumeText}>{OnResume}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onConfirm}>
              <Text style={styles.submitText}>{Submit}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    width: wp('95%')
  },
  modalText: {
    marginBottom: 5,
    fontSize: 18,
    width: wp('87%'),
    fontFamily: 'Cabin_SemiCondensed-SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 6,
    marginHorizontal: 5,
    minWidth: 100,
    alignItems: 'center',
  },
 resumeText: {
    color: '#9E9E9E',
    marginTop: hp('1.6%',),
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Cabin_SemiCondensed-SemiBold',
},
submitText: {
    color: '#DE0707',
    fontWeight: 'bold',
    marginTop: hp('1.6%'),
    fontSize: 16,
    fontFamily: 'Cabin_SemiCondensed-SemiBold',
  },
});

