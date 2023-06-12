import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Image,TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import Colors from "../../../constants/Colors";
import Size from "../../../constants/Size";
import bg from '../../../../assets/bg.webp'
import card from '../../../../assets/cards.png'

export default function Category() {


  return (
  <>
    <TouchableOpacity style={styles.container}>
        <Image style={styles.image} source={card} />
        <Text style={styles.text}>Category</Text>
    </TouchableOpacity>
    </>
  );
}

const { height, width } = Dimensions.get("window");

//ced97x@gmail.com
//contact@collect7.fr

const styles = StyleSheet.create({
  container: {
    width: width * 0.21,
    height: height * 0.1,
    backgroundColor: Colors.borderColor,
    alignItems: "center",
    justifyContent: "center",
    margin: Size.littleMargin,
    borderRadius: Size.smallBorderRadius
  },
  text:{
      color: Colors.white,
      fontSize: 10,
      paddingHorizontal: Size.defaultPadding,
      marginTop: Size.littleMargin,
      width: '100%',
      fontWeight: Size.bold
  },
  image:{
    width: 35,
    height: 35,
    tintColor: Colors.white
  }
});