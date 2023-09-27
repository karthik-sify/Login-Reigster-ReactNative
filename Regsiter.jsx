import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DatePicker from 'react-native-datepicker';


import UserInputField from './src/Components/UserInputField';
import Button from './src/Components/Button';

export default function Register() {
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [selectedValue, setSelectedValue] = useState('first');
    const [selectedDate, setSelectedDate] = useState('');


    const handleRegistration = () => {
        //console.log(userEmail + " " + userPassword);
    }

    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    return (
        <View style={styles.PageStyle}>
            <Text style={styles.ReactAppText}>React App</Text>
            <View style={styles.LoginPage}>
                <ScrollView>
                    <Text style={styles.LoginTextStyle}>Register</Text>
                    <InputField email={userFirstName} password={userLastName} setEmail={setUserFirstName} setPassword={setUserLastName} style1={styles.InputStyle} style2={styles.TextStyle}></InputField>
                    <RadioButtons selectedValue={selectedValue} setSelectedValue={setSelectedValue}></RadioButtons>
                    <Button buttonText={styles.ButtonText} onPress={handleRegistration} buttonName={"Register"}></Button>
                </ScrollView>
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

});

const InputField = ({ userEmail, userPassword, setEmail, setPassword, style1, style2 }) => {
    return (
        <View style={styles.LoginPage}>
            <UserInputField placeholderValue={"First Name"} userEmail={userEmail} setEmail={setEmail} style1={style1} style2={style2}></UserInputField>
            <UserInputField placeholderValue={"Last Name"} userPassword={userPassword} setPassword={setPassword} style1={style1} style2={style2}></UserInputField>
        </View>
    );
};

const RadioButtons = ({ selectedValue, setSelectedValue }) => {
    return (
        <View>
            <RadioButton.Group
                onValueChange={(value) => setSelectedValue(value)}
                value={selectedValue}
            >
                <RadioButton.Item label="Male" value="first" />
                <RadioButton.Item label="Female" value="second" />
            </RadioButton.Group>
        </View>
    );
};

const DatePickers = () => {
    return (
        <DatePicker
            style={{ width: 200 }}
            date={selectedDate}
            mode="date"
            placeholder="Select date"
            format="YYYY-MM-DD"
            minDate="2020-01-01"
            maxDate="2025-12-31"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            onDateChange={handleDateChange}
        />
    );
};
