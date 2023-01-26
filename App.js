import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [listItem, setListItem] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addListItem = () => {
    setShoppingList([...shoppingList, { text: listItem }]);
    setListItem('');
  }

  const clearShoppingList = () => {
    setShoppingList([]);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={listItem => setListItem(listItem)}
        value={listItem}
      />
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Button title='Add' onPress={addListItem} />
        <Button title='Clear' onPress={clearShoppingList} />
      </View>
      <Text style={{ color: 'blue', fontSize: 20, marginBottom: 5 }}>Shopping List</Text>
      <FlatList
        data={shoppingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <Text>{item.text}</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  }
});