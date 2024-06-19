import { prisma } from "../../config/prisma.js";

export const createAd = async () => {
    try {
        return await prisma.ads.create({
            data: {
                
            }
        })
    } catch (error) {
        throw new Error(`Failed to get all categories ${error,message}`)
    }
}