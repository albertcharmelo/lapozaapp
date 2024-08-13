import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { router } from "expo-router";

interface CategoriaCardProps {
  source: any;
  categoryText: string;
  urlRedirect: string;
}

const CategoriaCard = ({
  source,
  categoryText,
  urlRedirect,
}: CategoriaCardProps) => {
  return (
    <Pressable onPress={() => router.push(urlRedirect)}>
      <ImageBackground
        source={source}
        imageStyle={{
          borderRadius: 30,
        }}
        style={styles.categoryContainer}>
        <View style={[styles.overlay, { borderRadius: 30 }]}>
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            {categoryText}
          </Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default CategoriaCard;

const styles = StyleSheet.create({
  categoryContainer: {
    width: 120,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
