import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4DD698",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: "#0A0A0A",
          borderTopWidth: 0,
          height: 60 + insets.bottom, // altura base + safe area
          paddingBottom: insets.bottom, // isso move a barra acima da navegação nativa
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontFamily: "Figtree_600SemiBold",
        },
      }}
    >
      <Tabs.Screen
        name="pools"
        options={{
          title: "Pools",
          tabBarIcon: ({ color }) => (
            <Ionicons name="water-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="liquidity"
        options={{
          title: "Liquidity",
          tabBarIcon: ({ color }) => (
            <Ionicons name="logo-usd" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="referrals"
        options={{
          title: "Referrals",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
