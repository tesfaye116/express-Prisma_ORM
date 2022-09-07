import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteOperation = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await prisma.user.delete({
            where: {
                id
            }
        });
        res.json({
            success: true,
            data: user
        });
    } catch (error) {

        res.status(500).json({
            success: false,
            error: error
        });
    }
};

export default deleteOperation;