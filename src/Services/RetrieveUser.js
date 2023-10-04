import AsyncStorage from '@react-native-async-storage/async-storage';

export default RetrieveUser = async () => {
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

}
