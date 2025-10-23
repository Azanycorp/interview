import Swiper from "react-native-swiper";
import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function Onboarding() {
    const router = useRouter();

    return (
        <Swiper loop={false} showsPagination={true} activeDotColor="#004225">
            {/* --- Slide 1 --- */}
            <ImageBackground
                source={require("../../assets/images/onboarding1.png.jpg")}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.overlay} />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Borderless shopping now in your pocket
                    </Text>

                    {/* Solid main button */}
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => router.push("/auth/signup")}
                    >
                        <Text style={styles.primaryButtonText}>Continue</Text>
                    </TouchableOpacity>

                    {/* Transparent outlined secondary button */}
                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => router.push("/auth/login")}
                    >
                        <Text style={styles.secondaryButtonText}>Log in</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

            {/* --- Slide 2 --- */}
            <ImageBackground
                source={require("../../assets/images/onboarding2.png.jpg")}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.overlay} />
                <View style={styles.content}>
                    <Text style={styles.title}>
                        Shop whatever, whenever you want it
                    </Text>

                    {/* Solid main button */}
                    <TouchableOpacity
                        style={styles.primaryButton}
                        onPress={() => router.push("/auth/login")}
                    >
                        <Text style={styles.primaryButtonText}>Start Shopping</Text>
                    </TouchableOpacity>

                    {/* Transparent outlined secondary button */}
                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => router.push("/auth/signup")}
                    >
                        <Text style={styles.secondaryButtonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0, 0, 0, 0.35)", // dark overlay for readability
    },
    content: {
        width: "85%",
        alignItems: "center",
        marginBottom: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        color: "#FFFFFF",
        textAlign: "center",
        marginBottom: 30,
        lineHeight: 32,
    },

    /** --- Primary Solid Button --- **/
    primaryButton: {
        backgroundColor: "#004225", // Azany brand green
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginBottom: 15,
    },
    primaryButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },

    /** --- Secondary Transparent Button --- **/
    secondaryButton: {
        borderWidth: 1,
        borderColor: "#FFFFFF",
        backgroundColor: "transparent",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    secondaryButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
    },
});
