import { Image, StyleSheet, Text, View } from "react-native";

export default function PoolCard() {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://cryptomarketing.center/wp-content/uploads/2024/03/Solana-logo.png", // ou coloque local
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.tokenTags}>
          <Text style={styles.tag}>USDT</Text>
          <Text style={styles.tag}>USDC</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Solana</Text>
        <View style={styles.row}>
          <Text style={styles.label}>TVL</Text>
          <Text style={styles.value}>$302.3M</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>APY</Text>
          <Text style={styles.value}>18%</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Users</Text>
          <Text style={styles.value}>1024</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Liquidity</Text>
          <Text style={styles.value}>Bi-monthly</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Incentives</Text>
          <Text style={styles.value}>None</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    overflow: "hidden",
    width: 270,
    margin: 10,
  },
  header: {
    backgroundColor: "#0047AB",
    padding: 0,
    alignItems: "center",
    position: "relative",
  },
  logo: {
    width: 250,
    height: 250,
  },
  tokenTags: {
    flexDirection: "row",
    position: "absolute",
    top: 8,
    right: 8,
    gap: 4,
  },
  tag: {
    backgroundColor: "#4DD698",
    color: "#0A0A0A",
    fontWeight: "bold",
    fontSize: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 4,
  },
  body: {
    backgroundColor: "#E5E5E5",
    padding: 12,
  },
  title: {
    fontFamily: "Figtree_600SemiBold",
    fontSize: 16,
    color: "#000",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  label: {
    fontSize: 12,
    color: "#333",
  },
  value: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
  },
});
