import React from "react";
import { Item } from './types';
import './ItemDetail.css';

interface ItemDetailProps {
    item: Item;
    onClose: () => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ item, onClose }) => {
    return (
        <div>
            <h3>{item.productId}</h3>
            <p>
                Size: {item.size} | Purchase Price: {item.purchasePrice} | Discount: {item.discount}
            </p>
            <p>
                Purchase Date: {item.purchaseDate} | Purchase Card: {item.purchaseCard}
            </p>
            <p>
                Sale Date: {item.saleDate?.toString() || 'Not sold'} | Place of Sale: {item.placeOfSale || 'Not sold'} | Sale Price: {item.salePrice || 'Not sold'}
            </p>
            <p>
                Shipping Cost: {item.shippingCost} | Settlement Date: {item.settlementDate?.toString() || 'Not settled'}
            </p>
            <p>Revenue : {item.revenue}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ItemDetail;