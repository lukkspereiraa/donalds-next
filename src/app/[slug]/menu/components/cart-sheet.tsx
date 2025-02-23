import { useContext } from "react";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

import { CartContext } from "../contexts/cart";

const CartSheet = () => {

    const { isOpen, toggleCart, products } = useContext(CartContext)

    return (
        <Sheet open={isOpen} onOpenChange={toggleCart}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nisi provident ullam delectus deserunt sequi voluptatibus beatae, minima, voluptatem laborum nobis. Quod maxime amet sit neque aut voluptas. Doloremque, nobis.
                    </SheetDescription>
                </SheetHeader>
                {products.map(product => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.quantity}</p>
                    </div>
                ))}
            </SheetContent>
        </Sheet>
    );
}

export default CartSheet;