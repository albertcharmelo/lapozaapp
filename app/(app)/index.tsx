import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { useSession } from "@/ctx";
import CategoriaCard from "@/components/atom/CategoriaCard";
import CardPopularPlate from "@/components/molecules/CardPopularPlate";
import PagerView from "react-native-pager-view";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import Carousel from "react-native-reanimated-carousel";
import { ChevronRight, MapPin } from "lucide-react-native";
import CardRestaurant from "@/components/molecules/CardRestaurant";
import CardPlateDiscount from "@/components/molecules/CardPlateDiscount";
const categories = [
  {
    id: 1,
    name: "Ensalada",
    image: require("@/assets/images/categorias/ensalada.jpg"),
  },
  {
    id: 2,
    name: "Pasta",
    image: require("@/assets/images/categorias/pasta.jpg"),
  },
  {
    id: 3,
    name: "Pizza",
    image: require("@/assets/images/categorias/pizza.jpg"),
  },
  {
    id: 4,
    name: "Bebidas",
    image: require("@/assets/images/categorias/bebidas.jpg"),
  },
  {
    id: 5,
    name: "Postres",
    image: require("@/assets/images/categorias/postre.jpg"),
  },
];

const restaurants = [
  {
    id: 1,
    name: "LaPoza Getafe",
    image: require("@/assets/images/restaurants/getafe.png"),
    address: "Pz. Juan Carlos I, 1. 28905 - Getafe",
  },
  {
    id: 2,
    name: "LaPoza Boadilla",
    image: require("@/assets/images/restaurants/boadilla.jpeg"),
    address: "Av. Siglo XXI, 4. 28660 - Boadilla del Monte",
  },
  {
    id: 3,
    name: "LaPoza Leganés",
    image: require("@/assets/images/restaurants/leganes.jpeg"),
    address: "Av. Vicente Ferrer, 9. 28918 - Leganés",
  },
  {
    id: 4,
    name: "LaPoza Sky - Sala de Eventos",
    image: require("@/assets/images/restaurants/sky.jpg"),
    address: "Pz. Juan Carlos I, 1. 28905 - Getafe",
  },
  {
    id: 5,
    name: "LaPoza Vip - Sala de Eventos",
    image: require("@/assets/images/restaurants/boadilla_vip.jpg"),
    address: "Av. Siglo XXI, 4. 28660 - Boadilla del Monte",
  },
];

const platesDiscount = [
  {
    id: 1,
    name: "Ensalada de pollo",
    discount: 4,
    price: 8.88,
    image: require("@/assets/images/categorias/ensalada.jpg"),
  },
  {
    id: 2,
    name: "Vino tinto",
    discount: 3,
    price: 5.88,
    image: require("@/assets/images/categorias/bebidas.jpg"),
  },
  {
    id: 3,
    name: "Pasta boloñesa",
    discount: 10,
    price: 9,
    image: require("@/assets/images/categorias/pasta.jpg"),
  },
  {
    id: 4,
    name: "Pizza de jamón y queso",
    discount: 5,
    price: 7.88,
    image: require("@/assets/images/categorias/pizza.jpg"),
  },
  {
    id: 5,
    name: "Tarta de queso",
    discount: 8,
    price: 10.88,
    image: require("@/assets/images/categorias/postre.jpg"),
  },
];

export default function HomeScreen() {
  const { signOut } = useSession();
  const width = Dimensions.get("window").width - 40;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        gap: 16,
      }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categorias </Text>
        <Text style={styles.seAllText}>Ver Todo </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 5,
        }}
        style={{
          maxHeight: 70,
        }}>
        {categories.map((category) => (
          <CategoriaCard
            key={category.id}
            source={category.image}
            categoryText={category.name}
            urlRedirect="/"
          />
        ))}
      </ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Platos Populares </Text>
        <Text style={styles.seAllText}>Ver Todo </Text>
      </View>
      <View style={{ flex: 1, height: 250 }}>
        <Carousel
          loop
          width={width}
          height={250}
          autoPlay={true}
          pagingEnabled={true}
          data={categories}
          scrollAnimationDuration={500}
          autoPlayInterval={3000}
          renderItem={({ item }) => {
            return <CardPopularPlate source={item.image} />;
          }}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nuestros Restaurantes </Text>
        <Text style={styles.seAllText}>
          <ChevronRight size={20} color={"#FF814B"} />
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 14,
        }}
        style={{
          maxHeight: 260,
        }}>
        {restaurants.map((restaurant) => (
          <CardRestaurant
            key={restaurant.id}
            source={restaurant.image}
            locationName={restaurant.name}
            locationAddress={restaurant.address}
          />
        ))}
      </ScrollView>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Descuentos disponibles </Text>
        <Text style={styles.seAllText}>
          <ChevronRight size={20} color={"#FF814B"} />
        </Text>
      </View>
      <View style={{ gap: 16, paddingBottom: 80 }}>
        {platesDiscount.map((plate) => (
          <CardPlateDiscount
            key={plate.id}
            image={plate.image}
            name={plate.name}
            discount={plate.discount}
            price={plate.price}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
    paddingTop: 20,
    gap: 16,
    flex: 1,
    maxHeight: Dimensions.get("window").height,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#171725",
  },
  seAllText: {
    color: "#FF814B",
    fontSize: 14,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
});
