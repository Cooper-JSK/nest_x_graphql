
import { Args, Int, Query, Resolver, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from '../models/User'
import { UserSetting} from '../models/UserSetting'
import { testUsers } from "src/_mocks_/testUsers";
import { testUserSettings } from "src/_mocks_/testUserSettings";
import { CreateUserInput} from '../utils/CreateUserInput'

export let incrementId = 3;

@Resolver((of) => User)
export class UserResolver {

    @Query((returns) => User, { nullable: true})
    getUserById(@Args('id', {type: () => Int}) id: number) {
        return testUsers.find(user => user.id === id)
    }

    @Query(() => [User]) 
    getUsers() {
        return testUsers
    }

    @ResolveField((returns) => UserSetting, {name: 'settings', nullable: true})
    getUserSettings(@Parent() user: User) {
         return testUserSettings.find((setting) => setting.userId === user.id)
    }

    @Mutation(returns => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput){
        const  {username, displayName} = createUserData
        const newUser = { username, displayName, id: ++incrementId};
        testUsers.push(newUser);
        return newUser

    }
    
}