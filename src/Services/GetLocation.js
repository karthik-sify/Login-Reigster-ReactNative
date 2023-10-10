import Geolocation from '@react-native-community/geolocation';

const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        resolve([latitude, longitude]);
      },
      (error) => {
        console.error(error);
        reject(error);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 1000 }
    );
  });
};

export default getUserLocation;
