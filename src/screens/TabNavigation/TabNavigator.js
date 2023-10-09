import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/Home';
import DrawerNavigator from '../DrawerNavigation/DrawerNavigation';
import NewsScreen from '../newsFeed/NewsFeed';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();
const photo1 = require("../../Assests/Home.png");
const photo2 = require("../../Assests/news.png");

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false,
        tabBarStyle: { height: 50 } ,
        tabBarActiveTintColor:'blue',
        tabBarInactiveTintColor:'gray',
        tabBarActiveBackgroundColor:'lightgray'
      }}
    >
      {/* <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Image source={photo1} style={{ width: 30, height: 30 }}></Image>
        ),
      }} /> */}
      <Tab.Screen name="DrawerNavigator" component={DrawerNavigator} options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <Image source={photo1} style={{ width: 30, height: 30 }}></Image>
        ),
      }} />

      <Tab.Screen name="News" component={NewsScreen} options={{
        tabBarLabel: 'News',
        tabBarIcon: () => (
          <Image source={photo2} style={{ width: 30, height: 30 }}></Image>
        ),
      }} />

    </Tab.Navigator>
  );
};

export default TabNavigator;
