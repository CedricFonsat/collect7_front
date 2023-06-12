import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Link } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import Size from "../../constants/Size";
import Collection from "./components/Collection";
import Category from "./components/Category";
import { LinearGradient } from "expo-linear-gradient";

export default function MarketScreen() {


  return (
    <View style={styles.container}>
          <ScrollView horizontal={true} style={{
        width: width * 0.9,
        height: height * 0.00001,
      }}>
        <View style={{
          flexDirection: 'row',
          paddingHorizontal: Size.smallPadding,
        }}>
      
         <Category />
         <Category />
         <Category />
         <Category />
         <Category />
         <Category />
        </View>
      </ScrollView>
      <Text style={{
        color: Colors.white,
        fontSize: 20,
        width: width * 0.8,
        marginVertical: Size.defaultMargin
      }}>Popular Collection 🔥 </Text>
          <LinearGradient colors={['transparent',Colors.primary, Colors.primary]}
      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}} style={{
        width: width * 0.2,
        height: height / 5.9,
        zIndex: 8,
        position: 'absolute',
        top: 347,
        right: 0
      }}/>
      <ScrollView horizontal={true} style={{
        width: width * 0.9,
        height: height * 0.00001,
      }}>
        <View style={{
          flexDirection: 'row',
          paddingHorizontal: Size.smallPadding,
        }}>
      
         <Collection />
         <Collection />
         <Collection />
        </View>
      </ScrollView>
  
      <Text style={styles.text}>Market</Text>
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