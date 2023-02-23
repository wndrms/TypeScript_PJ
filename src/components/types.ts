export interface Item {
    id: number;
    purchaseDate: string;
    productId: string;
    image: string;
    size: string;
    purchasePrice: number;
    discount: number;
    purchaseCard: string;
    saleDate: string;
    placeOfSale: string;
    salePrice: number;
    shippingCost: number;
    settlementDate: string;
    revenue: number;
}

export enum InventoryStatus {
    ORDER = 'order',
    DELIVERY = 'delivery',
    POSSESSION = 'possession',
    RESERVATION = 'reservation',
    SALES_COMPLETION = 'salesCompletion',
}