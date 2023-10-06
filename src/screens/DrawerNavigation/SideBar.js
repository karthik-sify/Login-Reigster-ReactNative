import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const Sidebar = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.sidebarContainer}>
        <TouchableOpacity
          style={styles.sidebarItem}
          onPress={() => navigation.navigate('Home')}
        >
          <Text>Home</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
  },
});

export default Sidebar;
