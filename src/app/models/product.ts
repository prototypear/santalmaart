import { Image } from 'src/app/models/image';

export interface Product {
    id: number,
    title: string,
    oldPrice: number,
    currentPrice: number,
    shortDesc: string,
    longDesc: string,
    sku: string,
    inStock: boolean,
    addInfo: string,  //aditional info
    published_at: string,
    slug: string,  //short name to redirect
    categoryId: number,
    outOfStock: boolean,
    onSell: boolean,
    images: Image[],
    featured?: boolean
}