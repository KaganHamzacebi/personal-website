import express from 'express'
import {buildApp} from './app';

const app = express()
buildApp(app)

app.listen(5000, () => {
    console.log('GraphQL API located at http://localhost:5000/graphql')
})