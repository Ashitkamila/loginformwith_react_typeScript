import React from 'react';
import Item from './Item';

interface ItemData {
  id: number;
  name: string;
}

interface ItemListProps {
  items: ItemData[];
  onDelete: (id: number) => void;
  onEdit: (item: ItemData) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onDelete, onEdit }) => {
  return (
    <ul>
      {items.map(item => (
        <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};

export default ItemList;
