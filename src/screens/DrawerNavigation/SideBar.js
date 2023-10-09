import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import Button from '../../Components/Button';
import UserList from '../../Components/UserList';

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

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    padding: 20,
  },
  sidebarItem: {
    marginTop:15,
    marginBottom: 15,
    backgroundColor:'#eb6c49',
    padding:10,
    borderRadius:10,
  },
  TextStyle:{
    color:'white',
    size:20,
    fontWeight:'500'
  },
  ButtonText:{ marginTop: 50, marginBottom: 40, color: 'white', width: '90%', fontSize: 15, fontWeight: '600', backgroundColor: "#eb6c49", padding: 15, alignSelf: "center", borderRadius: 5, textAlign: 'center' },
});

export default Sidebar;
