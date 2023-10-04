import db from "./Database";
import RetrieveUser from "./RetrieveUser";

export default RetrieveUserDetails = async() => {
    const userEmail = await RetrieveUser();
    return new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM users WHERE email=?',
                [userEmail],
                (tx, results) => {
                    const user = results.rows.item(0);
                    resolve(user);
                },
                (error) => {
                    console.error('Error retrieving users:', error);
                    reject(error);
                }
            );
        });
    });
    
};