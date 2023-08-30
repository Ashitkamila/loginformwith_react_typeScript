import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "../src/styles.css";
import Form from './components/Form';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

interface ItemData {
  id: number;
  name: string;
}

function App() {
  const [items, setItems] = useState<ItemData[]>([]);
  const [editingItem, setEditingItem] = useState<ItemData | null>(null);

  const handleAddItem = (name: string) => {
    const newItem: ItemData = {
      id: Date.now(),
      name,
    };
    setItems([...items, newItem]);
  };

  const handleEditItem = (item: ItemData) => {
    setEditingItem(item);
  };

  const handleUpdateItem = (id: number, newName: string) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, name: newName } : item
    );
    setItems(updatedItems);
    setEditingItem(null);
  };

  const handleDeleteItem = (id: number) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };
 
  return (
    <>
  <Form/>
  <hr/>
  <h2>CRUD App!</h2>
  <div className='crudApp'>
      <ItemForm onSave={handleAddItem} />
      <ItemList
        items={items}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
      />
      {editingItem && (
        <ItemForm
          onSave={newName => handleUpdateItem(editingItem.id, newName)}
        />
      )}
  </div>
    </>
  );
}

export default App;
