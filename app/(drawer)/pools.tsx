import PoolCard from "@/components/pools/PoolsCard";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Pools() {
  return (
    <SafeAreaView style={styles.container}>
      <PoolCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    fontFamily: "Figtree_600SemiBold",
  },
});
