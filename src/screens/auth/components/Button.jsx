import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Size from '../../../constants/Size';
import Colors from '../../../constants/Colors';

export default function Button({text}) {
  return (
      <>
    <TouchableOpacity style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
    </>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    width: width * 0.8,
    height: height * 0.07,
    color: Colors.white,
    borderRadius: Size.defaultBorderRadius,
    alignItems: 'center',
    justifyContent: 'center'
  },
});