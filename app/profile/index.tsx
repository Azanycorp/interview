import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ProfileHome() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Page</Text>
            <Link href="/profile/settings" style={styles.link}>
                Go to Settings
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    link: { color: "#2563eb", fontSize: 18, textDecorationLine: "none" },
});
