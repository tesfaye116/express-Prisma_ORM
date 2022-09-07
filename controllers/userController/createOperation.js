import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createOperation = async (req, res) => {
    try {
        const {
            name,
            email,
            profile: { bio }
        } = req.body;

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                profile: {
                    create: {
                        bio
                    }
                }
            }
        });
        return res.json({
            success: true,
            data: newUser
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message || error.toString()
        })
    }
}

export default createOperation
