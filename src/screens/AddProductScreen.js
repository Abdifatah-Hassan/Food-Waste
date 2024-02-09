// AddProductScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddProductScreen = ({ route, navigation }) => {
  const { setProducts } = route.params;
  const [name, setName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleAddProduct = () => {
    // 
    const newProduct = { id: Date.now().toString(), name, expiryDate };
    setProducts(prevProducts => [...prevProducts, newProduct]);
    navigation.goBack();
  };

  return (
    <View>
      <TextInput placeholder="Product Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Expiry Date" value={expiryDate} onChangeText={setExpiryDate} />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};
