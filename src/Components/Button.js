import { TouchableOpacity,Text } from "react-native";
export default Button = ({buttonText,onPress,buttonName}) => {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Text style={buttonText}>{buttonName}</Text>
        </TouchableOpacity>
    );
};