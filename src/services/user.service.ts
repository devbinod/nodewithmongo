import {Request, Response} from 'express'
import mongoose,{MongooseDocument} from 'mongoose'
import {UserModel} from '../models/user'
import { userSchema } from '../schemas/user.schemas'
import { IModel } from '../models/model'
import { IUser } from '../interfaces/user'

export class UserService {

    private model:IModel;


	constructor($model: IModel) {
        this.model = $model;
        this.model.user = mongoose.model<UserModel>("user",userSchema)
	}



    getAllUser = async(req: Request, res: Response) => {
        
        this.model.user
        

    }

    save = async(user:IUser) => {
        console.log("users ..........")
        console.log(user)
        return await new this.model.user(user).save()
      
           
            

    }

}