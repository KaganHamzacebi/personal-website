import {createMessage} from "../database/models/message";

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {},
    Mutation: {
        saveMessage: (_, data, {message: IMessage}) => {
            return createMessage(data.message);
        }
    }
};

export default resolvers;