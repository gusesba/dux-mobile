import { Feather, Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Referrals() {
  const [selectedTab, setSelectedTab] = useState("Overview");

  return (
      <ScrollView style={styles.container} contentContainerStyle={{ padding: 16 }}>
        <View style={styles.tabs}>
          {["Overview", "Activity", "Transactions"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                selectedTab === tab && styles.tabButtonActive,
              ]}
            onPress={() => setSelectedTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Performance Overview</Text>
          <Text style={styles.sectionDescription}>
            Your referral activity across all pools and timeframes
          </Text>
          <View style={styles.metrics}>
            <View style={styles.metricBox}>
              <Text style={styles.metricValue}>30</Text>
              <Text style={styles.metricLabel}>Total Transactions</Text>
            </View>
            <View style={styles.metricBox}>
              <Text style={styles.metricValue}>$5,142</Text>
              <Text style={styles.metricLabel}>Total referred volume</Text>
            </View>
          </View>

           <View style={styles.divider} />

          <View style={styles.metrics}>
            <View style={styles.metricBox}>
              <Text style={styles.metricValue}>7</Text>
              <Text style={styles.metricLabel}>Unique users referred</Text>
            </View>
            <View style={styles.metricBox}>
              <Text style={styles.metricValue}>$171.4</Text>
              <Text style={styles.metricLabel}>Avg. Transaction Size</Text>
            </View>
          </View>

           <View style={styles.divider} />

          <View style={styles.networkSection}>
            <Ionicons name="people-outline" size={32} color="#FFFFFF" />
            <Text style={styles.networkTitle}>Growing Your Network</Text>
            <Text style={styles.sectionDescription}>
              Share your referral code with friends and family to help them
              discover the platform
            </Text>
          </View>
        </View>

         {/* Start Sharing Today */}
      <View style={styles.shareCard}>
        <Text style={styles.sectionTitle}>Start Sharing Today!</Text>
        <Text style={styles.sectionDescription}>
          Share your referral code with friends and help them discover the
          platform
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.shareButton}
            onPress={() => Alert.alert("Share", "Sharing code...")}
          >
            <Feather name="share-2" size={16} color="#0A0A0A" />
            <Text style={styles.shareButtonText}>Share Code</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.copyButton}
            onPress={() => Alert.alert("Copied", "Link copied to clipboard")}
          >
            <Feather name="copy" size={16} color="#FFFFFF" />
            <Text style={styles.copyButtonText}>Copy Link</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
  tabs: {
    flexDirection: "row",
    backgroundColor: "#1A1A1A",
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "#4DD698",
  },
  tabText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  tabTextActive: {
    color: "#0A0A0A",
  },
  card: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  sectionDescription: {
    color: "#B0B0B0",
    fontSize: 13,
    marginBottom: 12,
  },
  metrics: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  metricBox: {
    alignItems: "center",
    flex: 1,
  },
  metricValue: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  metricLabel: {
    color: "#B0B0B0",
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 12,
  },
  networkSection: {
    alignItems: "center",
  },
  networkTitle: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 8,
    marginBottom: 4,
  },
  shareCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: 12,
    padding: 16,
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
  },
  shareButton: {
    flexDirection: "row",
    backgroundColor: "#4DD698",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  copyButton: {
    flexDirection: "row",
    backgroundColor: "#252525",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  shareButtonText: {
    color: "#0A0A0A",
    fontWeight: "600",
  },
  copyButtonText: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});
