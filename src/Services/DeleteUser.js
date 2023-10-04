import db from "./Database";

export default deleteUser=(email)=>{
    db.transaction((tx) => {
        tx.executeSql(
          'DELETE FROM users WHERE email = ?',
          [email],
          (_, resultSet) => {
            console.log(`User with email ${email} deleted successfully`);
            return 1;
          },
          (_, error) => {
            console.error(`Error deleting user with email ${email}: ${error}`);
            return 0;
          }
        );
      });
}