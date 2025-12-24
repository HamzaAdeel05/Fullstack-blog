import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

 const connect = async () => {
    const connectionstate = mongoose.connection.readyState;
    if (connectionstate === 1) {
        console.log("Already Connected");
        return;
    }
    if (connectionstate === 2) {
        console.log("Connecting");
        return;
    }
    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: 'restapis',
            bufferCommands: true,
        });
        console.log("Connected");
    } catch (error: any) {
        console.log("Error", error);
        throw new Error('Error ', error)

    }

}
export default connect;