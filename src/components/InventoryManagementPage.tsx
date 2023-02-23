import React, { useState, useEffect } from 'react';
import { dbService } from 'fbase';
import { collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { Item } from './types';
import InventoryList from './InventoryList';
import ItemDetail from './ItemDetail';
import './InventoryManagementPage.css';

const InventoryManagementPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const [orderItems, setOrderItems] = useState<Item[]>([]);
    const [deliveryItems, setDeliveryItems] = useState<Item[]>([]);
    const [possessionItems, setPossessionItems] = useState<Item[]>([]);
    const [reservationItems, setReservationItems] = useState<Item[]>([]);
    const [salesCompletionItems, setSalesCompletionItems] = useState<Item[]>([]);

    useEffect(() => {
        const query = async () => {
            const querySnapshot = await getDocs(collection(dbService, "product"));
            querySnapshot.forEach((doc) => {
                var item = doc.data()
                console.log(item.buydate);
                var tmp: Item = {
                    id: item.pdcode,
                    purchaseDate: item.buydate,
                    productId: item.pdcode,
                    image: item.url,
                    size: item.size,
                    purchasePrice: item.price,
                    discount: item.cashback,
                    purchaseCard: item.card,
                    saleDate: item.selldate,
                    placeOfSale: item.platform,
                    salePrice: item.sell,
                    shippingCost: item.ship,
                    settlementDate: item.settledate,
                    revenue: item.profit
                }
                switch (item.status) {
                    case 1:
                        setOrderItems([...orderItems, tmp]);
                        return;
                    case 2:
                        setDeliveryItems([...deliveryItems, tmp]);
                        return;
                    case 3:
                        setPossessionItems([...possessionItems, tmp]);
                        return;
                    case 4:
                        setReservationItems([...reservationItems, tmp]);
                        return;
                    default:
                        setSalesCompletionItems([...salesCompletionItems, tmp]);
                        return;
                }
            });
        }
        query();
    }, []);

    const handleItemClick = (item: Item) => {
        setSelectedItem(item);
    };
    const handleItemClose = () => {
        setSelectedItem(null);
    };

    const handleItemDelete = (item: Item) => {

    };
    const handleItemModify = (item: Item) => {

    }

    return (
        <div className='container'>
            <h1 className='header'>Inventory Management Page</h1>
            <div className='status-list'>
                <div className='status'>
                    <h2>주문</h2>
                    <InventoryList items={orderItems} onItemClick={handleItemClick} onDelete={handleItemDelete} onModify={handleItemModify}/>
                </div>
                <div className='status'>
                    <h2>배송</h2>
                    <InventoryList items={deliveryItems} onItemClick={handleItemClick} onDelete={handleItemDelete} onModify={handleItemModify}/>
                </div>
                <div className='status'>
                    <h2>보유</h2>
                    <InventoryList items={possessionItems} onItemClick={handleItemClick} onDelete={handleItemDelete} onModify={handleItemModify}/>
                </div>
                <div className='status'>
                    <h2>예약</h2>
                    <InventoryList items={reservationItems} onItemClick={handleItemClick} onDelete={handleItemDelete} onModify={handleItemModify}/>
                </div>
                <div className='status'>
                    <h2>완료</h2>
                    <InventoryList items={salesCompletionItems} onItemClick={handleItemClick} onDelete={handleItemDelete} onModify={handleItemModify}/>
                </div>
            </div>
            {selectedItem && <ItemDetail item={selectedItem} onClose={handleItemClose}/>}
        </div>
    )
}

export default InventoryManagementPage;