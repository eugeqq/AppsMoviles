import React from 'react';
import { StyleSheet, View } from 'react-native';
import Contador from '../../components/Contador';
import { theme } from '../constants/theme';

const CARDS = ['Tarjeta 1', 'Tarjeta 2', 'Tarjeta 3'];

export default function Index() { 

  return (
    <View style={styles.container}> 
    <Contador/>
    </View>   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
  },
});
