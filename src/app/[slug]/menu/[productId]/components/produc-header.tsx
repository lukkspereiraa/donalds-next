'use client';

import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
    product: Pick<Product, "imageUrl" | "name">
}

const ProductHeader = ({ product }: ProductHeaderProps) => {
    const router = useRouter();
    const back = () => router.back();
    return (
        <div className="relative h-[300px] w-full">
            <Button variant="secondary"
                size="icon"
                className="absolute left-4 top-4 rounded-full z-50"
                asChild
                onClick={(back)}
            >
                <ChevronLeftIcon />
            </Button>

            <Button variant="secondary" size="icon" className="absolute right-4 top-4 rounded-full z-50">
                <ScrollTextIcon />
            </Button>
            <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain"
            />
        </div>
    );
}

export default ProductHeader;