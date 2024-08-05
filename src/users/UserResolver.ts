import { Inject} from '@nestjs/common'
import { Args, Int, Query, Resolver, ResolveField, Parent, Mutation } from "@nestjs/graphql";
import { User } from '../graphql/models/User'
import { UserSetting} from '../graphql/models/UserSetting'
import { UserSettingService} from './UserSettingService'
import { CreateUserInput} from '../graphql/utils/CreateUserInput'
import { UserService} from './UserService'

export let incrementId = 3;

@Resolver((of) => User)
export class UserResolver {


    constructor(@Inject(UserService) private userService: UserService,
    private userSettingService: UserSettingService) {

    }


    @Query((returns) => User, { nullable: true})
    getUserById(@Args('id', {type: () => Int}) id: number) {
        return this.userService.getUserById(id)
    }

    @Query(() => [User]) 
    async getUsers() {
        return this.userService.getUsers();
    }

    // @ResolveField((returns) => UserSetting, {name: 'settings', nullable: true})
    // getUserSettings(@Parent() user: User) {
    //      return this.userSettingService.getUserSettingById(user.id)
    // }

    @Mutation(returns => User)
    createUser(@Args('createUserData') createUserData: CreateUserInput){
        return this.userService.createUser(createUserData);

    }
    
}