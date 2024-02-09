// HomeScreen.js
import React from 'react';
import React, { useState } from 'react';

import { View, Text, Button, FlatList } from 'react-native';




const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = React.useState([]);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.name} - Expires on: {item.expiryDate}</Text>}
      />
      <Button
        title="Add Product"
        onPress={() => navigation.navigate('AddProduct', { setProducts })}
      />
    </View>
  );
};
