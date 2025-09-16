import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardButton from '../../components/CardButton';
import { theme } from '../constants/theme';

const CARDS = ['Tarjeta 1', 'Tarjeta 2', 'Tarjeta 3'];

export default function Index() { 

  return (
    <View style={styles.container}> 
    <CardButton
          label={"Tarjeta 1"}
          style={{ marginBottom: theme.spacing.md}}
        />
      <CardButton
          label={'Tarjeta 2'}
          style={{ marginBottom: theme.spacing.md }}
        />
        <CardButton
          label={'Tarjeta 3'}
          style={{ marginBottom:0}}
        />
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
