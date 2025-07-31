// app/_layout.tsx (caso use para carregar fontes globalmente)
import { Figtree_600SemiBold, useFonts } from "@expo-google-fonts/figtree";
import { Slot } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({ Figtree_600SemiBold });

  if (!loaded) return null;

  return <Slot />;
}
