// import React, { useState } from 'react';
// import { Button, Image, View } from 'react-native';
// import {launchImageLibrary, launchCamera} from 'react-native-image-picker';


// const ImagePic = ({selectedImage,setSelectedImage}) => {

//   const openImagePicker = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: false,
//       maxHeight: 2000,
//       maxWidth: 2000,
//     };

//     launchImageLibrary(options, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('Image picker error: ', response.error);
//       } else {
//         let imageUri = response.uri || response.assets?.[0]?.uri;
//         setSelectedImage(imageUri);
//       }
//     });
//   };
  
//   handleCameraLaunch = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: false,
//       maxHeight: 2000,
//       maxWidth: 2000,
//     };
  
//     launchCamera(options, response => {
//       console.log('Response = ', response);
//       if (response.didCancel) {
//         console.log('User cancelled camera');
//       } else if (response.error) {
//         console.log('Camera Error: ', response.error);
//       } else {
//         let imageUri = response.uri || response.assets?.[0]?.uri;
//         setSelectedImage(imageUri);
//       }
//     });
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//     <View style={{ marginTop: 20 }}>
//       <Button title="Choose from Device" onPress={openImagePicker} />
//     </View>
//     <View style={{ marginTop: 20,marginBottom: 50 }}>
//       <Button title="Open Camera" onPress={handleCameraLaunch} />
//     </View>
//   </View>
//   );
// };

// export default ImagePic;