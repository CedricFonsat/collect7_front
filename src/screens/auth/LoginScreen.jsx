import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Link } from "@react-navigation/native";
import Button from "./components/Button";
import Input from "./components/Input";
import Colors from "../../constants/Colors";
import Size from "../../constants/Size";
import { useState } from "react";
import { useLoginUserMutation } from "../../store/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMeQuery } from "../../store/slices/authSlice";

export default function LoginScreen({navigation}) {
  //const count = useSelector((state) => state.counter.value);

 
  
  const [loginUser] = useLoginUserMutation();
  // const { data: queryData, error} = useMeQuery();

  // console.log(queryData);



  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //navigation.navigate('profile')
   

    const formData = {
      "email": username,
      "password": password
    }

  console.log(formData);

   loginUser(formData).unwrap()
   .then((res) => {
      console.log('Good Job');
      console.log(res);
       setPassword();
       setUsername('');
         AsyncStorage.setItem("@token", res.token)
   })
   .catch(() =>
       console.log('pas bon')
   )
setPassword();
setUsername('');

navigation.navigate('main')

  }

//ced97x@gmail.com  
//contact@collect7.fr

  return (
    <View style={styles.container}>
      <Button
        text="Google"
        backgroundColor={Colors.tertiary}
        borderWith={1}
        borderColor={Colors.borderColor}
      />
      <View style={styles.line}></View>
      <Text style={styles.label}>Username</Text>
      <Input
       placeholder="my_ri_dick"
       placeholderTextColor={Colors.white}
       borderWidth={1}
       borderColor={Colors.borderColor}
       value={username}
       onChangeText={setUsername}
      />
      <Text style={styles.label}>Username</Text>
      <Input
        placeholder="Enter your password"
        placeholderTextColor={Colors.white}
        secureTextEntry={true}
        borderWith={1}
        borderColor={Colors.borderColor}
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.captionPassword}>
      <Link style={styles.captionTextPassword} to={{ screen: "resetPassword" }}> Forgot Password? </Link>
      </View>
      <Button
        text="Sign in"
        backgroundColor={Colors.secondary}
        onPress={handleLogin}
      />
      <View style={styles.captionSignUp}>
        <Text style={styles.captionTextSignUp}>
          Don't have an account?
          <Link style={styles.link} to={{ screen: "register" }}> Sign Up </Link>now!
        </Text>
      </View>
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
  captionPassword: {
    width: width * 0.8,
    height: height * 0.08,
    paddingVertical: Size.littlePadding,
    alignItems: "flex-end",
  },
  captionTextPassword: {
    color: Colors.gray,
  },
  captionSignUp: {
    height: height * 0.08,
    justifyContent: "center",
  },
  captionTextSignUp: {
    color: Colors.gray,
  },
  line: {
    width: width * 0.8,
    height: height * 0.08,
  },
  label: {
    width: width * 0.8,
    marginVertical: Size.littleMargin,
    color: Colors.white,
  },
  link:{
    color: Colors.secondary,
  },
});
