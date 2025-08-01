import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

interface CurrentInvestmentsProps {
  balance: string;
  unclaimed: string;
  monthlyYield: string;
}

export default function CurrentInvestmentsCard({ balance, unclaimed, monthlyYield }: CurrentInvestmentsProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Current Investments</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Balance</Text>
          <Text style={styles.statValue}>{balance}</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Unclaimed</Text>
          <Text style={[styles.statValue, styles.unclaimedValue]}>
            {unclaimed}
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Monthly Yield</Text>
          <Text style={[styles.statValue, styles.yieldValue]}>
            {monthlyYield}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.grey,
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    padding: 20,
  },
  cardTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statLabel: {
    color: colors.lightgrey,
    fontSize: 12,
    marginBottom: 4,
  },
  statValue: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  unclaimedValue: {
    color: colors.yellow,
  },
  yieldValue: {
    color: colors.primary,
  },
}); 