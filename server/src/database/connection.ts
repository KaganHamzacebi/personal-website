import { connect } from 'mongoose';

export default async function connectMongoDB() {
  const NODE_ENV = process.env.NODE_ENV;
  const connectionString = NODE_ENV === 'development' ?
      'mongodb://localhost:27017/personal_website' :
      process.env.DB_URI;
  await connect(connectionString);
}