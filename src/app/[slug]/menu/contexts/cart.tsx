"use client"

import { Product } from "@prisma/client";
import { createContext, useState } from "react";

export interface CartProduct extends Pick<Product, "id" | "name" | "price" | "imageUrl"> {
    quantity: number;
}

export interface ICardContext {
    isOpen: boolean;
    products: CartProduct[],
    toggleCart: () => void;
    addProduct: (product: CartProduct) => void;
}

export const CartContext = createContext<ICardContext>({
    isOpen: false,
    products: [],
    toggleCart: () => { },
    addProduct: () => { },
})

export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const [products, setProducts] = useState<CartProduct[]>([])
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleCart = () => {
        setIsOpen((prev) => !prev)
    }
    const addProduct = (product: CartProduct) => {

        const productIsAlreadyInCart = products.some((prevProduct) => prevProduct.id === product.id)
        if (!productIsAlreadyInCart) {
            return setProducts((prev) => [...prev, product])
        }

        setProducts((prevProduct) => {
            return prevProduct.map(prevProduct => {
                if (prevProduct.id === product.id) {
                    return {
                        ...prevProduct,
                        quantity: prevProduct.quantity + product.quantity
                    }
                }
                return prevProduct
            })
        })
    }
    return (
        <CartContext.Provider
            value={{
                isOpen,
                products,
                toggleCart,
                addProduct,
            }}>
            {children}
        </CartContext.Provider>
    )
}