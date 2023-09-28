import { View,Text,TextInput, } from "react-native";

export default UserInputField = ({placeholderValue,userValue,setfuction,style1,style2}) => {
    return (
        <View>
            <Text style={style2}>{placeholderValue}:</Text>
            <TextInput style={style1}
                placeholder={placeholderValue}
                placeholderTextColor="grey"
                onChangeText={(textInput) => setfuction(textInput)} //text ->input ; given to setEmail
                value={userValue}
            />
        </View>

    );
};
