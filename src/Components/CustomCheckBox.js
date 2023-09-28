import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CustomCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity onPress={toggleCheckbox}>
      <View style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={{color:"black"}}>Is Checked: {isChecked ? 'Yes' : 'No'}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#000',
  },
  unchecked: {
    backgroundColor: '#fff',
  },
  checkmark: {
    color: '#fff',
    fontSize: 15,
  },
});

export default CustomCheckbox;
