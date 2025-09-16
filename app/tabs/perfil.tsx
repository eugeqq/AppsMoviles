import React, { useState } from 'react';
import Perfil from '../../components/Perfil';

export default function Index() { 
     const [number, onChangeNumber] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <Perfil>
    </Perfil>
  );
};