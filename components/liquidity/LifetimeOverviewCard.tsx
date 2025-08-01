import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

interface LifetimeOverviewProps {
  deposits: string;
  earnings: string;
  avgApy: string;
}

export default function LifetimeOverviewCard({ deposits, earnings, avgApy }: LifetimeOverviewProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Lifetime Overview</Text>
              <View style={styles.lifetimeStats}>
          <View style={styles.lifetimeItem}>
            <Ionicons name="trending-up" size={20} color={colors.primary} />
            <View style={styles.lifetimeText}>
              <Text style={styles.lifetimeLabel}>Total Deposits</Text>
              <Text style={styles.lifetimeValue}>{deposits}</Text>
            </View>
          </View>
          <View style={styles.lifetimeItem}>
            <Ionicons name="wallet" size={20} color={colors.primary} />
            <View style={styles.lifetimeText}>
              <Text style={styles.lifetimeLabel}>Total Earnings</Text>
              <Text style={styles.lifetimeValue}>{earnings}</Text>
            </View>
          </View>
          <View style={styles.lifetimeItem}>
            <Ionicons name="analytics" size={20} color={colors.primary} />
            <View style={styles.lifetimeText}>
              <Text style={styles.lifetimeLabel}>Avg. APY</Text>
              <Text style={styles.lifetimeValue}>{avgApy}</Text>
            </View>
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
  lifetimeStats: {
    gap: 16,
  },
  lifetimeItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  lifetimeText: {
    flex: 1,
  },
  lifetimeLabel: {
    color: colors.lightgrey,
    fontSize: 14,
  },
  lifetimeValue: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
}); 