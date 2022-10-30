import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import typeDefs from "./gql/typedefs.js";
import resolvers from "./gql/resolvers.js";
import connectMongoDB from "./database/connection.js";
import dotenv from 'dotenv';

dotenv.config();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers
});

connectMongoDB()
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    })

// @ts-ignore
const {url} = await startStandaloneServer(server, {
    listen: {
        port: 4000
    },
});

console.log(`Server ready at: ${url}`);