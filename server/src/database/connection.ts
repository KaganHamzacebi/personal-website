import {connect} from 'mongoose';

export default async function connectMongoDB() {
    const NODE_ENV = process.env.NODE_ENV;
    const connectionString = NODE_ENV === 'development' ?
        'mongodb://cl9usb6v6001gbgmt2vik5cnv:0EZxaq0AgH6UgGfKwRYtyeLa@158.101.214.51:9000/?readPreference=primary&ssl=false'
        :
        process.env.DB_URI;
    await connect(connectionString);
}