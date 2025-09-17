import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

type ProductProps = {
  label: string;
  price: number;
  image: string | number;
};

export default function Product({ label, price, image }: ProductProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [resizeMode, setResizeMode] = useState<'cover' | 'contain' | 'stretch'>('cover');
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={{ margin: 8 }}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image
              source={typeof image === 'string' ? { uri: image } : image}
              style={styles.modalImage}
              resizeMode={resizeMode}
            />
            <Text style={styles.modalTitle}>{label}</Text>
            <Text style={styles.modalPrice}>Precio: ${price}</Text>

            <View style={styles.buttonRow}>
              {['cover', 'contain', 'stretch'].map((mode) => (
                <Pressable
                  key={mode}
                  style={[
                    styles.modeButton,
                    resizeMode === mode && { backgroundColor: '#007bff' },
                  ]}
                  onPress={() => setResizeMode(mode as 'cover' | 'contain' | 'stretch')}
                >
                  <Text style={styles.modeButtonText}>{mode}</Text>
                </Pressable>
              ))}
            </View>

            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}
        onLongPress={() => setIsFavorite((prev) => !prev)} // <-- mantener presionado agrega a favoritos
      >
        <View style={styles.productCard}>
          <Image
            source={typeof image === 'string' ? { uri: image } : image}
            style={styles.productImage}
          />

          <View style={styles.productInfo}>
            <Text style={styles.productLabel}>{label}</Text>
            <Text style={styles.productPrice}>${price}</Text>
          </View>

          {isFavorite && (
            <Ionicons name="star" size={24} color="gold" style={styles.favoriteIcon} />
          )}
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    padding: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: { width: 60, height: 60, borderRadius: 8, marginRight: 12 },
  productInfo: { flex: 1 },
  productLabel: { fontSize: 16, fontWeight: '600', color: '#333' },
  productPrice: { fontSize: 14, color: '#666', marginTop: 4 },
  favoriteIcon: { marginLeft: 8 },

  modalContainer: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.4)' },
  modalContent: { margin: 20, backgroundColor: 'white', borderRadius: 12, padding: 20, alignItems: 'center' },
  modalImage: { width: 200, height: 200, borderRadius: 12, marginBottom: 16 },
  modalTitle: { fontSize: 20, fontWeight: '700', marginBottom: 8 },
  modalPrice: { fontSize: 18, marginBottom: 16 },

  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 16 },
  modeButton: { flex: 1, marginHorizontal: 4, paddingVertical: 10, backgroundColor: '#eee', borderRadius: 8, alignItems: 'center' },
  modeButtonText: { fontWeight: '600' },

  closeButton: { backgroundColor: '#007bff', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 20 },
  closeButtonText: { color: 'white', fontWeight: '600' },
});
