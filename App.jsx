import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Login';
import Register from './Regsiter';
import Home from './Home';
import Splash from './Splash';



const stack = createNativeStackNavigator()

export default App=()=> {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Splash'>
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
          name='Home'
          component={Home}
          options={{ title: "Home" }}
          />
      </stack.Navigator>
    </NavigationContainer>

  );
};







