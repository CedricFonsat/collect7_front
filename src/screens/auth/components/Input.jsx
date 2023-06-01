import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Dimensions } from 'react-native';
import Size from '../../../constants/Size';
import Colors from '../../../constants/Colors';

export default function Input({placeholder, secureTextEntry}) {
  return (
      <>
    <TextInput
     style={styles.container}
     placeholder={placeholder}
     placeholderTextColor={Colors.white}
     secureTextEntry={secureTextEntry}
     />
    </>
  );
}
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tertiary,
    width: width * 0.8,
    height: height * 0.07,
    color: Colors.white,
    borderRadius: Size.defaultBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Size.defaultPadding
  },
});