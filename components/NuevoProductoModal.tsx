import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';
import { API_BASE_URL } from '../constants/config';

type NuevoProductoModalProps = {
  visible: boolean;
  onClose: () => void;
  onCreate: (product: any) => void;
};

export default function NuevoProductoModal({ visible, onClose, onCreate }: NuevoProductoModalProps) {
  const [form, setForm] = useState({ label: '', price: '', image: '' });

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${API_BASE_URL}/products`, {
        label: form.label,
        price: parseFloat(form.price),
        image: form.image,
      });
      onCreate(res.data);
      setForm({ label: '', price: '', image: '' });
      onClose();
    } catch (err) {
      console.error('Error al crear producto:', err);
    }
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modal}>
        <TextInput
          placeholder="Nombre"
          value={form.label}
          onChangeText={(text) => setForm({ ...form, label: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Precio"
          value={form.price}
          onChangeText={(text) => setForm({ ...form, price: text })}
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="URL de imagen"
          value={form.image}
          onChangeText={(text) => setForm({ ...form, image: text })}
          style={styles.input}
        />
        <Button title="Guardar" onPress={handleSubmit} />
        <Button title="Cancelar" onPress={onClose} color="gray" />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderBottomWidth: 1, marginBottom: 15, fontSize: 16 },
});
