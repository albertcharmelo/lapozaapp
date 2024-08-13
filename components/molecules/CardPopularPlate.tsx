import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Heart, Star } from "lucide-react-native";
interface CardPopularPlateProps {
  source: any;
}

const CardPopularPlate = ({ source }: CardPopularPlateProps) => {
  return (
    <ImageBackground
      source={source}
      imageStyle={{
        borderRadius: 20,
      }}
      style={{
        width: "100%",
        height: 250,
        position: "relative",
      }}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 15,
        }}>
        <View style={styles.calificationContainer}>
          <Star size={20} color={"#FF814B"} strokeWidth={3} fill={"#FF814B"} />
          <Text>+200 pedidos esta semana</Text>
        </View>
      </View>
      <View style={styles.infoRecipe}>
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Pasta con salsa de tomate
            </Text>
            {/* Precio en euros */}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 17,
                color: "#F86A2E",
              }}>
              € 12.00
            </Text>
          </View>

          <Text style={{ fontSize: 14 }}>Restaurante: Boadilla</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CardPopularPlate;

const styles = StyleSheet.create({
  NotificationIconContainer: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  calificationContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    flexDirection: "row",
    padding: 5,
    borderRadius: 20,
    gap: 5,
  },
  infoRecipe: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 20,
    borderRadius: 20,
    height: 80,
  },
});
