import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token')
    if(value !== null) {
      return value
    }
  } catch(e) {
    console.log('not token');
  }
}