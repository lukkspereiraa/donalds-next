import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestarantHeader from "./components/header";

interface RestaurantMenuPageProps {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ consumptionMethod: string }>
}

const isConsumptionMethod = (consumptionMethod: string) => {
    return ["DINE_IN", "TAKE_AWAY"].includes(consumptionMethod.toUpperCase())
}

const RestarantMenuPage = async ({ params, searchParams }: RestaurantMenuPageProps) => {
    const { slug } = await params;
    const { consumptionMethod } = await searchParams;

    if (!isConsumptionMethod(consumptionMethod)) {
        return notFound()
    }

    const restaurant = await db.restaurant.findUnique({ where: { slug: slug } });
    if (!restaurant) {
        return notFound()
    }
    return (
        <div>
            <RestarantHeader restaurant={restaurant} />
        </div>
    );
}

export default RestarantMenuPage;