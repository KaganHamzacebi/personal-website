import {ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api.kaganhamzacebi.com:4000/',
    cache: new InMemoryCache()
});