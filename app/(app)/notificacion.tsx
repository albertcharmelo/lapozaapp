import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { CheckCircle, CircleX } from "lucide-react-native";

const notificacion = () => {
  return (
    <View style={{ padding: 24 }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Nuevos</Text>
        <View style={styles.card}>
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CheckCircle size={24} color={"#000"} />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                ¡Tu pedido ha sido confirmado!
              </Text>
              <Text style={{ fontSize: 14, paddingRight: 40 }}>
                Tu pedido ha sido confirmado y se encuentra en camino.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
          Historial
        </Text>
        <View style={styles.card}>
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CheckCircle size={24} color={"#000"} />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                ¡Tu pedido ha sido confirmado!
              </Text>
              <Text style={{ fontSize: 14, paddingRight: 40 }}>
                Tu pedido ha sido confirmado y se encuentra en camino.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CircleX size={26} color={"red"} />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                ¡Tu pedido ha sido cancelado!
              </Text>
              <Text style={{ fontSize: 14, paddingRight: 40 }}>
                Tu pedido ha sido cancelado por falta de stock.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CheckCircle size={24} color={"#000"} />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                ¡Tu pedido ha sido confirmado!
              </Text>
              <Text style={{ fontSize: 14, paddingRight: 40 }}>
                Tu pedido ha sido confirmado y se encuentra en camino.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View
            style={{
              padding: 16,
              flexDirection: "row",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}>
            <CircleX size={26} color={"red"} />
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                ¡Tu pedido ha sido cancelado!
              </Text>
              <Text style={{ fontSize: 14, paddingRight: 40 }}>
                Tu pedido ha sido cancelado por falta de stock.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default notificacion;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "100%",
    minHeight: 100,
    borderRadius: 12,
    flexWrap: "wrap",
  },
});
