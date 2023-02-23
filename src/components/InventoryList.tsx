import React from "react";
import { Item, InventoryStatus } from './types';
import './InventoryList.css';

interface InventoryListProps {
    items: Item[];
    onItemClick: (item: Item) => void;
    onDelete: (item: Item) => void;
    onModify: (item: Item) => void;
}

const InventoryList: React.FC<InventoryListProps> = ({ items, onItemClick, onDelete, onModify }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id} onClick={() => onItemClick(item)}>
                    <span>{item.purchaseDate}</span>
                    <span>{item.productId}</span>
                    <span>
                        <img src={item.image} alt={`Image of ${item.productId}`} width="50" height="50"/>
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default InventoryList;