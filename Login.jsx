import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

import UserInputField from './src/Components/UserInputField';
import Button from './src/Components/Button';
//import { auth } from '../firebase';

export default function Login({ navigation }) {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const photo1 = require("./src/Assests/fb_logo.png");
  const photo2 = require("./src/Assests/google.png");
  const photo3 = require(".//src/Assests/twitter.png");

  // const handleRegistration = async () => {
  //   try {
  //     await auth.createUserWithEmailAndPassword(email, password);
  //     // Registration successful, navigate to the next screen
  //   } catch (error) {
  //     console.error('Registration failed', error);
  //   }
  // };
  const handleRegistration = () => {
    if (validateForm()) {
      // Perform your registration logic here
      alert('Registration successful!');
  }
  };
  function validateForm() {
    let isValid = true;

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userEmail)) {
        setEmailError('Invalid email address *');
        isValid = false;
    }else setEmailError('')
    if (userPassword.length < 8) {
        setPasswordError('Password must be at least 8 characters long *');
        isValid = false;
    } else if (!/[a-z]/.test(userPassword) || !/[A-Z]/.test(userPassword)) {
        setPasswordError('Password must contain both uppercase and lowercase letters *');
        isValid = false;
    } else if (!/\d/.test(userPassword)) {
        setPasswordError('Password must contain at least one digit *');
        isValid = false;
    } else if (!/[!@#$%^&*]/.test(userPassword)) {
        setPasswordError('Password must contain at least one special character *');
        isValid = false;
    }else setPasswordError('')
    

    

    return isValid;
}

  return (
    <View style={styles.PageStyle}>
      <Text style={styles.ReactAppText}>React App</Text>
      <View style={styles.LoginPage}>
        <Text style={styles.LoginTextStyle}>Login</Text>
        <UserInputField placeholderValue={"Email"} userValue={userEmail} setfuction={setUserEmail} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
        <Text style={styles.ValidationStyle}>{emailError}</Text>
        <UserInputField placeholderValue={"Password"} userValue={userPassword} setfuction={setUserPassword} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
        <Text style={styles.ValidationStyle}>{passwordError}</Text>
        <Text style={styles.TextStyle}>Forgot password?</Text>
        <Button buttonText={styles.ButtonText} onPress={handleRegistration} buttonName={"Login"}></Button>
        <Pressable onPress={() => navigation.navigate('Register')}>
          <Text style={styles.SignUpStyle}>Don't have an account?
            <Text style={{ color: "#eb6c49" }}> Sign up</Text>
          </Text>
        </Pressable>
        <Text style={styles.OrStyle}>______________________  OR  _______________________</Text>
        <BottomIcons photo1={photo1} photo2={photo2} photo3={photo3}></BottomIcons>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  ReactAppText: { color: 'white', fontWeight: '700', fontSize: 30, marginLeft: 15, marginBottom: 50 },
  LoginTextStyle: { color: "black", fontSize: 20, fontWeight: "600", marginLeft: 20, marginTop: 40, marginBottom: 10 },
  PageStyle: { backgroundColor: "#eb6c49", flex: 1, justifyContent: 'flex-end' },
  LoginPage: { backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 5 },
  InputStyle: { borderWidth: 0.2, color: "black", borderTopColor: "white", borderLeftColor: "white", borderRightColor: "white", marginLeft: 15, marginRight: 15, marginBottom: 10 },
  TextStyle: { color: 'black', alignSelf: 'flex-start', marginLeft: 15, fontWeight: '600', marginTop: 20 },
  ButtonText: { marginTop: 50, marginBottom: 40, color: 'white', width: '90%', fontSize: 15, fontWeight: '600', backgroundColor: "#eb6c49", padding: 15, alignSelf: "center", borderRadius: 5, textAlign: 'center' },
  OrStyle: { color: "grey", textAlign: "center", marginBottom: 20 },
  SignUpStyle: { color: 'black', alignSelf: 'flex-start', marginLeft: 15, fontWeight: '600', alignSelf: 'center', marginBottom: 40 },
  ValidationStyle: { color: "red", fontWeight: '700', marginLeft: 20 }
});

const InputField = ({ userEmail, userPassword, setEmail, setPassword, style1, style2 }) => {
  return (
    <View style={styles.LoginPage}>
      <UserInputField placeholderValue={"Email"} userEmail={userEmail} setEmail={setEmail} style1={style1} style2={style2}></UserInputField>
      <UserInputField placeholderValue={"Password"} userPassword={userPassword} setPassword={setPassword} style1={style1} style2={style2}></UserInputField>
    </View>
  );
};

const BottomIcons = ({ photo1, photo2, photo3 }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
      <Image source={photo1} style={{ width: 30, height: 30, margin: 20 }}></Image>
      <Image source={photo2} style={{ width: 30, height: 30, margin: 20 }}></Image>
      <Image source={photo3} style={{ width: 30, height: 30, margin: 20 }}></Image>
    </View>
  );
};





