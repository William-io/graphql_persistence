import { productDatabase, Product } from './model/product.js';



const resolvers = {
    getProduct: ({ id }) => {
        const productData = productDatabase[id];
        return productData ? new Product(id, productData) : null;
    },
    createProduct: ({ input }) => {
        let id = require('crypto').randomBytes(8).toString('hex');
        productDatabase[id] = input;
        return new Product(id, input);
    }
}

export default resolvers;