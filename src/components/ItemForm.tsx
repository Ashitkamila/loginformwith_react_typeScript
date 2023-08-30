import React, { useState } from 'react';

interface ItemFormProps {
  onSave: (name: string) => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onSave }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter item name"
      />
      <button className='addBtn' type="submit">Add Item</button>
    </form>
  );
};

export default ItemForm;
