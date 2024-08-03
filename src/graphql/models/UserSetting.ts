//https://youtu.be/CSfZmyzQAG8?si=1I9ankaEUpPly4E3&t=2103

import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class UserSetting{

    @Field(type => Int)
    userId: number;

    @Field({ defaultValue: false})
    receiveNotifications: boolean;

    @Field( {defaultValue: false})
    receiveEmails: boolean;
}