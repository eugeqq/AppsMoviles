import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import NuevoProductoModal from '../../components/NuevoProductoModal';
import Product from '../../components/Product';
import SearchBar from '../../components/SearchBar';
import { API_BASE_URL } from '../../constants/config';

export default function Galeria() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error al cargar productos:', err));
  }, []);

  const handleCreate = (nuevo) => {
    setProducts(prev => [...prev, nuevo]);
  };

  const filteredProducts = products.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={setSearch} placeholder="Buscar producto..." />
      <Button title="Nuevo producto" onPress={() => setModalVisible(true)} />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Product label={item.label} price={item.price} image={item.image} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <NuevoProductoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onCreate={handleCreate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50 },
});
