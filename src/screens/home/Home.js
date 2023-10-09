import { View, ScrollView,Alert } from "react-native";
import UserList from "../../Components/UserList";
import styles from "./style";
import Button from "../../Components/Button";
import { useEffect, useState } from "react";
import DetailsForm from '../../Components/DetailsForm'
import DeleteUser from "../../Services/DeleteUser";
import RetrieveUser from "../../Services/RetrieveUser";
import RetrieveUserDetails from "../../Services/RetrieveUserDetails";

export default function Home({ navigation }) {
    const [createFlag, setCreateFlag] = useState(false)
    const [updateFlag, setUpdateFlag] = useState(false)
    const [deleteFlag, setDeleteFlag] = useState(true)
    const [userDetails, setUserDetails] = useState(["FirstName", "LastName", "Email", "Password", "Conform Password", "Male", new Date().toDateString()]);

    useEffect(() => {
        const getDetails = async () => setUserDetails(await RetrieveUserDetails());
        getDetails();
    }, []);

    const handleCreate = () => {
        if (createFlag === true) setCreateFlag(false)
        else setCreateFlag(true)
    }
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
                            DeleteUser(userid);
                            setDeleteFlag(false)
                        }
                        console.log('Yes Pressed')
                    },
                },
            ],
            { cancelable: true }
        );

    }

    return (
        <View>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50, marginBottom: 20 }}>
                    <Button buttonText={styles.ActionButtonText} onPress={() => handleCreate()} buttonName={"Create"}></Button>
                    <Button buttonText={styles.ActionButtonText} onPress={() => handleUpdate()} buttonName={"Update"}></Button>
                    <Button buttonText={styles.ActionButtonText} onPress={() => handleDelete()} buttonName={"Delete"}></Button>
                </View>
                {createFlag && (<DetailsForm createFlag={createFlag} setCreateFlag={setCreateFlag} firstNamePlaceholderValue={""} lastNamePlaceholderValue={""} emailPlaceholderValue={""} PasswordPlaceholdervalue={""} conformPasswordPlaceholderValue={""} genderPlaceHolder={"Male"} datePlaceholderValue={new Date()}></DetailsForm>)}
                {updateFlag && (<DetailsForm updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} firstNamePlaceholderValue={userDetails.firstName} lastNamePlaceholderValue={userDetails.lastName} emailPlaceholderValue={userDetails.email} PasswordPlaceholdervalue={userDetails.password} conformPasswordPlaceholderValue={userDetails.password} genderPlaceHolder={userDetails.gender} datePlaceholderValue={new Date(userDetails.dob)}></DetailsForm>)}
                {deleteFlag && (<UserList updateFlag={updateFlag}></UserList>)}


            </ScrollView>




        </View>
    );
};

