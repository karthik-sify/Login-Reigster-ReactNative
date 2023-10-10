import db from "./Database";

export default function updateLocation(latitude,longitude,email) {
    db.transaction((tx) => {
        tx.executeSql(
            `UPDATE users
                 SET latitude = ?, longitude = ?
                 WHERE email = ?`,
            [latitude,longitude,email],
            () => {
                console.log('Latitude and longitude inserted successfully.');
            },
            (error) => {
                console.error('Error inserting latitude and longitude:', error);
            }
        );
    },
    (error) => {
        console.error('Error inserting user details:', error);
    }
    );
};
