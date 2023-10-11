import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet,Image } from 'react-native';
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

const UserList = ({updateFlag}) => {
   const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const userEmail = await retrieveData();
      if (userEmail !== null) {
        getUsers(userEmail);
      }
    };

    fetchData();
  }, [updateFlag]);

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
          <View >
            <Image source={{uri:item.uri}} style={{width:100,height:100,margin:5,borderRadius:50}}></Image>
            <Text style={styles.textStyle}>Name:  {item.firstName} {item.lastName}</Text>
            <Text style={styles.textStyle}>Email:  {item.email}</Text>
            <Text style={styles.textStyle}>Gender:  {item.gender}</Text>
            <Text style={styles.textStyle}>Date of Birth:  {item.dob}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  textStyle:{color:'black',fontSize:16,fontWeight:'500',margin:5}
});


export default UserList;
