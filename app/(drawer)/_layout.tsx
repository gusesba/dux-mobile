import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function DrawerLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        drawerActiveTintColor: "#4DD698",
        drawerInactiveTintColor: "#FFFFFF",
        drawerStyle: {
          backgroundColor: "#0A0A0A",
          paddingTop: insets.top,
        },
        drawerLabelStyle: {
          fontFamily: "Figtree_600SemiBold",
          fontSize: 14,
        },
        headerStyle: {
          backgroundColor: "#0A0A0A",
        },
        headerTintColor: "#FFFFFF",
      }}
    >
      <Drawer.Screen
        name="pools"
        options={{
          title: "Pools",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="water-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="liquidity"
        options={{
          title: "Liquidity",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="logo-usd" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="referrals"
        options={{
          title: "Referrals",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
