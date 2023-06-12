import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from "react-native";
import { Link } from '@react-navigation/native';
import Colors from "../../constants/Colors";
import Size from "../../constants/Size";
import Input from "./components/Input";
import Button from "./components/Button";


export default function ResetPasswordScreen({navigation}) {


  const IconBack = ({onPress}) => {
      return (
          <TouchableOpacity style={{
              width: 50,
              height: 50,
              borderRadius: Size.defaultBorderRadius,
              backgroundColor: Colors.gray,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: Colors.white
          }}
          onPress={onPress}
          >
              <Text style={{
                  fontSize: 20
              }}>{'\<'}</Text>
          </TouchableOpacity>
      )
  }  

  return (
     <View style={styles.container}>
       {/* Navigation */}
       <View style={styles.navigation}>
         <IconBack onPress={()=>navigation.goBack()}/>
       </View>

       {/* Header */}
       <View style={styles.header}>
         <Text style={styles.title}>Forgot Password</Text>
         <Text style={styles.subtitle}>We will send a password to your email</Text>
       </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <Input placeholder="my_ri_dick@cacabounga.fr" placeholderTextColor={Colors.gray}/>
          <Text style={styles.caption}>By sending, you agree to the
          <Link style={styles.link} to={{ screen: "login" }}> Privacy Policy </Link>
          </Text>
          <Button text="Send" backgroundColor={Colors.secondary} />
        </View>

        {/* Sign In */}
       <View style={styles.captionSignIn}>
       <Text style={styles.captionSignInText}>Need help? 
        <Link style={styles.link} to={{ screen: "login" }}> Contact our support team</Link>
        </Text>
       </View>
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  header:{
    width: width,
    height: height * 0.1,
    paddingHorizontal: Size.largePadding
  },
  form:{
    width: width,
    alignItems: 'center',
  },
  link:{
    color: Colors.secondary,
  },
  title: {
    fontSize: Size.titleSize20,
    color: Colors.white,
    fontWeight: Size.bold
  },
  subtitle: {
    fontSize: Size.subtitleSize,
    color: Colors.gray,
    marginTop: Size.littleMargin
  },
  label:{
    width: width * 0.8,
    marginVertical: Size.littleMargin,
    color: Colors.white,
  },
  caption: { 
  marginTop: Size.littleMargin,
  fontSize: Size.captionSize,
  color: Colors.gray,
  width: width * 0.8,
  height: height * 0.08,
  paddingVertical: Size.littlePadding,
  alignItems: "center",
},
captionSignIn:{
  marginTop: Size.littleMargin,
  width: width,
  height: height * 0.08,
  alignItems: 'center',
 justifyContent: 'center',
},
captionSignInText:{
  fontSize: Size.titleSize,
  color: Colors.gray,
},
navigation:{
  width: width,
  height: height * 0.15,
//  backgroundColor: Colors.secondary,
  justifyContent: 'space-between',
  paddingHorizontal: Size.defaultPadding,
  alignItems: 'center',
  flexDirection: 'row'
}
});
