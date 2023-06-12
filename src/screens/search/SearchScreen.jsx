import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Link } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import Size from "../../constants/Size";

export default function SearchScreen() {


  return (
    <View style={styles.container}>
        <Text style={styles.text}>Search</Text>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

//ced97x@gmail.com
//contact@collect7.fr

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
      color: 'white',
      fontSize: 30
  }
});