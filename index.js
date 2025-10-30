import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema.js';
import resolvers from './resolvers.js';

const PORT = 8080;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, GraphQL!');
});

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(PORT, () => {
    console.log(`Servidor sendo executado em http://localhost:${PORT}/graphql`);
});