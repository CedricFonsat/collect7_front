import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Link } from '@react-navigation/native';
import Colors from "../../constants/Colors";
import Size from "../../constants/Size";
import Input from "./components/Input";
import Button from "./components/Button";


export default function RegisterScreen() {

  return (
     <View style={styles.container}>
       {/* Navigation */}
       <View style={styles.navigation}>
         <Text>Sign up and icon</Text>
       </View>

       {/* Header */}
       <View style={styles.header}>
         <Text style={styles.title}>Create New Account</Text>
         <Text style={styles.subtitle}>We happy to see you again. Sign Up to {'\n'} your account</Text>
       </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>Username</Text>
          <Input placeholder="my_ri_dick" placeholderTextColor={Colors.gray}/>
          <Text style={styles.label}>Email</Text>
          <Input placeholder="my_ri_dick@cacabounga.fr" placeholderTextColor={Colors.gray}/>
          <Text style={styles.label}>Password</Text>
          <Input placeholder="************" placeholderTextColor={Colors.gray} secureTextEntry={true} />
          <Text style={styles.label}>Confirm Password</Text>
          <Input placeholder="************" placeholderTextColor={Colors.gray} secureTextEntry={true} />
          <Text style={styles.caption}>By signing up, you agree to all the 
          <Link style={styles.link} to={{ screen: "login" }}> terms & conditions </Link>
          </Text>
          <Button text="Create Account" backgroundColor={Colors.secondary} />
        </View>

        {/* Sign In */}
       <View style={styles.captionSignIn}>
       <Text style={styles.captionSignInText}>Have an account? 
        <Link style={styles.link} to={{ screen: "login" }}> Sign In</Link>
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
  backgroundColor: Colors.secondary,
  justifyContent: 'center',
  alignItems: 'center'
}
});
