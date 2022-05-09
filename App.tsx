import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import Widget from "./src/components/Widget";
import { theme } from "./src/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Widget />
    </View>
  );
}
