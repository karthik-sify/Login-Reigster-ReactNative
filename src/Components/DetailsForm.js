import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import db from '../Services/Database';
import styles from '../screens/register/styles';
import DeleteUser from '../Services/DeleteUser';
import HandleCameraLaunch from '../Services/TakePic';
import UploadFromGallery from '../Services/UploadPic';
import requestLocationPermission from '../Services/LocationPermission';
import getUserLocation from '../Services/GetLocation';
import UserInputField from './UserInputField';
import Button from './Button';
import RadioButtons from './RadioButtons';

export default function Register({ createFlag, updateFlag, setUpdateFlag, setCreateFlag, firstNamePlaceholderValue, lastNamePlaceholderValue, emailPlaceholderValue, PasswordPlaceholdervalue, conformPasswordPlaceholderValue, genderPlaceHolder, datePlaceholderValue, latitudePlaceholderValue, longitudePlaceholderValue, uriPlaceholderValue }) {
    const [userFirstName, setUserFirstName] = useState(firstNamePlaceholderValue);
    const [userLastName, setUserLastName] = useState(lastNamePlaceholderValue);
    const [userEmail, setUserEmail] = useState(emailPlaceholderValue);
    const [userPassword, setUserPassword] = useState(PasswordPlaceholdervalue);
    const [userConformPassword, setUserConformPassword] = useState(conformPasswordPlaceholderValue);
    const [selectedValue, setSelectedValue] = useState(genderPlaceHolder);
    const [date, setDate] = useState(datePlaceholderValue);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [location, setLocation] = useState([latitudePlaceholderValue,longitudePlaceholderValue])
    const [selectedImage, setSelectedImage] = useState(uriPlaceholderValue);
    const [locationFlag,setLocationFlag]=useState(false);



    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [conformPasswordError, setConformPasswordError] = useState('');
    const [matchPasswordError, setMatchPasswordError] = useState('');


    const accessLocation = async () => {
        setLocationFlag(true);
        if (await requestLocationPermission() === true) {
            try {
                const locationResult = await getUserLocation();   //await --lines below this executes after result is received
                setLocation(locationResult);
                alert("location Stored")

            } catch (error) {
                console.error(error);
                alert('Location not accessed')
            }
        }
        setLocationFlag(false);
    };



    const handleRegistration = () => {
        if (validateForm()) {
            if (updateFlag === true) DeleteUser(userEmail);
            db.transaction((tx) => {
                tx.executeSql(
                    `INSERT INTO users (firstName, lastName, email, password, gender, dob,latitude,longitude,uri)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                    [userFirstName, userLastName, userEmail, userPassword, selectedValue, date.toDateString(), location[0], location[1], selectedImage],
                    (tx, results) => { //async 
                        if (results.rowsAffected > 0) {
                            console.log('INSERTED to DB SUCCESSFULLY :Regsiter.js')
                            alert('updated successfully!');
                            if (createFlag === true) setCreateFlag(false);
                            if (updateFlag === true) setUpdateFlag(false);
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
        <View style={styles.LoginPage}>
            <Text style={styles.LoginTextStyle}>Update</Text>
            <View>
                <Pressable onPress={() => HandleCameraLaunch(setSelectedImage)}>
                    <Image
                        source={{ uri: selectedImage }}
                        style={{ width: 125, height: 125, borderRadius: 100, alignSelf: 'center', margin: 10 }}
                        resizeMode='contain'
                    />
                </Pressable>
                <Pressable onPress={() => UploadFromGallery(setSelectedImage)}>
                    <Text style={{ color: '#eb6c49', fontSize: 15, fontWeight: '800', padding: 10, margin: 10, borderColor: 'white', borderWidth: 2, borderRadius: 20, borderColor: '#eb6c49', width: 180, alignSelf: 'center' }}>Upload From Gallery</Text>
                </Pressable>
            </View>
            <UserInputField placeholderValue={"FirstName"} userValue={userFirstName} setfuction={setUserFirstName} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
            <Text style={styles.ValidationStyle}>{firstNameError}</Text>
            <UserInputField placeholderValue={"LastName"} userValue={userLastName} setfuction={setUserLastName} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
            <Text style={styles.ValidationStyle}>{lastNameError}</Text>
            <UserInputField placeholderValue={'Email'} userValue={userEmail} setfuction={setUserEmail} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
            <Text style={styles.ValidationStyle}>{emailError}</Text>
            <UserInputField placeholderValue={"Password"} userValue={userPassword} setfuction={setUserPassword} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
            <Text style={styles.ValidationStyle}>{passwordError}</Text>
            <UserInputField placeholderValue={"Conform Password"} userValue={userConformPassword} setfuction={setUserConformPassword} style1={styles.InputStyle} style2={styles.TextStyle}></UserInputField>
            <Text style={styles.ValidationStyle}>{conformPasswordError}</Text>
            <Text style={styles.ValidationStyle}>{matchPasswordError}</Text>
            <Text style={styles.TextStyle}>Gender:</Text>
            <RadioButtons selectedValue={selectedValue} setSelectedValue={setSelectedValue}></RadioButtons>
            <Text style={{ color: "#b5b1b1", alignSelf: 'center', fontWeight: '200' }}>_________________________________________________________</Text>

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
            <Text style={{ color: "#b5b1b1", alignSelf: 'center', fontWeight: '200' }}>_________________________________________________________</Text>
            <Pressable onPress={accessLocation}>
                <Text style={{ color: '#eb6c49', fontSize: 15, fontWeight: '800', padding: 10, margin: 10, borderColor: 'white', borderWidth: 2, borderRadius: 20, borderColor: '#eb6c49', width: 180, alignSelf: 'center', textAlign: 'center', marginTop: 25 }}>Store Location{locationFlag?"  Loading....":""}</Text>
            </Pressable>
            <Button buttonText={styles.ButtonText} onPress={handleRegistration} buttonName={"Update"}></Button>
        </View>
    );

};


