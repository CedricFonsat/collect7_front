import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Button from './components/Button';
import Input from './components/Input';
import Colors from '../../constants/Colors';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
     <Input placeholder="my_ri_dick"/>
     <Input placeholder="Enter your password" secureTextEntry={true}/>
     <Button text="hhh" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});