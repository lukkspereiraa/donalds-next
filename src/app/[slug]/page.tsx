import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ConsuptionMethodOption from "./components/consuption-method-option";
interface RestaurantPageProps {
    params: Promise<{ slug: string }>
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
    const { slug } = await params;
    const restalrant = await db.restaurant.findUnique({ where: { slug: slug } });
    if (!restalrant) {
        return notFound()
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center px-6 py-24">
            {/* logo */}
            <div className="flex flex-col items-center gap-2">
                <Image src={restalrant?.avatarImageUrl} alt={restalrant?.name} width={82} height={82} />
                <h2 className="font-semibold">
                    {restalrant.name}
                </h2>
            </div>
            {/* bem vindo */}
            <div className="pt-24 text-center space-y-2">
                <h3 className="text-2xl font-semibold">
                    Seja bem vindo
                </h3>
                <p className="opacity-55">
                    Escolha como preferer receber seu pedido.
                </p>
            </div>

            <div className="pt-14 grid grid-cols-2 gap-4">
                <ConsuptionMethodOption
                    slug={slug}
                    buttonText="Comer aqui"
                    imageAlt="Comer aqui"
                    imageUrl="/dine_in.svg"
                    option="DINE_IN" />
                    
                <ConsuptionMethodOption
                    slug={slug}
                    buttonText="Levar"
                    imageAlt="Levar"
                    imageUrl="/tackeaw.svg"
                    option="TAKE_AWAY"
                />
            </div>

        </div>
    );
}

export default RestaurantPage;