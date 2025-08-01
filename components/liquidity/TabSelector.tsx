import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../constants/colors";

interface TabSelectorProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabSelector({ activeTab, onTabChange }: TabSelectorProps) {
  return (
    <View style={styles.tabsContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === "pools" && styles.activeTab]}
        onPress={() => onTabChange("pools")}
      >
        <Text style={[styles.tabText, activeTab === "pools" && styles.activeTabText]}>
          Investment Pools
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === "history" && styles.activeTab]}
        onPress={() => onTabChange("history")}
      >
        <Text style={[styles.tabText, activeTab === "history" && styles.activeTabText]}>
          History
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: colors.grey,
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    color: colors.lightgrey,
    fontSize: 14,
    fontWeight: "500",
  },
  activeTabText: {
    color: colors.white,
  },
}); 