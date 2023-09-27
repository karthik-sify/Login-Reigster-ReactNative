import { View,Text,TextInput, } from "react-native";

export default UserInputField = ({placeholderValue,userEmail,setEmail,style1,style2}) => {
    return (
        <View>
            <Text style={style2}>ENTER {placeholderValue}:</Text>
            <TextInput style={style1}
                placeholder={placeholderValue}
                placeholderTextColor="grey"
                onChangeText={(textInput) => setEmail(textInput)} //text ->input ; given to setEmail
                value={userEmail}
            />
        </View>

    );
};
