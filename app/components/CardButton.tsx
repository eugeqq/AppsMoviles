import React, { useState } from 'react';
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { theme } from '../constants/theme';

// esta es la interfaz de propiedades que recibe el componenete
type CardButtonProps = {
  label: string;
  style?: StyleProp<ViewStyle>;
};

export default function CardButton({ label, style }: CardButtonProps) {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(prev => !prev); // alterna entre seleccionado y no seleccionado
  };

  const cardStateStyle = {
    backgroundColor: selected ? theme.colors.primary : theme.colors.card,
    borderColor: selected ? theme.colors.primary : theme.colors.border,
  };

  const textStateStyle = {
    color: selected ? theme.colors.onPrimary : theme.colors.text,
  };

  return (
    <Pressable onPress={handlePress} style={[styles.card, cardStateStyle, style]}>
      <Text style={[styles.label, textStateStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 64,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.lg,
    justifyContent: 'center',
    borderWidth: 1,
  },
  
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
});