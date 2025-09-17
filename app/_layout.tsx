import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
     <Tabs>
        <Tabs.Screen name="tabs/galeria" options={{ title: "Galería" ,tabBarIcon: ({ color, size }) => (
            <Ionicons name="images" size={size} color={color} />)}} />
        <Tabs.Screen name="index" options={{ href: null, }} />
    </Tabs>
  );
}