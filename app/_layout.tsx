import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SessionProvider, useSession } from "@/ctx";
import { SWRConfig } from "swr";
import ToastManager from "toastify-react-native";
import Header from "@/components/template/Header";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [notificationCount, setNotificationCount] = useState(0);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const { signOut, session } = useSession();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SessionProvider>
      <SWRConfig>
        <ToastManager />
        <Stack>
          <Stack.Screen
            name="(app)"
            options={{
              headerShown: true,
              title: "Inicio",

              header: () => <Header />,
            }}
          />
          <Stack.Screen name="sign-in" options={{ headerShown: false }} />
          <Stack.Screen
            name="sign-in-form"
            options={{
              headerShown: true,
              title: "Iniciar Sesión",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="sign-up"
            options={{
              headerShown: true,
              title: "Registrarse",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </SWRConfig>
    </SessionProvider>
  );
}
