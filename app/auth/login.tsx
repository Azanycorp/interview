import { useRouter } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In to Your Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={() => router.push("/profile")}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/auth/forgot-password")}>
                <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: "center" },
    title: { fontSize: 22, marginBottom: 20 },
    input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 10 },
    button: { backgroundColor: "#004225", padding: 12, borderRadius: 8 },
    buttonText: { color: "#fff", textAlign: "center" },
    link: { textAlign: "center", marginTop: 10, color: "#004225" },
});
