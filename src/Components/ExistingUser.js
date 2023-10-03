// const getUsers = () => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         'SELECT * FROM users',
//         [],
//         (tx, results) => {
//           const len = results.rows.length;
//           for (let i = 0; i < len; i++) {
//             const row = results.rows.item(i);
//           }
//         },
//         (error) => {
//           console.error('Error retrieving users:', error);
//         }
//       );
//     });
//   };