import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, Image, FlatList, ScrollView, Item } from "react-native";
import { useEffect, useRef, useState } from "react";
import { BlurView } from 'expo-blur';
import { Link, NavigationContainer } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import Size from "../../constants/Size";
import background from '../../../assets/bg.webp'
import avatar from '../../../assets/avatar.png'
import followers from '../../../assets/followers.png'
import cards from '../../../assets/cards.png'
import arrow from '../../../assets/arrow.png'
import { LinearGradient } from "expo-linear-gradient";
import Card from "../../components/Card";
import { useGetCardsQuery } from "../../store/slices/cardSlice";
import { useMeQuery } from "../../store/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";


const HEADER_HEIGHT = 250;

export default function ProfileScreen({navigation}) {

  const {data: dataMe, error: errorMe, isLoading: loadingMe} = useMeQuery()


console.log(dataMe,'*********');



const leftButton = () => {
  return (
    <TouchableOpacity style={{
      width: 50,
      height: 50,
      borderRadius: Size.defaultBorderRadius,
      backgroundColor: Colors.primary, 
      justifyContent: 'center',
      alignItems: 'center', 
      borderColor: Colors.borderColor,
      borderWidth: 1
    }}
    onPress={() => navigation.goBack()}
    >
      <Image style={{
        width: 20,
        height: 20,
        tintColor: Colors.white,
      }} source={arrow} />
    </TouchableOpacity>
  )
}


const renderHeader = () => {
  return (
    <View style={{
      width: width,
      height: 100,
     // backgroundColor: Colors.secondary,
      position: 'absolute',
      justifyContent: 'flex-end',
      paddingHorizontal: Size.defaultPadding
    }}>
      {leftButton()}

      {errorMe ? (
        <Text>Oh no, there was an error</Text>
      ) : loadingMe ? (
        <Text>Loading...</Text>
      ) : data ? (
        <>
          <Text>{dataMe.email}</Text>
        </>
      ) : null}
      
    </View>
  )
}


    //const { data, error, isLoading } = useGetPokemonByNameQuery()
    const { data, error, isLoading } = useGetCardsQuery();
   // const { data: queryData} = useMeQuery();

   // console.log(queryData, 'hhhhh');
  
    const renderItems = () => {
      if (isLoading) {
        return <View><Text>Loading...</Text></View>;
      }
      if (error) {
        return <View><Text>Error</Text></View>;
      }
      return data.map((item) => (
        <Card key={item.id} name={item.name} price={item.price}
          bid="flex"
          image={{
            uri: item.image
           }}
          />
      ));
    };

    const scrollY = useRef(new Animated.Value(0)).current;
    

    
      const renderCollectionHeader = () => {
        return (
          <View
            style={{
              marginTop: -1000,
              paddingTop: 1000,
              alignItems: "center",
              overflow: "hidden"
            }}
          >
              
            {/* Background Image */}
            <Animated.Image
              source={{
                uri: 'https://investiria.com/wp-content/uploads/2022/05/cover.jpg'
              }}
              resizeMode="contain"
              style={{
                height: HEADER_HEIGHT,
                width: "200%",
                transform: [
                  {
                    translateY: scrollY.interpolate({
                      inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                      outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                    }),
                  },
                  {
                    scale: scrollY.interpolate({
                      inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                      outputRange: [2, 1, 0.75],
                    }),
                  },
                ],
              }}
            >
            </Animated.Image>

         
        
    
           <View style={{
            // backgroundColor: 'red',
             width: width,
             height: 200,
             position: 'absolute',
             bottom: 0,
             justifyContent: 'center',
             alignItems: 'center'
           }}>
        <LinearGradient
        // Background Linear Gradient
        colors={['transparent', Colors.primary]}
        style={styles.background}
      />
       <View style={{
           width: 100,
           height: 100,
           borderRadius: Size.defaultBorderRadius,
           overflow: 'hidden',
           borderColor: Colors.white,
           borderWidth: 6
       }}>
           <Image style={{
               width: "100%",
               height: "100%",
           }} source={{
             uri: 'https://images-platform.99static.com/keeQBkOWsPZHlN4j0dYR5geXi9E=/0x1:1298x1299/500x500/top/smart/99designs-contests-attachments/136/136125/attachment_136125011'
           }}/>
       </View>
       <View style={{
          // width: 200,
           height: 40,
          // backgroundColor: Colors.secondary,
           flexDirection: 'row',
           borderRadius: 8,
           position: 'absolute',
           bottom: 0,
           //textttt
           justifyContent: 'center',
           alignItems: 'center',
           width: 300,
       }}>
         <Text style={{
             fontSize: Size.titleSize20,
             fontWeight: Size.bold,
             color: Colors.white
           }}>Test</Text>
           {/* <View style={{
               width: 80,
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center',
           }}>
               <Text>24 088</Text>
               <Text style={{fontSize: Size.captionSize}}>Followers</Text>
           </View>
           <View style={{
               width: 80,
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center',
           }}>
               <Text>273</Text>
               <Text style={{fontSize: Size.captionSize}}>Cards</Text>
           </View> */}
       </View>
           </View>
           
    
            {/* Collection Creator Card */}
            <Animated.View
            style={{
                position: "absolute",
                bottom: 10,
                left: 30,
                right: 30,
                height: 80,
                transform: [
                    {
                        translateY : scrollY.interpolate({
                            inputRange: [0, 100, 150],
                            outputRange: [0, 0, 100],
                            extrapolate: 'clamp'
                        })
                    }
                ]
            }}
            >
    
              
                {/* <CollectionCreatorCardInfo
                selectedCollection = {selectedCollection}
                /> */}
    
            </Animated.View>
          </View>
        );
      };


  return (
    <View style={styles.container}>
       <Animated.FlatList
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}  
            {/* Probable emplacement de SharedElement */}
            {renderCollectionHeader()} 
           

            {/* Title */}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
      <View style={{
          width: width,
          height: height * 0.65,
         // backgroundColor: Colors.gray
      }}>
      <Text style={{
          width: width,
          fontSize: Size.titleSize20,
          color: Colors.white,
          padding: Size.largePadding
      }}>Cards</Text>

     {/* User of cards */}

     <ScrollView>
       <View style={{
      //justifyContent: 'space-between',
      padding: Size.littlePadding,
      //backgroundColor: 'red',
      flexDirection: 'column',
      width: width,
      height: height,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }}>
      {renderItems()}
       </View>
      </ScrollView>
      </View>

      {renderHeader()}
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 200,
  },
  card:{
    width: width / 2.5,
    height: height / 3.5,
    backgroundColor: Colors.secondary,
    borderRadius: Size.littleMargin,
    justifyContent: 'center',
    alignItems: 'center',
    margin: Size.defaultMargin
  },
  imageCard: {
    width: 50,
    height: 50
  }
});
