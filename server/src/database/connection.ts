import {connect} from 'mongoose';

export default async function connectMongoDB() {
    const connectionString = "mongodb://cl9usb6v6001gbgmt2vik5cnv:0EZxaq0AgH6UgGfKwRYtyeLa@nope:9000/?readPreference=primary&ssl=false";
    await connect(connectionString);
}