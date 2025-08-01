import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";

interface Pool {
  id: number;
  name: string;
  invested: string;
  earned: string;
  apy: string;
  status: string;
}

interface PoolCardProps {
  pool: Pool;
  onManagePool: (poolId: number) => void;
}

export default function PoolCard({ pool, onManagePool }: PoolCardProps) {
  return (
    <View style={styles.poolCard}>
      <View style={styles.poolHeader}>
        <View style={styles.poolInfo}>
          <View style={styles.poolLogo}>
            <Ionicons name="logo-bitcoin" size={24} color={colors.white} />
          </View>
          <View>
            <Text style={styles.poolName}>{pool.name}</Text>
            <Text style={styles.poolStatus}>{pool.status}</Text>
          </View>
        </View>
        <View style={styles.poolApy}>
          <Text style={styles.apyLabel}>APY</Text>
          <Text style={styles.apyValue}>{pool.apy}</Text>
        </View>
      </View>
      <View style={styles.poolStats}>
        <View style={styles.poolStat}>
          <Text style={styles.poolStatLabel}>Invested</Text>
          <Text style={styles.poolStatValue}>{pool.invested}</Text>
        </View>
        <View style={styles.poolStat}>
          <Text style={styles.poolStatLabel}>Earned</Text>
          <Text style={[styles.poolStatValue, styles.earnedValue]}>{pool.earned}</Text>
        </View>
      </View>
              <TouchableOpacity 
          style={styles.poolAction}
          onPress={() => onManagePool(pool.id)}
        >
          <Text style={styles.poolActionText}>Manage Pool</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.primary} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  poolCard: {
    backgroundColor: colors.grey,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  poolHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  poolInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  poolLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  poolName: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  poolStatus: {
    color: colors.primary,
    fontSize: 12,
  },
  poolApy: {
    alignItems: "flex-end",
  },
  apyLabel: {
    color: colors.lightgrey,
    fontSize: 12,
  },
  apyValue: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "600",
  },
  poolStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  poolStat: {
    alignItems: "center",
  },
  poolStatLabel: {
    color: colors.lightgrey,
    fontSize: 12,
    marginBottom: 4,
  },
  poolStatValue: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
  earnedValue: {
    color: colors.primary,
  },
  poolAction: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.darkGrey,
  },
  poolActionText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: "500",
  },
}); 