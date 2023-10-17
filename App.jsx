import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/login/Login';
import Register from './src/screens/register/Regsiter';
import Splash from './src/screens/Splash/Splash';
import DrawerAndTab from './src/screens/DrawerAndTab/DrawerAndTab';



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
          name='DrawerAndTab'
          component={DrawerAndTab}
          options={{ title: "DrawerAndTab" }}
        />
        
      </stack.Navigator>
    </NavigationContainer>

  );
};







