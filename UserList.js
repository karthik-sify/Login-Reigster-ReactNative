import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import db from './Database';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers((userList) => {
      setUsers(userList);
    });
  }, []);

  const getUsers = (callback) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users',
        [],
        (tx, results) => {
          const userList = [];
          const len = results.rows.length;
          for (let i = 0; i < len; i++) {
            const row = results.rows.item(i);
            userList.push(row);
          }
          callback(userList);
          console.log("GET user successfull");
        },
        (error) => {
          console.error('Error retrieving users:', error);
          callback([]);
        }
      );
    });
  };

  return (
    <View>
      <Text style={{color:"black"}}></Text>
      <FlatList
        data={users}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{margin:20}}> 
            <Text style={{color:"black"}}>Name: {item.firstName} {item.lastName}</Text>
            <Text style={{color:"black"}}>Email: {item.email}</Text>
            <Text style={{color:"black"}}>Gender: {item.gender}</Text>
            <Text style={{color:"black"}}>Date of Birth: {item.dob}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default UserList;