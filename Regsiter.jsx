import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import db from './Database';


import UserInputField from './src/Components/UserInputField';
import Button from './src/Components/Button';
import CustomCheckbox from './src/Components/CustomCheckBox';

export default function Register({ navigation }) {
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConformPassword, setUserConformPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('Male');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [conformPasswordError, setConformPasswordError] = useState('');
    const [matchPasswordError, setMatchPasswordError] = useState('');

    const handleRegistration = () => {
        if (validateForm()) {
            db.transaction((tx) => {
                tx.executeSql(
                    `INSERT INTO users (firstName, lastName, email, password, gender, dob)
               VALUES (?, ?, ?, ?, ?, ?);`,
                    [userFirstName, userLastName, userEmail, userPassword, selectedValue, date.toDateString()],
                    (tx, results) => {
                        if (results.rowsAffected > 0) {
                            console.log('INSERTED SUCCESSFULLY')
                            alert('Registration successful!');
                            navigation.navigate('Home');
                        } else {
                            alert('Registration failed. Please try again.');
                        }
                    },
                    (error) => {
                        console.error('Error inserting user data:', error);
                    }
                );
            });
        }
    };

    function validateForm() {
        let isValid = true;

        if (userFirstName.trim() === '') {
            setFirstNameError('First Name is required *');
            isValid = false;
        } else setFirstNameError('')
        if (userLastName.trim() === '') {
            setLastNameError('Last Name is required *');
            isValid = false;
        } else setLastNameError('')
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userEmail)) {
            setEmailError('Invalid email address *');
            isValid = false;
        } else setEmailError('')
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
        } else setPasswordError('')
        if (userConformPassword.length < 8) {
            setConformPasswordError('Password must be at least 8 characters long *');
            isValid = false;
        } else if (!/[a-z]/.test(userConformPassword) || !/[A-Z]/.test(userConformPassword)) {
            setConformPasswordError('Password must contain both uppercase and lowercase letters *');
            isValid = false;
        } else if (!/\d/.test(userConformPassword)) {
            setConformPasswordError('Password must contain at least one digit *');
            isValid = false;
        } else if (!/[!@#$%^&*]/.test(userConformPassword)) {
            setConformPasswordError('Password must contain at least one special character *');
            isValid = false;
        } else setConformPasswordError('')

        if (userConformPassword !== userPassword) {
            setMatchPasswordError('Passwords do not match *');
            isValid = false;
        } else {
            setMatchPasswordError('');
        }

        return isValid;
    }

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);

    };

    return (
        <ScrollView>
            <View style={styles.PageStyle}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.ReactAppText}>React App</Text>
                </Pressable>
                <View style={styles.LoginPage}>
                    <Text style={styles.LoginTextStyle}>Register</Text>
                    <UserInputField placeholderValue={"First Name"} userValue={userFirstName} setfuction={setUserFirstName} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
                    <Text style={styles.ValidationStyle}>{firstNameError}</Text>
                    <UserInputField placeholderValue={"Last Name"} userValue={userLastName} setfuction={setUserLastName} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
                    <Text style={styles.ValidationStyle}>{lastNameError}</Text>
                    <UserInputField placeholderValue={"Email"} userValue={userEmail} setfuction={setUserEmail} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
                    <Text style={styles.ValidationStyle}>{emailError}</Text>
                    <UserInputField placeholderValue={"Password"} userValue={userPassword} setfuction={setUserPassword} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
                    <Text style={styles.ValidationStyle}>{passwordError}</Text>
                    <UserInputField placeholderValue={"Conform Password"} userValue={userConformPassword} setfuction={setUserConformPassword} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
                    <Text style={styles.ValidationStyle}>{conformPasswordError}</Text>
                    <Text style={styles.ValidationStyle}>{matchPasswordError}</Text>
                    <Text style={styles.TextStyle}>Gender:</Text>
                    <RadioButtons selectedValue={selectedValue} setSelectedValue={setSelectedValue}></RadioButtons>
                    <Text style={{ color: "#b5b1b1", alignSelf: 'center', fontWeight: '200' }}>___________________________________________________________</Text>

                    <Text style={styles.TextStyle}>Date of Birth:</Text>

                    <Pressable onPress={() => setShowDatePicker(true)}>
                        <Text style={styles.DateTextStyle}>{date.toDateString()}</Text>
                    </Pressable>
                    {showDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="date" // You can use "time" for time picker
                            is24Hour={true}
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                    <Text style={{ color: "#b5b1b1", alignSelf: 'center', fontWeight: '200' }}>___________________________________________________________</Text>

                    <CustomCheckbox></CustomCheckbox>

                    <Button buttonText={styles.ButtonText} onPress={handleRegistration} buttonName={"Register"}></Button>
                </View>
            </View>
        </ScrollView>
    );

};

const styles = StyleSheet.create({
    ReactAppText: { color: 'white', fontWeight: '700', fontSize: 30, marginLeft: 15, marginBottom: 50 },
    LoginTextStyle: { color: "black", fontSize: 20, fontWeight: "600", marginLeft: 20, marginTop: 40, marginBottom: 10 },
    PageStyle: { backgroundColor: "#eb6c49", flex: 1, justifyContent: 'flex-end' },
    LoginPage: { backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 5 },
    InputStyle: { borderWidth: 0.2, color: "black", borderTopColor: "white", borderLeftColor: "white", borderRightColor: "white", marginLeft: 15, marginRight: 15 },
    TextStyle: { color: 'black', alignSelf: 'flex-start', marginLeft: 15, fontWeight: '600', marginTop: 20 },
    ButtonText: { marginTop: 50, marginBottom: 40, color: 'white', width: '90%', fontSize: 15, fontWeight: '600', backgroundColor: "#eb6c49", padding: 15, alignSelf: "center", borderRadius: 5, textAlign: 'center' },
    OrStyle: { color: "grey", textAlign: "center", marginBottom: 20 },
    SignUpStyle: { color: 'black', alignSelf: 'flex-start', marginLeft: 15, fontWeight: '600', alignSelf: 'center', marginBottom: 40 },
    DateTextStyle: { color: "black", margin: 20, fontSize: 15, fontWeight: "400" },
    ValidationStyle: { color: "red", fontWeight: '700', marginLeft: 20 }

});


const RadioButtons = ({ selectedValue, setSelectedValue }) => {
    return (
        <View>
            <RadioButton.Group
                onValueChange={(value) => setSelectedValue(value)}
                value={selectedValue}
            >
                <RadioButton.Item label="Male" value="Male" />
                <RadioButton.Item label="Female" value="Female" />
            </RadioButton.Group>
        </View>
    );
};

