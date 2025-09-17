
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Product from '../../components/Product';
import SearchBar from '../../components/SearchBar';

const PRODUCTS = [
  { id: '1', label: 'Camiseta', price: 2500, image: 'https://i.pinimg.com/736x/40/32/07/403207e5e98210acaf749b7aeaad705a.jpg' },
    { id: '2', label: 'Pantalón', price: 4500, image: 'https://i.pinimg.com/736x/34/f5/63/34f5635cc9b658fff7f62cd1411fc7b9.jpg' },
    { id: '3', label: 'Zapatillas', price: 8000, image: require('../../assets/images/zapatilla.jpg') },
];

export default function Galeria() {
  const [search, setSearch] = useState('');

  const filteredProducts = PRODUCTS.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={setSearch} placeholder="Buscar producto..." />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product label={item.label} price={item.price} image={item.image} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 50 },
});
