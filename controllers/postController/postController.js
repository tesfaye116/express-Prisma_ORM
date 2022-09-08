import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const readPost = async (req, res) => {

    try {
        const post = await prisma.post.findMany({
            include: {
                author: true
            }
        })
        res.json({
            status: 'success',
            data: post
        })

    } catch (error) {
        res.json({
            status: 'error',
            data: null
        })
    }
}
export const createPost = async (req, res) => {
    try {
        const { title, content, published, author: { id }
        } = req.body;

        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                published,
                author: {
                    connect: {
                        id
                    }
                }
            },
            include: {
                author: true
            }
        });
        res.send({
            status: 'success',
            data: newPost
        });
    } catch (error) {
        res.send({
            status: 'error',
            message: error.message
        }
        );
    }
}

export const updatePost = async (req, res) => {

    try {
        const { id } = req.params
        const { title, content, published } = req.body

        const post = await prisma.post.update({
            where: {
                id
            },
            data: {
                title,
                content,
                published
            },
            include: {
                author: true
            }

        })
        res.json({
            status: "success",
            data: post
        })
    } catch (error) {
        res.json({
            status: error,
            data: null
        })
    }

}



export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const deletePosts = await prisma.post.delete({
            where: {
                id
            }
        })
        res.json({
            status: "success",
            message: deletePosts
        })

    } catch (error) {
        res.json({
            status: "error",
            data: error
        })
    }
}