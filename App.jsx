import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Register from './Regsiter';


const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
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
      </stack.Navigator>
    </NavigationContainer>

  );
};







