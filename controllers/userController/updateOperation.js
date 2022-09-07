import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


const updateOperation = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, email, profile: { bio } } = req.body;

        const user = await prisma.user.update({
            where: { id },
            data: {
                name,
                email,
                profile: {
                    update: {
                        bio: bio
                    }
                }
            },
            include: {
                profile: true
            }
        });
        res.json({
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            data: null,
        });
    }
};


export default updateOperation