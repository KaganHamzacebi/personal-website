import {connect} from 'mongoose';

export default async function connectMongoDB() {
    const connectionString = "mongodb://cl9urpoze001bbgmtgaog51e2:0BQok9BGMEzGTaSXosq9iy5l@cl9urpozh03ummtbg73baqdxz:27017/?readPreference=primary&ssl=false";
    await connect(connectionString);
}