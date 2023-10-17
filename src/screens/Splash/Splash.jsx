import { useEffect } from "react";
import { View, } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default Splash=({navigation})=>{
  
    //RETRIVES USER EMAIL FROM ASYNC STORAGE
    const retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem("UsersEmail");
          if (value !== null) {
            return value;
          } else {
            console.log('Data not found');
            return null;
          }
        } catch (error) {
          console.error('Error retrieving data:', error);
          return null;
        }
      };

      useEffect(() => {
        const fetchData = async () => {
          const email=await retrieveData();
          if(email===null){
            navigation.replace("Login")
          }
          else{
            navigation.replace("DrawerAndTab")
          }
        };
        fetchData();
      }, []);

    return(
        <View>
        </View>
    );
};