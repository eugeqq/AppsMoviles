import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    /* Como el punto de entrada es el archivo layout,
    ahora definimos como pantalla inicial el index
    */
    <Stack>
      <Stack.Screen name="index" />
  
    </Stack>
  );
}
