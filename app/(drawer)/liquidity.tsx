import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

// Components
import CurrentInvestmentsCard from "@/components/liquidity/CurrentInvestmentsCard";
import FloatingActionButton from "@/components/liquidity/FloatingActionButton";
import HistoryItem from "@/components/liquidity/HistoryItem";
import LifetimeOverviewCard from "@/components/liquidity/LifetimeOverviewCard";
import PoolCard from "@/components/liquidity/PoolCard";
import TabSelector from "@/components/liquidity/TabSelector";
import { colors } from "@/constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Liquidity() {
  const [activeTab, setActiveTab] = useState("pools");
  const insets = useSafeAreaInsets();

  const userStats = {
    currentInvestments: {
      balance: "$12,450.80",
      unclaimed: "$234.50",
      monthlyYield: "$156.20",
    },
    lifetimeOverview: {
      deposits: "$25,000.00",
      earnings: "$3,245.60",
      avgApy: "18.5%",
    },
  };

  const pools = [
    {
      id: 1,
      name: "Polygon Pool",
      invested: "$5,200.00",
      earned: "$234.50",
      apy: "18%",
      status: "active",
    },
    {
      id: 2,
      name: "Base Pool",
      invested: "$3,800.00",
      earned: "$156.20",
      apy: "18%",
      status: "active",
    },
    {
      id: 3,
      name: "Solana Pool",
      invested: "$3,450.80",
      earned: "$89.30",
      apy: "18%",
      status: "active",
    },
  ];

  const history = [
    {
      id: 1,
      type: "deposit" as const,
      pool: "Polygon Pool",
      amount: "$1,000.00",
      date: "2024-01-15",
      status: "completed",
    },
    {
      id: 2,
      type: "withdrawal" as const,
      pool: "Base Pool",
      amount: "$500.00",
      date: "2024-01-10",
      status: "completed",
    },
    {
      id: 3,
      type: "earnings" as const,
      pool: "Solana Pool",
      amount: "$45.20",
      date: "2024-01-08",
      status: "completed",
    },
  ];

  const handleManagePool = (poolId: number) => {
    console.log("Manage pool:", poolId);
    // Implementar navegação para detalhes do pool
  };

  const handleAddInvestment = () => {
    console.log("Add new investment");
    // Implementar navegação para adicionar investimento
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Liquidity</Text>
        </View>

        <CurrentInvestmentsCard
          balance={userStats.currentInvestments.balance}
          unclaimed={userStats.currentInvestments.unclaimed}
          monthlyYield={userStats.currentInvestments.monthlyYield}
        />

        <LifetimeOverviewCard
          deposits={userStats.lifetimeOverview.deposits}
          earnings={userStats.lifetimeOverview.earnings}
          avgApy={userStats.lifetimeOverview.avgApy}
        />

        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "pools" ? (
          <View style={styles.poolsContainer}>
            {pools.map((pool) => (
              <PoolCard
                key={pool.id}
                pool={pool}
                onManagePool={handleManagePool}
              />
            ))}
          </View>
        ) : (
          <View style={styles.historyContainer}>
            {history.map((item) => (
              <HistoryItem key={item.id} {...item} />
            ))}
          </View>
        )}
      </ScrollView>

      <FloatingActionButton onPress={handleAddInvestment} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontFamily: "Figtree_600SemiBold",
    fontWeight: "600",
  },
  settingsButton: {
    padding: 8,
  },
  poolsContainer: {
    paddingHorizontal: 20,
  },
  historyContainer: {
    paddingHorizontal: 20,
  },
});
