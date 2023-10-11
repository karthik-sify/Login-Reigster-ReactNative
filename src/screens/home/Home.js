import { View, ScrollView, Alert} from "react-native";
import UserList from "../../Components/UserList";
import styles from "./style";
import Button from "../../Components/Button";
import { useEffect, useState } from "react";
import DetailsForm from '../../Components/DetailsForm'
import DeleteUser from "../../Services/DeleteUser";
import RetrieveUser from "../../Services/RetrieveUser";
import RetrieveUserDetails from "../../Services/RetrieveUserDetails";
import { Modal } from "react-native-paper";
import { Image } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Home({ navigation }) {
    const [updateFlag, setUpdateFlag] = useState(false)
    const [userDetails, setUserDetails] = useState([]);
    const photo1 = require("../../Assests/edit.png");


    useEffect(() => {
        const getDetails = async () => setUserDetails(await RetrieveUserDetails());
        getDetails();
    }, [updateFlag]);

    const handleUpdate = () => {
        if (updateFlag === true) setUpdateFlag(false)
        else setUpdateFlag(true)

    }
    const handleDelete = async () => {
        let userid = await RetrieveUser();
        Alert.alert(
            'Confirmation',
            'Do you want to Delete?',
            [
                {
                    text: 'No',
                    onPress: () => console.log('No Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => {
                        if (userid != null) {
                            AsyncStorage.clear(() => {
                                console.log('AsyncStorage cleared.');
                                navigation.replace("Login");
                            });
                            DeleteUser(userid);
                        }
                        console.log('Yes Pressed')
                    },
                },
            ],
            { cancelable: true }
        );

    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
                <UserList updateFlag={updateFlag}></UserList>
                <Image source={photo1} style={{ width: 35, height: 35, margin: 20 }} onPress={() => handleUpdate()}></Image>
            </View>
            <Button buttonText={styles.ActionButtonText} onPress={() => handleDelete()} buttonName={"Delete User"}></Button>
            <Modal style={{ padding: 15 }} visible={updateFlag} onDismiss={() => setUpdateFlag(false)} animationType='slide'>
                <ScrollView>
                    <DetailsForm updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} firstNamePlaceholderValue={userDetails.firstName} lastNamePlaceholderValue={userDetails.lastName} emailPlaceholderValue={userDetails.email} PasswordPlaceholdervalue={userDetails.password} conformPasswordPlaceholderValue={userDetails.password} genderPlaceHolder={userDetails.gender} datePlaceholderValue={new Date(userDetails.dob)} latitudePlaceholderValue={userDetails.latitude} longitudePlaceholderValue={userDetails.longitude} uriPlaceholderValue={userDetails.uri}></DetailsForm>
                </ScrollView>
            </Modal>

        </View>
    );
};

