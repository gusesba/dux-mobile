import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";

interface HistoryItemProps {
  id: number;
  type: "deposit" | "withdrawal" | "earnings";
  pool: string;
  amount: string;
  date: string;
  status: string;
}

export default function HistoryItem({ type, pool, amount, date, status }: HistoryItemProps) {
  const getIconName = () => {
    switch (type) {
      case "deposit":
        return "arrow-down";
      case "withdrawal":
        return "arrow-up";
      case "earnings":
        return "gift";
      default:
        return "help";
    }
  };

  const getIconColor = () => {
    switch (type) {
      case "deposit":
        return colors.primary;
      case "withdrawal":
        return colors.red;
      case "earnings":
        return colors.yellow;
      default:
        return colors.lightgrey;
    }
  };

  const getAmountColor = () => {
    switch (type) {
      case "deposit":
        return styles.depositAmount;
      case "withdrawal":
        return styles.withdrawalAmount;
      case "earnings":
        return styles.earningsAmount;
      default:
        return {};
    }
  };

  const getAmountPrefix = () => {
    switch (type) {
      case "deposit":
        return "+";
      case "withdrawal":
        return "-";
      case "earnings":
        return "+";
      default:
        return "";
    }
  };

  const getTitle = () => {
    switch (type) {
      case "deposit":
        return "Deposit";
      case "withdrawal":
        return "Withdrawal";
      case "earnings":
        return "Earnings";
      default:
        return "Transaction";
    }
  };

  return (
    <View style={styles.historyItem}>
      <View style={styles.historyIcon}>
        <Ionicons name={getIconName() as any} size={20} color={getIconColor()} />
      </View>
      <View style={styles.historyContent}>
        <Text style={styles.historyTitle}>{getTitle()}</Text>
        <Text style={styles.historyPool}>{pool}</Text>
        <Text style={styles.historyDate}>{date}</Text>
      </View>
      <View style={styles.historyAmount}>
        <Text style={[styles.historyAmountText, getAmountColor()]}>
          {getAmountPrefix()}{amount}
        </Text>
        <Text style={styles.historyStatus}>{status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  historyIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.darkGrey,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  historyContent: {
    flex: 1,
  },
  historyTitle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
  historyPool: {
    color: colors.lightgrey,
    fontSize: 12,
  },
  historyDate: {
    color: colors.lightgrey,
    fontSize: 10,
    marginTop: 2,
  },
  historyAmount: {
    alignItems: "flex-end",
  },
  historyAmountText: {
    fontSize: 14,
    fontWeight: "600",
  },
  depositAmount: {
    color: colors.primary,
  },
  withdrawalAmount: {
    color: colors.red,
  },
  earningsAmount: {
    color: colors.yellow,
  },
  historyStatus: {
    color: colors.primary,
    fontSize: 10,
    marginTop: 2,
  },
}); 