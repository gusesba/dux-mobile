import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Referrals() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Referrals Page</Text>
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
