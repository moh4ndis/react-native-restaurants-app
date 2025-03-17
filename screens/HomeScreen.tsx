import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { restaurants } from "../data/restaurant";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: {
    restaurant: { image: any; name: string; description: string };
  };
};

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const renderItem = ({
    item,
  }: {
    item: { image: any; name: string; description: string };
  }) => (
    <TouchableOpacity
      style={styles.restaurant}
      onPress={() =>
        navigation.navigate("RestaurantDetails", { restaurant: item })
      }>
      <Image source={item.image} style={styles.image} />
      <View style={styles.restaurantContainer}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}></FlatList>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  restaurant: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  restaurantContainer: {
    padding: 10,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  restaurantDescription: {
    color: "grey",
  },
});
