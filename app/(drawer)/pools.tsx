import PoolCard from "@/components/pools/PoolsCard";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function Pools() {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("TVL");

  const filters = ["TVL", "APY", "A-Z", "Date Added"];

  const pools = [
    {
      id: 1,
      name: "Polygon Pool",
      logo: "https://cryptomarketing.center/wp-content/uploads/2024/03/Solana-logo.png",
      tvl: "$543.2K",
      apy: "18%",
      users: "1024",
      liquidity: "Bi-Monthly",
      incentives: "None",
      minInvestment: "$1",
      token: "USDT",
      bgColor: "#6366F1",
    },
    {
      id: 2,
      name: "Base Pool",
      logo: "https://cryptomarketing.center/wp-content/uploads/2024/03/Solana-logo.png",
      tvl: "$205K",
      apy: "18%",
      users: "856",
      liquidity: "Bi-Monthly",
      incentives: "None",
      minInvestment: "$1",
      token: "USDC",
      bgColor: "#3B82F6",
    },
    {
      id: 3,
      name: "Solana Pool",
      logo: "https://cryptomarketing.center/wp-content/uploads/2024/03/Solana-logo.png",
      tvl: "$302.3M",
      apy: "18%",
      users: "2048",
      liquidity: "Bi-Monthly",
      incentives: "None",
      minInvestment: "$1",
      token: "USDT",
      bgColor: "#0047AB",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Pools</Text>
        <TouchableOpacity style={styles.connectButton}>
          <Text style={styles.connectButtonText}>Connect Wallet</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#959595"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search pools by name"
          placeholderTextColor="#959595"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <Text style={styles.filtersLabel}>Order by</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filtersScroll}
        >
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              style={[
                styles.filterButton,
                activeFilter === filter && styles.filterButtonActive,
              ]}
              onPress={() => setActiveFilter(filter)}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  activeFilter === filter && styles.filterButtonTextActive,
                ]}
              >
                {filter}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Pools Carousel */}
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContent}
          snapToInterval={width}
          decelerationRate="fast"
          pagingEnabled={true}
        >
          {pools.map((pool) => (
            <View key={pool.id} style={styles.cardWrapper}>
              <PoolCard />
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Chat Button */}
      <TouchableOpacity style={styles.chatButton}>
        <Ionicons name="chatbubble" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
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
    color: "#FFFFFF",
    fontSize: 28,
    fontFamily: "Figtree_600SemiBold",
    fontWeight: "600",
  },
  connectButton: {
    backgroundColor: "#4DD698",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  connectButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#202020",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  filtersLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "500",
  },
  filtersScroll: {
    flexDirection: "row",
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#959595",
    marginRight: 12,
  },
  filterButtonActive: {
    backgroundColor: "#4DD698",
    borderColor: "#4DD698",
  },
  filterButtonText: {
    color: "#959595",
    fontSize: 14,
    fontWeight: "500",
  },
  filterButtonTextActive: {
    color: "#FFFFFF",
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
  },
  carouselContent: {
    alignItems: "center",
  },
  cardWrapper: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  chatButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#202020",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
