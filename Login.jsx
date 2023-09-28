import React, { useState } from 'react';
import { View, StyleSheet, Text, Image ,Pressable} from 'react-native';

import UserInputField from './src/Components/UserInputField';
import Button from './src/Components/Button';
//import { auth } from '../firebase';

export default function Login({navigation}) {

  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
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
    console.log(userEmail + " " + userPassword);
  }

  return (
    <View style={styles.PageStyle}>
      <Text style={styles.ReactAppText}>React App</Text>
      <View style={styles.LoginPage}>
        <Text style={styles.LoginTextStyle}>Login</Text>
        <InputField email={userEmail} password={userPassword} setEmail={setEmail} setPassword={setPassword} style1={styles.InputStyle} style2={styles.TextStyle}></InputField>
        <Text style={styles.TextStyle}>Forgot password?</Text>
        <Button buttonText={styles.ButtonText} onPress={handleRegistration} buttonName={"Login"}></Button>
        <Pressable onPress={()=>navigation.navigate('Register')}>
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
  ReactAppText:{color: 'white', fontWeight: '700', fontSize: 30, marginLeft: 15, marginBottom: 50 },
  LoginTextStyle: { color: "black", fontSize: 20, fontWeight: "600", marginLeft: 20 },
  PageStyle: { backgroundColor: "#eb6c49", flex: 1, justifyContent: 'flex-end' },
  LoginPage: { backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 5, paddingTop: 50 },
  InputStyle: { borderWidth: 0.2, color: "black", borderTopColor: "white", borderLeftColor: "white", borderRightColor: "white", marginBottom: 40, marginLeft: 15, marginRight: 15 },
  TextStyle: { color: 'black', alignSelf: 'flex-start', marginLeft: 15, fontWeight: '600' },
  ButtonText: { marginTop: 50, marginBottom: 40, color: 'white', width: '90%', fontSize: 15, fontWeight: '600', backgroundColor: "#eb6c49", padding: 15, alignSelf: "center", borderRadius: 5, textAlign: 'center' },
  OrStyle:{color: "grey", textAlign: "center", marginBottom: 20},
  SignUpStyle:{color: 'black', alignSelf: 'flex-start', marginLeft: 15, fontWeight: '600', alignSelf: 'center', marginBottom: 40}

});

const InputField = ({ userEmail, userPassword, setEmail, setPassword, style1, style2 }) => {
  return (
    <View style={styles.LoginPage}>
      <UserInputField placeholderValue={"Email"} userEmail={userEmail} setEmail={setEmail} style1={style1} style2={style2}></UserInputField>
      <UserInputField placeholderValue={"Password"} userPassword={userPassword} setPassword={setPassword} style1={style1} style2={style2}></UserInputField>
    </View>
  );
};

const BottomIcons = ({photo1,photo2,photo3}) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
      <Image source={photo1} style={{ width: 30, height: 30, margin: 20 }}></Image>
      <Image source={photo2} style={{ width: 30, height: 30, margin: 20 }}></Image>
      <Image source={photo3} style={{ width: 30, height: 30, margin: 20 }}></Image>
    </View>
  );
};





