import { View, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
    return (
        <View style={styles.container}>

            <Link href="/profile" asChild>
                <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
                    <Image
                        source={require("../assets/images/logo.png")}
                        style={styles.mainLogo}
                        resizeMode="contain"
                    />
                </Pressable>
            </Link>


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
        backgroundColor: "#ffffff",
    },


    mainLogo: {
        width: 200,
        height: 200,
    },


    blurLogo: {
        position: "absolute",
        top: 687,
        left: -16,
        width: 230,
        height: 234,
        opacity: 0.20,
        transform: [{ rotate: "0deg" }],
    },



});
