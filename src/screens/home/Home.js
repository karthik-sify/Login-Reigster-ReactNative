import { View, StyleSheetz, ScrollView } from "react-native";
import UserList from "../../Components/UserList";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./style";
import Button from "../../Components/Button";
import { useEffect, useState } from "react";
import DetailsForm from '../../Components/DetailsForm'
import DeleteUser from "../../Services/DeleteUser";
import RetrieveUser from "../../Services/RetrieveUser";
import RetrieveUserDetails from "../../Services/RetrieveUserDetails";

// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Sidebar from '../sidebar/SideBar';

// const Drawer = createDrawerNavigator();


export default function Home({ navigation }) {
    const [createFlag, setCreateFlag] = useState(false)
    const [updateFlag, setUpdateFlag] = useState(false)
    const [deleteFlag,setDeleteFlag]=useState(true)
    const [userDetails,setUserDetails]=useState(["FirstName","LastName","Email","Password","Conform Password","Male",new Date().toDateString()]);

    useEffect(()=>{
        const getDetails=async()=>setUserDetails(await RetrieveUserDetails());
        getDetails();
    },[]);

    const handleLogout = () => {
        try {
            AsyncStorage.clear(() => {
                console.log('AsyncStorage cleared.');
                navigation.replace("Login");
            });
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }
    const handleCreate = () => {
        if (createFlag === true) setCreateFlag(false)
        else setCreateFlag(true)
    }
    const handleUpdate =() => {
        if (updateFlag === true) setUpdateFlag(false)
        else setUpdateFlag(true)
        
    }
    const handleDelete = async ()=>{
        let userid=await RetrieveUser();
        if(userid!=null) {
            DeleteUser(userid);
            setDeleteFlag(false)
        }
    }

    return (
        <View>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 50, marginBottom: 50 }}>
                    <Button buttonText={styles.ActionButtonText} onPress={() => handleCreate()} buttonName={"Create"}></Button>
                    <Button buttonText={styles.ActionButtonText} onPress={() => handleUpdate()} buttonName={"Update"}></Button>
                    <Button buttonText={styles.ActionButtonText} onPress={() => handleDelete()} buttonName={"Delete"}></Button>
                </View>
                {createFlag && (<DetailsForm createFlag={createFlag} setCreateFlag={setCreateFlag} firstNamePlaceholderValue={"First Name"} lastNamePlaceholderValue={"Last Name"} emailPlaceholderValue={"Email"} PasswordPlaceholdervalue={"Password"} conformPasswordPlaceholderValue={"Conform Password"} genderPlaceHolder={"Male"} datePlaceholderValue={new Date()}></DetailsForm>)}
                {updateFlag && (<DetailsForm updateFlag={updateFlag} setUpdateFlag={setUpdateFlag} firstNamePlaceholderValue={userDetails.firstName} lastNamePlaceholderValue={userDetails.lastName} emailPlaceholderValue={userDetails.email} PasswordPlaceholdervalue={userDetails.password} conformPasswordPlaceholderValue={userDetails.password} genderPlaceHolder={userDetails.gender} datePlaceholderValue={new Date(userDetails.dob)}></DetailsForm>)}

                {deleteFlag && (<UserList></UserList>)}
                <Button buttonText={styles.ButtonText} onPress={() => handleLogout()} buttonName={"Logout"}></Button>
            </ScrollView>



            {/* <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    drawerContent={(props) => <Sidebar {...props} />}
                >
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="About" component={AboutScreen} />
                    <Drawer.Screen name="Settings" component={SettingsScreen} />
                </Drawer.Navigator>
            </NavigationContainer> */}
        </View>
    );
};

