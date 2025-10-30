import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema.js';

const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, GraphQL!');
});

const root = {
    product: () => {
        return {
            id: '1',
            name: 'Sample Product',
            description: 'This is a sample product.',
            price: 19.99,
            soldout: false,
            stores: [{ name: 'Store A' }, { name: 'Store B' }]
        };
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
});