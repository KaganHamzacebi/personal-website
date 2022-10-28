import {createServer} from '@graphql-yoga/node'
import express from 'express'

export function buildApp(app: ReturnType<typeof express>) {
    const graphQLServer = createServer({
        cors: {
            origin: 'http://localhost:5000',
            credentials: true,
            allowedHeaders: ['X-Custom-Header'],
            methods: ['POST', 'GET']
        },
        schema: {
            typeDefs: /* GraphQL */ `
        scalar File
        type Query {
          hello: String
        }
        type Mutation {
          getFileName(file: File!): String
        }
        type Subscription {
          countdown(from: Int!): Int!
        }
      `,
            resolvers: {
                Query: {
                    hello: () => 'world',
                },
                Mutation: {
                    getFileName: (root, {file}: { file: File }) => file.name,
                },
                Subscription: {
                    countdown: {
                        async* subscribe(_, {from}) {
                            for (let i = from; i >= 0; i--) {
                                await new Promise((resolve) => setTimeout(resolve, 1000))
                                yield {countdown: i}
                            }
                        },
                    },
                },
            },
        },
        logging: false,
    })

    app.use('/graphql', graphQLServer)

    return app
}