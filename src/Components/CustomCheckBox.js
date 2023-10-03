import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function CustomCheckbox({isChecked,setIsChecked}) {

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    
    <TouchableOpacity style={{marginTop:20}} onPress={toggleCheckbox}>
      <View style={{flexDirection:'row',marginLeft:20}}>
      <View style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}>
        {isChecked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={{color:"black",marginLeft:10,fontWeight:'500',alignSelf:'center'}}>Agree to the terms and condition: {isChecked ? 'Yes' : 'No'}</Text>
      </View>
    </TouchableOpacity>
    
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: 'grey',
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
