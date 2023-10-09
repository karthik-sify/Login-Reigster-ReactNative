import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/screens/TabNavigation/TabNavigator';
import DrawerNavigator from './src/screens/DrawerNavigation/DrawerNavigation';

const stack = createNativeStackNavigator()

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
