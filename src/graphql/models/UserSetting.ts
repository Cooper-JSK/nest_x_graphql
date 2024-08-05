//https://youtu.be/CSfZmyzQAG8?si=1I9ankaEUpPly4E3&t=2103
import { Entity, Column,  PrimaryColumn} from 'typeorm'
import { ObjectType, Field, Int } from "@nestjs/graphql";


@Entity({ name: 'user_settings'})
@ObjectType()
export class UserSetting{


    @PrimaryColumn()
    @Field(type => Int)
    userId: number;


    @Column( {default : false})
    @Field({ defaultValue: false})
    receiveNotifications: boolean;


    @Column({default : false})
    @Field( {defaultValue: false})
    receiveEmails: boolean;
}