import React from 'react';
import { View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Button from '../../Components/Button';
import styles from './styles';

const Sidebar = ({ navigation }) => {

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
  return (
    <DrawerContentScrollView>
      <View style={styles.sidebarContainer}>
        {/* <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.TextStyle}>Home</Text>
        </TouchableOpacity>
         */}
         <Button buttonText={styles.ButtonText} onPress={() => handleLogout()} buttonName={"Logout"}></Button>
        
      </View>
    </DrawerContentScrollView>
  );
};



export default Sidebar;
