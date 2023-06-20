import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserDocument, UserSchema} from './user.schema'
import { Model } from 'mongoose';
import { UserCreateDto } from './dto/user.create.dto';
import { log } from 'console';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async getUser(username:string): Promise<User>{
        try{
            const result = await this.userModel.findOne({username:username}).lean();
            log(result)
            return result;
        }catch(e){
            console.log('error', e);
        }
    } 
    async createUser(user: User) {
     return await this.userModel.findOne({username:user.username}).lean().then(user=>{
        log(user);
        if (!user){
            return  new this.userModel(user);
        }
        return user;
      })
    }
}
