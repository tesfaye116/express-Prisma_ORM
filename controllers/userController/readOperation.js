import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const readOperation = async (req, res) => {

    try {
        const readUser = await prisma.user.findMany({
            where: {
                id: req.params.id
            },
            include: {
                profile: true
            }
        });

        res.json({
            success: true,
            data: readUser
        });
    } catch (error) {
        res.json({
            success: false,
            error
        });
    }
}

export default readOperation