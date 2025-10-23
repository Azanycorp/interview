import { Stack } from "expo-router";

export default function ProfileLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#fef3c7" },
                headerTintColor: "#92400e",
                headerTitleAlign: "center",
            }}
        />
    );
}
