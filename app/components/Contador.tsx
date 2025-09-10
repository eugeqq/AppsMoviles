import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { theme } from '../constants/theme';
type Props = {};

const Contador = (props: Props) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador((prev) => prev + 1);
  const decrementar = () => setContador((prev) => prev - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>
      <Text style={styles.valor}>{contador}</Text>

      <View style={styles.botonesFila}>
        <TouchableOpacity style={[styles.boton, styles.botonIncrementar]} onPress={incrementar}>
          <Text style={styles.textoBoton}>+ Incrementar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.boton, styles.botonDecrementar]} onPress={decrementar}>
          <Text style={styles.textoBoton}>- Decrementar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contador;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "600",
    color: theme.colors.text,
    marginBottom: 10,
  },
  valor: {
    fontSize: 36,
    fontWeight: "bold",
    color: theme.colors.primary,
    marginBottom: 20,
  },
  botonesFila: {
    flexDirection: "row",
    gap: 12,
  },
  boton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  botonIncrementar: {
    backgroundColor: theme.colors.primary,
  },
  botonDecrementar: {
    backgroundColor: theme.colors.primary,
  },
  textoBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});
