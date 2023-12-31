import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const DropdownPicker: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const options = ['Option 1', 'Option 2', 'Option 3'];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowDropdown(true)} style={styles.dropdownButton}>
        <Text>{selectedValue || 'Select an option...'}</Text>
      </TouchableOpacity>

      <Modal
        visible={showDropdown}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowDropdown(false)}
      >
        <View style={styles.modalContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelect(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 200,
    alignItems: 'center',
  },
});

export default DropdownPicker;
