import React from 'react';

interface ItemData {
  id: number;
  name: string;
}

interface ItemProps {
  item: ItemData;
  onDelete: (id: number) => void;
  onEdit: (item: ItemData) => void;
}

const Item: React.FC<ItemProps> = ({ item, onDelete, onEdit }) => {
  return (
    <li>
      {item.name}
      <button className='editBtn' onClick={() => onEdit(item)}>Edit</button>
      <button className='deleteBtn' onClick={() => onDelete(item.id)}>Delete</button>
    </li>
  );
};

export default Item;
