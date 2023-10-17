import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../TabNavigation/TabNavigator';
import DrawerNavigator from '../DrawerNavigation/DrawerNavigation';

const stack = createNativeStackNavigator()


//FROM SPLASH 
const DrawerAndTab = () => {
    return (
        <stack.Navigator
        screenOptions={{ headerShown: false }}
        >
         <stack.Screen
          name='TabNavigator'
          component={TabNavigator}
          options={{ title: "tabs" }}
        />
        <stack.Screen
          name='DrawerNavigator'
          component={DrawerNavigator}
          options={{ title: "drawerNavigator" }}
        />
        </stack.Navigator>
    );
};

export default DrawerAndTab;
