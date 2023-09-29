import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    {
        name: 'mydatabase.db',
        location: 'default'
    },
    () => {
        console.log("Db created")
    },
    (error) => {
        console.error('Error opening database:', error);
    });

// Create a table for user registration
db.transaction((tx) => {
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS users (
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      gender TEXT NOT NULL,
      dob TEXT NOT NULL
    );`,[],
    () => {
        console.log('Table created successfully');
    },
    (error) => {
        console.error('Error creating table:', error);
    }
    );
});

export default db;