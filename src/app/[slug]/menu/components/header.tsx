"use client"

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, "name" | "coverImageUrl">
}

const RestarantHeader = ({ restaurant }: RestaurantHeaderProps) => {
    const router = useRouter();
    const back = () => router.back();
    return (
        <div className="relative h-[250px] w-full">
            <Button variant="secondary"
                size="icon"
                className="absolute left-4 top-4 rounded-full z-50"
                onClick={(back)}
                asChild
            >
                <ChevronLeftIcon />
            </Button>

            <Image
                src={restaurant.coverImageUrl}
                alt={restaurant.name}
                fill
                className="object-cover"
            />

            <Button variant="secondary" size="icon" className="absolute right-4 top-4 rounded-full z-50">
                <ScrollTextIcon />
            </Button>
        </div>);
}

export default RestarantHeader;