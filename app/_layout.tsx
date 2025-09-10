import { Ionicons } from "@expo/vector-icons"; // Importa los íconos
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from "expo-router";


export default function RootLayout() {
  return (
   <Tabs>
     <Tabs.Screen name="perfil" options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
     <Tabs.Screen name="contador" options={{ 
          title: "Contador",
          tabBarIcon: ({ color, focused }) => (
           <Ionicons name="add" size={24} color="black" />
          ),}}/>
     <Tabs.Screen name="tarjetas" options={{ title: "Tarjetas",
      tabBarIcon: ({ color, focused }) => (
          <SimpleLineIcons name="options-vertical" size={24} color="black" />
      ),
     }}/>
     <Tabs.Screen name="components/Perfil" options={{ href: null,}}/>
     <Tabs.Screen name="components/CardButton" options={{ href: null,}}/>
     <Tabs.Screen name="components/Contador" options={{ href: null,}}/>
     <Tabs.Screen name="index" options={{ href: null,}}/>
   </Tabs>
  );
}
