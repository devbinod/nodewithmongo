const MONGODB_CONNECTION: string = "mongodb://localhost:27017/socialmedia";
import mongoose from "mongoose";
export class DBConfig {
  constructor() {
    this.openConnection();
  }

  openConnection = async () => {
    await mongoose.connect(MONGODB_CONNECTION).catch(err => {
      console.log(`Oops something went wrong ${err}`);
    });

    console.log(`Successfully`);
  };
}
