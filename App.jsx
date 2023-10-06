import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/login/Login';
import Register from './src/screens/register/Regsiter';
import Splash from './src/screens/Splash/Splash';
import TabNavigator from './src/screens/TabNavigation/TabNavigator';
import DrawerNavigator from './src/screens/DrawerNavigation/DrawerNavigation';



const stack = createNativeStackNavigator()

export default App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Splash'
        screenOptions={{ headerShown: false }}>
        <stack.Screen
          name='Splash'
          component={Splash}
          options={{ title: "Splash" }}
        />
        <stack.Screen
          name='Login'
          component={Login}
          options={{ title: "Login" }}
        />
        <stack.Screen
          name='Register'
          component={Register}
          options={{ title: "Register" }}
        />
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
    </NavigationContainer>

  );
};







