import { Body, Controller, Get, Param, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.schema";
import { log } from "console";
import { UserCreateDto } from "./dto/user.create.dto";

@Controller('user')
export class UserController{
    constructor(private readonly  userService:UserService){}

    @Get(':username')
    async getUser(@Param('username') username:string): Promise<User>{
        log(arguments);
        return await this.userService.getUser(username);
    }
    @Post()
    async createUser(@Body() user: User){
        log(user)
        return await this.userService.createUser(user);
    }
}