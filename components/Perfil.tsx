import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from '../app/constants/theme';

export default function Perfil() {
  const [nombre, setNombre] = useState("Eugenia");
  const [modalVisible, setModalVisible] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState("");

  const guardarNombre = () => {
    if (nuevoNombre.trim() !== "") {
      setNombre(nuevoNombre);
    }
    setModalVisible(false);
    setNuevoNombre("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.nombre}> Hola: {nombre}!</Text>

      <TouchableOpacity
        style={styles.boton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.botonTexto}>Cambiar nombre</Text>
      </TouchableOpacity>

      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalFondo}>
          <View style={styles.modalContenido}>
            <Text style={styles.titulo}>Cambiar nombre</Text>

            <TextInput
              style={styles.input}
              placeholder="Ingrese nuevo nombre"
              placeholderTextColor={theme.colors.border}
              value={nuevoNombre}
              onChangeText={setNuevoNombre}
            />

            <TouchableOpacity style={styles.boton} onPress={guardarNombre}>
              <Text style={styles.botonTexto}>Guardar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  nombre: {
    fontSize: 22,
    marginBottom: 20,
    color: theme.colors.text,
    fontWeight: "600",
  },
  boton: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  botonTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  modalFondo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
  modalContenido: {
    width: "80%",
    padding: 20,
    backgroundColor: theme.colors.background,
    borderRadius: 12,
    elevation: 6,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "600",
    color: theme.colors.text,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 10,
    borderRadius: 6,
    marginBottom: 16,
    color: theme.colors.text,
  },
});
