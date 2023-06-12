import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Image,TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import Colors from "../../../constants/Colors";
import Size from "../../../constants/Size";
import bg from '../../../../assets/bg.webp'

export default function Collection() {


  return (
  <>
    <View>
    <TouchableOpacity style={styles.container}>
        <Image source={bg} style={styles.image}/>
        <View style={{
          width: '100%',
          height: '35%',
          backgroundColor: 'blue',
        }}>
          <View style={{
            width: 60,
            height: 60,
            backgroundColor: 'green',
            position: 'absolute',
            left: 15,
            bottom: 15,
            borderRadius: 8
          }}>

          </View>
          <Text style={{
            marginLeft: 85,
            marginTop: 10,
            color: 'white',
            fontSize: 20
          }}>hhkhhkhhk</Text>
        </View>
    </TouchableOpacity>
    </View>
    </>
  );
}

const { height, width } = Dimensions.get("window");

//ced97x@gmail.com
//contact@collect7.fr

const styles = StyleSheet.create({
  container: {
    width: width / 1.8,
    height: height / 5.9,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: Size.littleBorderRadius,
    marginHorizontal: Size.littleMargin,
    overflow: 'hidden'
  },
  text:{
      color: 'white',
      fontSize: 18,
      paddingHorizontal: Size.defaultPadding,
      marginTop: Size.littleMargin
  },
  image:{
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
});