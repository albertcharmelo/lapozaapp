import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MapPin } from "lucide-react-native";

interface CardRestaurantProps {
  source: any;
  locationName: string;
  locationAddress: string;
}

const CardRestaurant = ({
  source,
  locationAddress,
  locationName,
}: CardRestaurantProps) => {
  return (
    <View style={{ gap: 4 }}>
      <Image source={source} style={styles.image} />
      <Text style={{ fontSize: 17, fontWeight: "bold", maxWidth: 220 }}>
        {locationName}
      </Text>
      <View style={styles.info}>
        <MapPin size={16} color={"#FF814B"} />
        <Text>{locationAddress}</Text>
      </View>
    </View>
  );
};

export default CardRestaurant;

const styles = StyleSheet.create({
  image: {
    width: 210,
    height: 192,
    objectFit: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    maxWidth: 200,
  },
});
