import {Model} from 'mongoose'
import {UserModel} from './user'
export interface IModel {

    user: Model<UserModel>;
}