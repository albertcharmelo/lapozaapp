import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Divisor = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "#E3E9ED" }} />
        <View>
          <Text
            style={{
              width: "auto",
              textAlign: "center",
              marginLeft: 5,
              marginRight: 5,
            }}>
            or
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#E3E9ED" }} />
      </View>
    </View>
  );
};

export default Divisor;

const styles = StyleSheet.create({});
