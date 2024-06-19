import { prisma } from "../../config/prisma.js";

export const createAd = async () => {
    try {
        return await prisma.ads.create({
            data: {
                title: data.title,
                userId: data.userId,
                categoryId: data.categoryId,
                price: data.price,
                priceNegotiable: data.priceNegotiable,
                
            }
        })
    } catch (error) {
        throw new Error(`Failed to get all categories ${error,message}`)
    }
}