import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Props {
  options: string[];
  modalStyle: any;
  initialValue?: number; // Accepts index as initialValue
}

export default function ArrowDropdownPicker({ options, modalStyle, initialValue }: Props) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    initialValue !== undefined ? options[initialValue] : undefined
  );
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    if (initialValue !== undefined) {
      setSelectedValue(options[initialValue]);
    }
  }, [initialValue, options]);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setShowDropdown(!showDropdown)}>
        <View style={styles.dropdownButton}>
          <Text style={styles.selectedText}>{selectedValue || 'Select an option...'}</Text>
          <Ionicons name="chevron-down" size={18} color="black" style={styles.icon} />
        </View>
      </TouchableWithoutFeedback>

      <Modal
        visible={showDropdown}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDropdown(false)}
        // style={styles.modalContainer}
      >
        <View style={[styles.modalContainer, modalStyle]}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelect(option)}
            >
              <View style={styles.optionContainer}>
              <Text style={styles.optionText}>{option}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: wp('20%'),
    // justifyContent: 'space-between',
  },
  selectedText: {
    fontWeight: '600',
    marginLeft: wp('-6%'),
    marginTop: hp('2%'),
  },
  icon: {
    position: "relative",
    marginTop: hp('1.8%'),
    marginLeft: wp('0.5%'),
  },
  modalContainer: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 4, 
    height: 'auto',
  },
  option: {
    padding: 8,
    marginLeft: wp('1%'),
    borderRadius: 4, 
  },
  optionContainer : {
    backgroundColor: "#EAEAEA",
    borderRadius: 4, 
    padding: 8
  },
  optionText : {
    // fontWeight: '500',
    fontFamily: "Rubik-Medium",
  },
});
