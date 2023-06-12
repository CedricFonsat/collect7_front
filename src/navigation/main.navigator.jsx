import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from "../screens/profile/ProfileScreen";
import MarketScreen from "../screens/market/MarketScreen";
import RankingScreen from "../screens/ranking/RankingScreen";
import SearchScreen from "../screens/search/SearchScreen";
import { Image } from "react-native";
import market from '../../assets/icon/market.png';
import account from '../../assets/icon/user.png';
import ranking from '../../assets/icon/ranking.png';
import search from '../../assets/icon/collection.png'

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  "tabBarActiveTintColor": "#00A3FF",
  "tabBarInactiveTintColor": "gray",
  "tabBarShowLabel": false,
  "tabBarStyle": [
    {
      "display": "flex",
      "backgroundColor": "#191923",
      "borderTopWidth": 1,
      "borderTopColor": 'rgba(0, 0, 0, 0.5)',
    },
    null
  ]
};

export default function MainNavigator({navigation}) {
  return (
    <Tab.Navigator initialRouteName="market" 
    screenOptions={tabBarOptions}
     >
      <Tab.Screen name="market" component={MarketScreen} options={{
         tabBarLabel: false,
         tabBarIcon: ({ color, size }) => (
          <Image source={market} style={{tintColor: color}}/>
         ),
      }} />
      <Tab.Screen name="ranking" component={RankingScreen}  options={{
         tabBarLabel: false,
  
          headerShown: false,

         tabBarIcon: ({ color, size }) => (
          <Image source={ranking} style={{tintColor: color}}/>
         ),
      }} />
      <Tab.Screen name="search" component={SearchScreen} options={{ headerShown: false, tabBarLabel: false,
         tabBarIcon: ({ color, size }) => (
          <Image source={search} style={{tintColor: color}}/>
         ), }} />
      <Tab.Screen name="profile" component={ProfileScreen} options={{ headerShown: false, tabBarLabel: false,
         tabBarIcon: ({ color, size }) => (
          <Image source={account} style={{tintColor: color}}/>
         ), }} />
    </Tab.Navigator>
  );
}