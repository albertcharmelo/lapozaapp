import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface CardPlateDiscountProps {
  price: number;
  name: string;
  discount: number;
  image: any;
}

const CardPlateDiscount = ({
  price,
  name,
  discount,
  image,
}: CardPlateDiscountProps) => {
  return (
    <View
      style={{
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: "#fff",
        padding: 10,
        paddingBottom: 18,
      }}>
      <View style={{ position: "relative", paddingBottom: 20 }}>
        <ImageBackground
          source={image}
          imageStyle={{
            borderRadius: 20,
          }}
          style={{ height: 150 }}>
          <View style={[styles.overlay, { borderRadius: 30 }]}>
            <LinearGradient
              colors={["rgba(	23, 23, 37,0.55)", "rgba(0, 0, 0, 0)"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                flex: 1,
                borderRadius: 20,
                paddingVertical: 15,
              }}>
              <View
                style={{
                  padding: 8,
                  paddingVertical: 6,
                  maxWidth: "45%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#FF814B",
                }}>
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}>
                  La Poza Getafe
                </Text>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#171725",
            width: 170,
            borderRadius: 20,
            height: 50,
          }}>
          <Text
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
            }}>
            {discount}% de descuento
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}>
        <View
          style={{
            width: "70%",
          }}>
          <Text style={{ fontSize: 18, color: "#171725", fontWeight: "bold" }}>
            {name}
          </Text>
          <Text style={{ color: "#78828A", fontSize: 16 }}>La Poza Getafe</Text>
        </View>
        <Text
          style={{
            color: "#F86A2E",
            fontSize: 20,
            fontWeight: "bold",
          }}>
          € {price.toFixed(2).padEnd(4, "0")}
        </Text>
      </View>
    </View>
  );
};

export default CardPlateDiscount;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
});
