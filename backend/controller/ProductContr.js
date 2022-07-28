import Products from "../model/ProductModel.js";
import Users from "../model/UsersModel.js";
import { Op } from "sequelize";

export const CreateProduct = async (req, res) => {
    const { name, price } = req.body;

    try {
        await Products.create({
            name: name,
            price: price,
            userId: req.userId
        });
        res.status(201).json({ msg: "Berhasil membuat produk!" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

}

export const UpdateProduct = async (req, res) => {
    try {
        const product = await Products.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if (!product) res.status(404).json({ msg: "Produk tidak ditemukan!" })

        const { name, price } = req.body;

        if (req.role === "admin") {                     //  req.role = dari middleware
            await Products.update(
                { name, price },
                {
                    where: {
                        id: product.id
                    }
                }
            )
        } else {
            if (req.userId !== product.userId) return res.status(403).json({ msg: "Akses terlarang!" })
            await Products.update(
                { name, price },
                {
                    where: {
                        [Op.and]: [
                            { id: product.id },
                            { userId: req.userId }      //  req.userId = dari middleware
                        ],
                        userId: req.userId              //  req.userId = dari middleware
                    }
                }
            )
        }
        res.status(200).json({ msg: "Produk berhasil diupdate!" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const DeleteProduct = async (req, res) => {
    try {
        const product = await Products.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if (!product) res.status(404).json({ msg: "Produk tidak ditemukan!" })

        const { name, price } = req.body;

        if (req.role === "admin") {                     //  req.role = dari middleware
            await Products.destroy(
                {
                    where: {
                        id: product.id
                    }
                }
            )
        } else {
            if (req.userId !== product.userId) return res.status(403).json({ msg: "Akses terlarang!" })
            await Products.destroy(
                {
                    where: {
                        [Op.and]: [
                            { id: product.id },
                            { userId: req.userId }      //  req.userId = dari middleware
                        ],
                        userId: req.userId              //  req.userId = dari middleware
                    }
                }
            )
        }
        res.status(200).json({ msg: "Produk berhasil dihapus!" })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getProducts = async (req, res) => {
    try {
        let response;
        if (req.role === "admin") {                 //  req.role = dari middleware
            response = await Products.findAll({
                attributes: ['uuid', 'name', 'price'],
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            })
        } else {
            response = await Products.findAll({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    userId: req.userId              //  req.userId = dari middleware
                },
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Products.findOne({
            where: {
                uuid: req.params.id
            }
        })
        if (!product) res.status(404).json({ msg: "Produk tidak ditemukan!" })

        let response;
        if (req.role === "admin") {                 //  req.role = dari middleware
            response = await Products.findOne({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    id: product.id
                },
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            })
        } else {
            response = await Products.findOne({
                attributes: ['uuid', 'name', 'price'],
                where: {
                    [Op.and]: [
                        { id: product.id },
                        { userId: req.userId }
                    ],
                    userId: req.userId              //  req.userId = dari middleware
                },
                include: [{
                    model: Users,
                    attributes: ['name', 'email']
                }]
            })
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

