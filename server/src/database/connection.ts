import {connect} from 'mongoose';

export default async function connectMongoDB() {
    const connectionString = "mongodb://cl9usb6v6001gbgmt2vik5cnv:0EZxaq0AgH6UgGfKwRYtyeLa@158.101.214.51:9000/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
    await connect(connectionString);
}