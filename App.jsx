import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import UserInputField from './src/Components/UserInputField';
import Button from './src/Components/Button';
//import { auth } from '../firebase';

export default function App() {
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  // const handleRegistration = async () => {
  //   try {
  //     await auth.createUserWithEmailAndPassword(email, password);
  //     // Registration successful, navigate to the next screen
  //   } catch (error) {
  //     console.error('Registration failed', error);
  //   }
  // };
  const handleRegistration =() => {
    console.log(userEmail +" "+ userPassword);
  }

  return (
    <View style={styles.PageStyle}>
      <Text style={styles.LoginTextStyle}>LOGIN</Text>
      <InputField email={userEmail} password={userPassword} setEmail={setEmail} setPassword={setPassword} style1={styles.InputStyle} style2={styles.TextStyle}></InputField>
      <Button buttonStyle={styles.ButtonStyle} buttonText={styles.ButtonText} onPress={handleRegistration}buttonName={"REGISTER"}></Button>
    </View>

  );
};

const styles = StyleSheet.create({
  LoginTextStyle: { color: "#3d3f40", fontSize: 20, fontWeight: "600", alignSelf: "center", margin: 50, backgroundColor: "#75bbe0", paddingLeft: 100, paddingRight: 100, padding: 10, borderRadius: 10, },
  PageStyle: { backgroundColor: "white", flex: 1, justifyContent: 'center' },
  LoginPage: { backgroundColor: "#c7ebfc", margin: 15, borderRadius: 30, paddingTop: 50, paddingBottom: 50, padding: 5 },
  InputStyle: { borderWidth: 0.2, color: "black", width: "95%", borderColor: "#808080", margin: 10 },
  TextStyle: { color: 'black', alignSelf: 'flex-start', margin: 10 },
  ButtonStyle: { margin: 50, width: 200, alignSelf: "center" },
  ButtonText: { color: '#3d3f40', fontSize: 18, fontWeight: '600', backgroundColor: "#75bbe0", padding: 15, borderRadius: 10, alignSelf: "center" }
});

const InputField = ({ userEmail, userPassword, setEmail, setPassword,style1,style2 }) => {
  return (
    <View style={styles.LoginPage}>
      <UserInputField placeholderValue={"EMAIL"} userEmail={userEmail} setEmail={setEmail} style1={style1} style2={style2}></UserInputField>
      <UserInputField placeholderValue={"PASSWORD"} userPassword={userPassword} setPassword={setPassword}style1={style1} style2={style2}></UserInputField> 
    </View>
  );
};





