import { useEffect } from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

export default function SplashScreen() {
    const router = useRouter();

    // Automatically navigate to onboarding after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            router.replace("/auth/onboarding");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            {/* Clickable Main Logo (optional manual navigation) */}
            <Link href="/auth/onboarding" asChild>
                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.mainLogo}
                        resizeMode="contain"
                    />
                </Pressable>
            </Link>

            {/* Decorative faded logo at the bottom */}
            <Image
                source={require("../assets/images/side-logo.png")}
                style={styles.blurLogo}
                resizeMode="contain"
                blurRadius={4}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF", // clean white background
    },

    mainLogo: {
        width: 200,
        height: 200,
    },

    blurLogo: {
        position: "absolute",
        bottom: -40,
        left: -16,
        width: 230,
        height: 230,
        opacity: 0.2,
        transform: [{ rotate: "0deg" }],
    },
});
