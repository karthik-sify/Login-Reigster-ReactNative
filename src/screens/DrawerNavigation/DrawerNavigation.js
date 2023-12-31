import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../home/Home';
import Sidebar from './SideBar';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <Sidebar {...props} />}
        >
            <Drawer.Screen name="Profile" component={HomeScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
