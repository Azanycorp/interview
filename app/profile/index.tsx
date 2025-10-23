import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function Profile() {
    const router = useRouter();

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Welcome to Azany!</Text>
            <Button title="Go to Settings" onPress={() => router.push("/profile/settings")} />
        </View>
    );
}