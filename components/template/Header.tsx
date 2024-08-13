import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Bell, Search, Settings2 } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { router } from "expo-router";

const Header = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.safeAreaContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={require("@/assets/images/avatar.png")}
              style={{ width: 40, height: 40, borderRadius: 50 }}
              contentFit="cover"
              transition={1000}
            />
            <View>
              <Text style={styles.name}>Hola , Albert</Text>
              <Text style={styles.NameMessage}>Feliz dia del padre !</Text>
            </View>
          </View>
          <Pressable onPress={() => router.push("/notificacion")}>
            <View style={styles.NotificationIconContainer}>
              <View style={styles.notificationPoint}></View>
              <Bell size={24} color={"#000"} />
            </View>
          </Pressable>
        </View>
        <View style={[styles.safeAreaContainer, { paddingTop: 0 }]}>
          <View style={[styles.borderStyle]}>
            <Search size={24} color={"#000"} />
            <TextInput
              style={styles.input}
              placeholder="¿Que te apetece hoy?"
            />
          </View>
          <View
            style={[
              styles.NotificationIconContainer,
              { borderRadius: 10, height: 45, width: 45 },
            ]}>
            <Settings2 size={24} color={"#000"} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 185,
    backgroundColor: "#FF814B",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  safeAreaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  profileContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  NotificationIconContainer: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  notificationPoint: {
    position: "absolute",
    top: 6,
    right: 8,
    width: 9,
    height: 10,
    zIndex: 1,
    borderRadius: 50,
    backgroundColor: "#F86A2E",
  },
  name: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#fff",
  },
  NameMessage: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "thin",
  },
  borderStyle: {
    borderStyle: "solid",
    borderRadius: 12,
    gap: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: "85%",
  },

  input: {
    height: 45,
    flex: 1,
  },
});
