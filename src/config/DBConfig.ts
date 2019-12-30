const MONGODB_CONNECTION: string = "mongodb://localhost:27017/todays";
import mongoose from 'mongoose'
export class DBConfig {

	constructor() {

        mongoose.createConnection(MONGODB_CONNECTION,{
            useNewUrlParser: true
        }).then(() => {
            console.log("successfully connected...")
        }).catch((err) => {
            console.log(`Oops something went wrong ${err}`)
        })

    }



}
