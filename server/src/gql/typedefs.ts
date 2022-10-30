// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
    input IMessage {
        firstName: String
        lastName: String
        email: String
        subject: String
        content: String
    }
    
    type Query {
        a: Boolean
    }
    
    type Mutation {
        saveMessage(message: IMessage): Boolean
    }
`;

export default typeDefs;