import { PermissionsAndroid } from 'react-native';
import { request } from 'react-native-permissions';

const requestLocationPermission = async () => {
  try {
    const granted = await request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (granted === 'granted') {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
  }
};

export default requestLocationPermission;
