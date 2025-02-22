
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductHeader from "./components/produc-header";

interface ProductPageProps {
    params: Promise<{ slug: string, productId: string }>
}


const ProductPage = async ({ params }: ProductPageProps) => {
    const { slug, productId } = await params;

    const product = await db.product.findUnique({
        where: {
            id: productId
        }
    })
    if (!product) {
        return notFound()
    }
    console.log(product);
    return (
        <>
            <ProductHeader product={product} />
            <h1>{slug}</h1 >
        </>
    );
}

export default ProductPage;