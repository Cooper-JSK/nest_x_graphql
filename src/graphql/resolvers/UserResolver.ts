
import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from '../models/User'
import { testUsers } from "src/_mocks_/testUsers";

@Resolver()
export class UserResolver {

    @Query((returns) => User, { nullable: true})
    getUserById(@Args('id', {type: () => Int}) id: number) {
        return testUsers.find(user => user.id === id)
    }
}