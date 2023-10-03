import { View, StyleSheet } from "react-native";
import UserList from "./UserList";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home({navigation}) {

    const handleLogout = () => {
        try {
            AsyncStorage.clear(() => {
                console.log('AsyncStorage cleared.');
                navigation.navigate("Login");
              });
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }

    return (
        <View>
            <UserList></UserList>
            <Button buttonText={styles.ButtonText} onPress={()=>handleLogout()} buttonName={"Logout"}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    ButtonText: { marginTop: 50, marginBottom: 40, color: 'white', width: '90%', fontSize: 15, fontWeight: '600', backgroundColor: "#eb6c49", padding: 15, alignSelf: "center", borderRadius: 5, textAlign: 'center' },
});