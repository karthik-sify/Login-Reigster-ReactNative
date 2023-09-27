import { TouchableOpacity,Text } from "react-native";
export default Button = ({buttonStyle,buttonText,onPress,buttonName}) => {
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}>
            <Text style={buttonText}>{buttonName}</Text>
        </TouchableOpacity>
    );
};