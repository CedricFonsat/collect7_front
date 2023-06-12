import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import Size from "../../constants/Size";
import Container,{ Toast } from "toastify-react-native";

export default function RankingScreen() {

  const handleSubmit = async () => {
    Toast.success('Promise if Resolved');
  };


  return (
    <View style={styles.container}>
        <Text style={styles.text}>Ranking</Text>
        <Container position="top" />
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle} >
    <Text>
        SHOW SOME AWESOMENESS!
    </Text>
    </TouchableOpacity>
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
  },
  buttonStyle: {
    marginTop: 10,
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: 2,
    padding: 10
}
});