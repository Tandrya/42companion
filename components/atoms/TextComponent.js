// React Elements
import { useFonts } from "expo-font";
import { StyleSheet, Text } from "react-native";

// Fonts
import { Raleway_500Medium } from "@expo-google-fonts/raleway";

const TextComponent = ({ string, style }) => {
    const [fontsLoaded] = useFonts({
        Raleway_500Medium,
    });
    if (!fontsLoaded) {
        return <Text>...</Text>;
    }

    return (
        <Text style={[styles.container, style]}>{string}</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        fontFamily: "Raleway_500Medium",
        color: "white"
    },
});

export default TextComponent;