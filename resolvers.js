import { Widgets } from './data/dbConnections.js';

const resolvers = {
    getProduct: async ({ id }) => {
        try {
            const product = await Widgets.findById(id);
            return product;
        } catch (error) {
            throw new Error("Falha ao obter o produto: " + error.message);
        }
    },
    createProduct: async ({ input }) => {
        try {
            const newProduct = new Widgets(input);
            await newProduct.save();
            return newProduct;
        } catch (error) {
            throw new Error("Falha ao criar o produto: " + error.message);
        }
    },
    //update
    updateProduct: async ({ input }) => {
        try {
            const updatedProduct = await Widgets.findByIdAndUpdate(input, { new: true });
            return updatedProduct;
        } catch (error) {
            throw new Error("Falha ao atualizar o produto: " + error.message);
        }
    },

    //delete
    deleteProduct: async ({ id }) => {
        try {
            const deletedProduct = await Widgets.findByIdAndDelete(id);
            return deletedProduct;
        } catch (error) {
            throw new Error("Falha ao deletar o produto: " + error.message);
        }
    }
}

export default resolvers;