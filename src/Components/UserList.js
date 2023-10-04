import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import db from '../Services/Database';



const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem("UsersEmail");
    if (value !== null) {
      return value;
    } else {
      console.log('Data not found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
    return null;
  }
};

const UserList = () => {
   const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userEmail = await retrieveData();
      if (userEmail !== null) {
        getUsers(userEmail);
      }
    };

    fetchData();
  }, []);

  const getUsers = (userEmail) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users WHERE email=?',
        [userEmail],
        (tx, results) => {
          const userList = [];
          const len = results.rows.length;
          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);
            userList.push(row);
          }
          setUsers(userList);
          console.log("GET user successful :UserList.js");
        },
        (error) => {
          console.error('Error retrieving users:', error);
          setUsers([]);
        }
      );
    });
  };

  return (
    <View>
      <Text style={{ color: "black" }}></Text>
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 20 }}>
            <Text style={{ color: "black" }}>Name: {item.firstName} {item.lastName}</Text>
            <Text style={{ color: "black" }}>Email: {item.email}</Text>
            <Text style={{ color: "black" }}>Gender: {item.gender}</Text>
            <Text style={{ color: "black" }}>Date of Birth: {item.dob}</Text>
          </View>
        )}
      />
    </View>
  );
};



export default UserList;
