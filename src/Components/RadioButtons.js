import { RadioButton } from 'react-native-paper';
import { View } from 'react-native';

const RadioButtons = ({ selectedValue, setSelectedValue }) => {
    return (
        <View>
            <RadioButton.Group
                onValueChange={(value) => setSelectedValue(value)}
                value={selectedValue}
            >
                <RadioButton.Item label="Male" value="Male" />
                <RadioButton.Item label="Female" value="Female" />
            </RadioButton.Group>
        </View>
    );
};

export default RadioButtons;