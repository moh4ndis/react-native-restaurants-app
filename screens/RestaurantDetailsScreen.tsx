import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";

type RestaurantDetailsScreenRouteProp = RouteProp<
  {
    params: {
      restaurant: {
        image: any;
        name: string;
        description: string;
        menu: {
          id: string;
          name: string;
          price: string;
        }[];
      };
    };
  },
  "params"
>;

export default function RestaurantDetailsScreen({
  route,
}: {
  route: RestaurantDetailsScreenRouteProp;
}) {
  const { restaurant } = route.params;

  const renderItem = ({ item }: { item: { name: string; price: string } }) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuItemText}>
        {item.name} - {item.price}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={restaurant.image} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={styles.description}>{restaurant.description}</Text>
      <Text style={styles.menuTitle}>Menu:</Text>
      <FlatList
        data={restaurant.menu}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    color: "grey",
    marginBottom: 20,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  menuItem: {
    paddingVertical: 10,
  },
  menuItemText: {
    fontSize: 16,
  },
});
